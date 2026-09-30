/**
 * CommandPalette — Ctrl/⌘+K launcher (design §16). Fuzzy (subsequence) filter
 * over a static command list plus live device/IP matches from the topology.
 * No new dependencies: the matcher is a ~10-line subsequence scorer. Opens/
 * closes via the shared uiStore.activeModal slot ('command'), so it can never
 * stack with another modal (design 12-UI §2.3).
 *
 * Commands cover Phase-1 scope: module navigation, add device, run simulation,
 * open CLI/diagnostics, fit canvas, export config, and jump-to-device.
 *
 * QA-visual #1 (2026-09-12): also absorbs the map's old floating "Search
 * location…" box (removed — MapSearch.tsx) as a two-step location search:
 * typing text that isn't (yet) a location search shows a "Search … as a
 * location" entry; running it calls Nominatim once (geocodeService), same
 * as MapSearch did, and its own results replace that entry with "Fly to …"
 * commands. Two-step by design, not one geocode call per keystroke — the
 * provider's usage policy (see geocodeService.ts) forbids autocomplete-per-
 * keystroke and caps requests at 1/s.
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, CornerDownLeft } from 'lucide-react';
import { useUiStore, type DrawerTab } from '@/store/uiStore';
import { useTopoUiStore } from '@/store/topoUiStore';
import { useTopologyStore } from '@/store/topologyStore';
import { useMapStore } from '@/store/mapStore';
import { simApi } from '@/api/client';
import type { NodeModel } from '@/api/types';
import { geocode, type GeoResult } from '@/services/geocodeService';
import { cn } from '@/lib/cn';
import { zc } from '@/theme/z';
import { useUiText } from '@/i18n/uiText';

interface Command {
  id: string;
  title: string;
  hint?: string;
  run: () => void;
  /** Skip the palette's default close-on-run — used by the location-search
   *  trigger, which needs to stay open while its geocode call resolves. */
  keepOpen?: boolean;
}

/** Subsequence match: true if every char of `q` appears in order in `text`. */
function subseq(text: string, q: string): boolean {
  if (!q) return true;
  let i = 0;
  for (const ch of text.toLowerCase()) {
    if (ch === q[i]) i++;
    if (i === q.length) return true;
  }
  return i === q.length;
}

function mgmtIp(node: NodeModel): string | undefined {
  return node.interfaces.find((i) => i.ip.length > 0)?.ip[0];
}

export function CommandPalette() {
  const u = useUiText();
  const open = useUiStore((s) => s.activeModal === 'command');
  const closeModal = useUiStore((s) => s.closeModal);
  const setViewMode = useUiStore((s) => s.setViewMode);
  const openModal = useUiStore((s) => s.openModal);
  const openDrawer = useUiStore((s) => s.openDrawer);
  const projectId = useUiStore((s) => s.projectId);
  const setSimState = useUiStore((s) => s.setSimState);
  const openPicker = useTopoUiStore((s) => s.openPicker);
  const fit = useTopoUiStore((s) => s.fit);
  const nodes = useTopologyStore((s) => s.nodes);
  const select = useTopologyStore((s) => s.select);

  // Drawer tabs live only in topology/map — hop to topology first if elsewhere.
  const openDrawerTab = (tab: DrawerTab) => {
    const vm = useUiStore.getState().viewMode;
    if (vm !== 'topology' && vm !== 'map') setViewMode('topology');
    openDrawer(tab);
  };

  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Location search (QA-visual #1) — `geoQuery` is the trimmed text the last
  // geocode() call ran for; results stay attached to that exact text so
  // editing the query falls back to the trigger row instead of showing stale
  // results for a different place.
  const [geoQuery, setGeoQuery] = useState<string | null>(null);
  const [geoResults, setGeoResults] = useState<GeoResult[] | null>(null);
  const [geoLoading, setGeoLoading] = useState(false);
  const geoAbortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (open) {
      setQ('');
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      geoAbortRef.current?.abort();
      setGeoQuery(null);
      setGeoResults(null);
      setGeoLoading(false);
    }
  }, [open]);

  const runGeoSearch = (query: string) => {
    geoAbortRef.current?.abort();
    const ctrl = new AbortController();
    geoAbortRef.current = ctrl;
    setGeoLoading(true);
    setGeoQuery(query);
    geocode(query, ctrl.signal)
      .then((rows) => {
        if (geoAbortRef.current !== ctrl) return; // superseded by a newer search
        setGeoResults(rows);
        setGeoLoading(false);
      })
      .catch((err) => {
        if ((err as Error).name === 'AbortError' || geoAbortRef.current !== ctrl) return;
        setGeoResults([]);
        setGeoLoading(false);
      });
  };

  const close = () => closeModal();

  const commands: Command[] = useMemo(() => {
    const nav: Command[] = [
      { id: 'go-topology', title: u('Go to Topology'), hint: u('Navigate'), run: () => setViewMode('topology') },
      { id: 'go-map', title: u('Go to Map'), hint: u('Navigate'), run: () => setViewMode('map') },
      // RF/Fiber have no rail/sub-nav entry (S8 NAV-02 — map is the single
      // rail surface); this palette entry plus auto-open-on-deploy and the
      // /rf, /fiber deep links are their only doors in.
      { id: 'go-rf', title: u('Go to RF Planning'), hint: u('Navigate'), run: () => setViewMode('rf') },
      { id: 'go-fiber', title: u('Go to Fiber / FTTH'), hint: u('Navigate'), run: () => setViewMode('fiber') },
      { id: 'go-plant', title: u('Go to Physical Plant'), hint: u('Navigate'), run: () => setViewMode('plant') },
      { id: 'add-device', title: u('Add device…'), hint: u('Action'), run: () => openPicker() },
      {
        id: 'run-sim',
        title: u('Run simulation'),
        hint: u('Action'),
        run: () => {
          if (!projectId) return;
          setSimState('running');
          void simApi.start({ project_id: projectId, realtime: true }).catch(() => setSimState('idle'));
        },
      },
      { id: 'open-cli', title: u('Open CLI / Console'), hint: u('Action'), run: () => openDrawerTab('console') },
      { id: 'open-diag', title: u('Open Diagnostics'), hint: u('Action'), run: () => openDrawerTab('diagnostics') },
      { id: 'open-ledger', title: u('Open Event Ledger'), hint: u('Action'), run: () => openDrawerTab('ledger') },
      { id: 'open-racks', title: u('Open Physical Plant'), hint: u('Action'), run: () => setViewMode('plant') },
      { id: 'open-config', title: u('Export / View config'), hint: u('Action'), run: () => openDrawerTab('config') },
      { id: 'fit', title: u('Fit topology'), hint: u('View'), run: () => fit?.() },
      { id: 'settings', title: u('Open Settings'), hint: u('Action'), run: () => openModal('settings') },
    ];

    const query = q.trim().toLowerCase();
    const staticMatches = nav.filter((c) => subseq(c.title, query));

    // Live device/IP jump results (design §16: "Find device/IP").
    const deviceMatches: Command[] = [];
    if (query) {
      for (const n of nodes.values()) {
        const ip = mgmtIp(n);
        if (subseq(n.name, query) || (ip && ip.toLowerCase().includes(query))) {
          deviceMatches.push({
            id: `dev-${n.id}`,
            title: u('Go to {name}', { name: n.name }),
            hint: ip ?? n.kind,
            run: () => {
              setViewMode('topology');
              select({ nodeId: n.id });
              fit?.();
            },
          });
        }
        if (deviceMatches.length >= 6) break;
      }
    }

    // Place/address search (QA-visual #1 — absorbed from the removed
    // MapSearch box). `q.trim()` (not lowercased `query`) so Nominatim sees
    // the text as typed.
    const trimmed = q.trim();
    const locationCommands: Command[] = [];
    if (trimmed) {
      if (geoQuery === trimmed && geoResults !== null) {
        if (geoResults.length === 0) {
          locationCommands.push({ id: 'geo-empty', title: u('No matching places'), hint: u('Location'), run: () => {} });
        }
        geoResults.forEach((r, i) => {
          locationCommands.push({
            id: `geo-${i}`,
            title: u('Fly to {place}', { place: r.label }),
            hint: u('Location'),
            run: () => {
              setViewMode('map');
              useMapStore.getState().setSearchResult(r);
            },
          });
        });
      } else {
        locationCommands.push({
          id: 'search-location',
          title: geoLoading ? u('Searching “{query}”…', { query: trimmed }) : u('Search “{query}” as a location', { query: trimmed }),
          hint: u('Location'),
          keepOpen: true,
          run: () => {
            if (!geoLoading) runGeoSearch(trimmed);
          },
        });
      }
    }

    return [...staticMatches, ...deviceMatches, ...locationCommands];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, nodes, setViewMode, openPicker, projectId, setSimState, openModal, fit, select, geoQuery, geoResults, geoLoading, u]);

  if (!open) return null;

  const run = (c: Command | undefined) => {
    if (!c) return;
    c.run();
    if (!c.keepOpen) close();
  };

  return (
    <div
      className={cn('fixed inset-0 grid place-items-start justify-center pt-[14vh]', zc.modal)}
      role="dialog"
      aria-modal="true"
      aria-label={u('Command palette')}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="absolute inset-0 bg-recess/50 backdrop-blur-sm" aria-hidden />

      <div className="glass-strong relative z-10 flex max-h-[60vh] w-[min(600px,92vw)] flex-col overflow-hidden rounded-xl border border-fg/15 shadow-glass-lg animate-scale-in">
        <div className="flex items-center gap-2 border-b border-fg/10 px-3.5 py-3">
          <Search className="h-4 w-4 shrink-0 text-fg/40" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') close();
              else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, commands.length - 1));
              } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === 'Enter') {
                e.preventDefault();
                run(commands[active]);
              }
            }}
            placeholder={u('Type a command, search devices/IPs, or find a place…')}
            aria-label={u('Command palette')}
            className="w-full bg-transparent text-sm text-fg/90 placeholder:text-fg/35 outline-none"
          />
          <kbd className="hidden shrink-0 rounded border border-fg/15 px-1.5 py-0.5 font-mono text-[10px] text-fg/40 sm:inline">
            ⌘K
          </kbd>
        </div>

        <ul className="ng-scroll flex-1 overflow-auto py-1.5">
          {commands.length === 0 ? (
            <li className="px-4 py-6 text-center text-sm text-fg/40">{u('No matching commands.')}</li>
          ) : (
            commands.map((c, i) => (
              <li key={c.id}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onClick={() => run(c)}
                  className={cn(
                    'flex w-full items-center justify-between gap-3 px-4 py-2 text-left',
                    i === active ? 'bg-fg/10' : 'hover:bg-fg/6',
                  )}
                >
                  <span className="truncate text-sm text-fg/90">{c.title}</span>
                  <span className="flex shrink-0 items-center gap-2">
                    {c.hint && <span className="font-mono text-[10px] text-fg/40">{c.hint}</span>}
                    {i === active && <CornerDownLeft className="h-3.5 w-3.5 text-fg/30" />}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
