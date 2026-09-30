import { afterEach, describe, expect, it } from 'vitest';
import { useLocaleStore, type Locale } from './index';
import { INTERNAL_TEXT, internalText, relocalizeInternal, translateInternal } from './internalText';
import { translateCatalog } from './catalogText';
import { deviceCatalog } from '@/data/deviceCatalog';
import { useEduStore } from '@/store/eduStore';
import { normalizeRemoteOrigin, saveRuntimeProfile } from '@/config/runtimeProfile';

afterEach(() => {
  useLocaleStore.getState().setLocale('en');
  useEduStore.setState({ error: null });
  localStorage.clear();
});

describe('runtime localization', () => {
  it('supplies real translations for every internal message', () => {
    for (const [source, translations] of Object.entries(INTERNAL_TEXT)) {
      for (const locale of ['id', 'zh-CN', 'es', 'ar'] as const) {
        expect(translations[locale].trim(), `${source}: ${locale}`).not.toBe('');
        expect(translations[locale], `${source}: ${locale}`).not.toBe(source);
        expect([...translations[locale].matchAll(/\{(\w+)\}/g)].map(m => m[1]).sort())
          .toEqual([...source.matchAll(/\{(\w+)\}/g)].map(m => m[1]).sort());
      }
    }
  });

  it('translates runtime validation without modifying protocol addresses', () => {
    useLocaleStore.getState().setLocale('id');
    expect(() => saveRuntimeProfile({ mode: 'native-remote', remoteOrigin: 'bad' }))
      .toThrow('Alamat server jarak jauh yang valid diperlukan.');
    expect(normalizeRemoteOrigin('https://example.test:8443/api')).toBe('https://example.test:8443');
    expect(translateInternal('es', 'Server health check failed ({status}).', { status: 503 }))
      .toBe('Falló la comprobación del servidor (503).');
  });

  it('updates an existing store error across all languages', () => {
    const source = 'Give the activity a name before saving.';
    useEduStore.setState({ error: source });
    for (const locale of ['id', 'zh-CN', 'es', 'ar', 'en'] as Locale[]) {
      useLocaleStore.getState().setLocale(locale);
      expect(useEduStore.getState().error).toBe(translateInternal(locale, source));
    }
  });

  it('localizes device descriptions without changing template identities', () => {
    const before = JSON.stringify(deviceCatalog);
    for (const locale of ['id', 'zh-CN', 'es', 'ar'] as const) {
      for (const group of deviceCatalog) {
        expect(translateCatalog(locale, group.category)).not.toBe(group.category);
        for (const device of group.devices) {
          expect(translateCatalog(locale, device.description)).not.toBe(device.description);
        }
      }
    }
    expect(JSON.stringify(deviceCatalog)).toBe(before);
    expect(translateCatalog('ar', 'GPON OLT')).toBe('GPON OLT');
  });

  it('preserves unknown backend details and vendor commands', () => {
    useLocaleStore.getState().setLocale('ar');
    expect(internalText('interface GigabitEthernet0/1')).toBe('interface GigabitEthernet0/1');
    expect(relocalizeInternal('BGP peer 192.0.2.1 rejected', 'id')).toBe('BGP peer 192.0.2.1 rejected');
  });
});
