/**
 * PresenceBar — stacked avatars of collaborators currently in the project.
 * Reads collabStore presence (populated by useCollaboration when /ws/collab is
 * live). Renders nothing when alone, so it is invisible until collaboration is
 * enabled and a second peer joins.
 */
import { useCollabStore } from '@/store/collabStore';
import { useFeatureText } from '@/i18n/featureText';

const MAX_AVATARS = 4;

export function PresenceBar() {
  const t = useFeatureText();
  const peers = useCollabStore((s) => s.peerList());
  if (peers.length === 0) return null;

  const shown = peers.slice(0, MAX_AVATARS);
  const overflow = peers.length - shown.length;

  return (
    <div
      className="flex items-center"
      role="group"
      aria-label={t('{count} collaborators online', { count: peers.length })}
    >
      <div className="flex -space-x-1.5">
        {shown.map((p) => (
          <span
            key={p.id}
            title={p.name}
            className="grid h-6 w-6 place-items-center rounded-full border border-black/40 text-[10px] font-semibold text-fg shadow"
            style={{ background: p.color }}
          >
            {p.name?.[0]?.toUpperCase() ?? '?'}
          </span>
        ))}
        {overflow > 0 && (
          <span className="grid h-6 w-6 place-items-center rounded-full border border-black/40 bg-fg/15 text-[10px] font-semibold text-fg/80">
            +{overflow}
          </span>
        )}
      </div>
    </div>
  );
}
