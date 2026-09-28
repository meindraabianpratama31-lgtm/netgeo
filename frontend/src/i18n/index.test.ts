import { afterEach, describe, expect, it } from 'vitest';
import { applyLocale, normalizeLocale, translate, useLocaleStore } from './index';

afterEach(() => {
  localStorage.clear();
  useLocaleStore.getState().setLocale('en');
  localStorage.clear();
});

describe('locale normalization', () => {
  it('maps regional browser locales to the five supported languages', () => {
    expect(normalizeLocale('id-ID')).toBe('id');
    expect(normalizeLocale('zh-Hans-SG')).toBe('zh-CN');
    expect(normalizeLocale('es-MX')).toBe('es');
    expect(normalizeLocale('ar-SA')).toBe('ar');
    expect(normalizeLocale('fr-FR')).toBe('en');
  });
});

describe('translations', () => {
  it('provides navigation labels for every supported language', () => {
    expect(translate('en', 'nav.settings')).toBe('Settings');
    expect(translate('id', 'nav.settings')).toBe('Pengaturan');
    expect(translate('zh-CN', 'nav.settings')).toBe('设置');
    expect(translate('es', 'nav.settings')).toBe('Configuración');
    expect(translate('ar', 'nav.settings')).toBe('الإعدادات');
  });

  it('interpolates variables in translated feature text', () => {
    expect(translate('id', 'status.nodesLinks', { nodes: 3, links: 2 })).toBe('3 node · 2 tautan');
    expect(translate('es', 'topology.noMatch', { query: 'router' })).toBe('Sin resultados para “router”');
    expect(translate('ar', 'login.minCharacters', { count: 8 })).toBe('8 أحرف على الأقل.');
  });

  it('persists the selected locale and applies Arabic RTL direction', () => {
    useLocaleStore.getState().setLocale('ar');
    expect(localStorage.getItem('netgeo.locale')).toBe('ar');
    expect(document.cookie).toContain('netgeo_locale=ar');
    expect(document.documentElement.lang).toBe('ar');
    expect(document.documentElement.dir).toBe('rtl');

    applyLocale('id');
    expect(document.documentElement.dir).toBe('ltr');
  });
});
