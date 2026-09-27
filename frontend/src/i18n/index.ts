import { create } from 'zustand';

export const LOCALES = ['en', 'id', 'zh-CN', 'es', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

const STORAGE_KEY = 'netgeo.locale';

const en = {
  'language.english': 'English',
  'language.indonesian': 'Indonesian',
  'language.chinese': 'Simplified Chinese',
  'language.spanish': 'Spanish',
  'language.arabic': 'Arabic',
  'nav.primary': 'Primary navigation',
  'nav.projects': 'Projects',
  'nav.design': 'Design',
  'nav.topology': 'Topology',
  'nav.plant': 'Physical Plant',
  'nav.config': 'Config Center',
  'nav.map': 'Map',
  'nav.simulate': 'Simulate',
  'nav.twin': 'Digital Twin',
  'nav.education': 'Education Lab',
  'nav.labs': 'Labs',
  'nav.operate': 'Operate',
  'nav.problems': 'Problem Center',
  'nav.reports': 'Reports Center',
  'nav.settings': 'Settings',
  'settings.general': 'General',
  'settings.runtime': 'Runtime',
  'settings.networkOs': 'Network OS',
  'settings.deviceTypes': 'Device Types',
  'settings.devicePacks': 'Device Packs',
  'settings.account': 'Account',
  'settings.appearance': 'Appearance',
  'settings.language': 'Language',
  'settings.languageDescription': 'Language used by the application interface.',
  'settings.theme': 'Theme',
  'settings.themeDescription': 'Light or Dark interface.',
  'settings.dark': 'Dark',
  'settings.light': 'Light',
  'settings.simulation': 'Simulation',
  'settings.defaultSpeed': 'Default speed',
  'settings.defaultSpeedDescription': 'Simulation speed multiplier applied on play.',
  'settings.defaultSpeedAria': 'Default simulation speed',
  'settings.offlineMap': 'Offline Map',
  'settings.about': 'About',
  'topbar.saved': 'Saved',
  'topbar.unsaved': 'Unsaved',
  'topbar.savedTitle': 'All changes saved',
  'topbar.unsavedTitle': 'Unsaved local changes',
  'topbar.search': 'Search devices, IPs, places, or run a command…',
  'topbar.openCommand': 'Open command palette',
  'topbar.autoAddress': 'Open the auto-addressing wizard',
  'topbar.autoAddressTitle': 'Auto-address: preview and apply a dual-stack IP plan',
  'topbar.toggleTheme': 'Toggle theme',
  'topbar.localAccount': 'Local account',
  'topbar.signOut': 'Sign out',
  'topbar.sections': 'sections',
} as const;

export type MessageKey = keyof typeof en;
type Messages = Record<MessageKey, string>;

const id: Messages = {
  'language.english': 'Inggris', 'language.indonesian': 'Indonesia', 'language.chinese': 'Mandarin Sederhana', 'language.spanish': 'Spanyol', 'language.arabic': 'Arab',
  'nav.primary': 'Navigasi utama', 'nav.projects': 'Proyek', 'nav.design': 'Desain', 'nav.topology': 'Topologi', 'nav.plant': 'Infrastruktur Fisik', 'nav.config': 'Pusat Konfigurasi', 'nav.map': 'Peta', 'nav.simulate': 'Simulasi', 'nav.twin': 'Kembaran Digital', 'nav.education': 'Lab Pendidikan', 'nav.labs': 'Lab', 'nav.operate': 'Operasional', 'nav.problems': 'Pusat Masalah', 'nav.reports': 'Pusat Laporan', 'nav.settings': 'Pengaturan',
  'settings.general': 'Umum', 'settings.runtime': 'Runtime', 'settings.networkOs': 'Sistem Operasi Jaringan', 'settings.deviceTypes': 'Jenis Perangkat', 'settings.devicePacks': 'Paket Perangkat', 'settings.account': 'Akun', 'settings.appearance': 'Tampilan', 'settings.language': 'Bahasa', 'settings.languageDescription': 'Bahasa yang digunakan pada antarmuka aplikasi.', 'settings.theme': 'Tema', 'settings.themeDescription': 'Antarmuka Terang atau Gelap.', 'settings.dark': 'Gelap', 'settings.light': 'Terang', 'settings.simulation': 'Simulasi', 'settings.defaultSpeed': 'Kecepatan bawaan', 'settings.defaultSpeedDescription': 'Pengali kecepatan simulasi saat dijalankan.', 'settings.defaultSpeedAria': 'Kecepatan simulasi bawaan', 'settings.offlineMap': 'Peta Offline', 'settings.about': 'Tentang',
  'topbar.saved': 'Tersimpan', 'topbar.unsaved': 'Belum tersimpan', 'topbar.savedTitle': 'Semua perubahan sudah tersimpan', 'topbar.unsavedTitle': 'Ada perubahan lokal yang belum tersimpan', 'topbar.search': 'Cari perangkat, IP, lokasi, atau jalankan perintah…', 'topbar.openCommand': 'Buka palet perintah', 'topbar.autoAddress': 'Buka panduan pengalamatan otomatis', 'topbar.autoAddressTitle': 'Alamat otomatis: tinjau dan terapkan rencana IP dual-stack', 'topbar.toggleTheme': 'Ganti tema', 'topbar.localAccount': 'Akun lokal', 'topbar.signOut': 'Keluar', 'topbar.sections': 'bagian',
};

const zhCN: Messages = {
  'language.english': '英语', 'language.indonesian': '印度尼西亚语', 'language.chinese': '简体中文', 'language.spanish': '西班牙语', 'language.arabic': '阿拉伯语',
  'nav.primary': '主导航', 'nav.projects': '项目', 'nav.design': '设计', 'nav.topology': '拓扑', 'nav.plant': '物理设施', 'nav.config': '配置中心', 'nav.map': '地图', 'nav.simulate': '仿真', 'nav.twin': '数字孪生', 'nav.education': '教学实验室', 'nav.labs': '实验室', 'nav.operate': '运维', 'nav.problems': '问题中心', 'nav.reports': '报告中心', 'nav.settings': '设置',
  'settings.general': '常规', 'settings.runtime': '运行时', 'settings.networkOs': '网络操作系统', 'settings.deviceTypes': '设备类型', 'settings.devicePacks': '设备包', 'settings.account': '账户', 'settings.appearance': '外观', 'settings.language': '语言', 'settings.languageDescription': '应用程序界面使用的语言。', 'settings.theme': '主题', 'settings.themeDescription': '浅色或深色界面。', 'settings.dark': '深色', 'settings.light': '浅色', 'settings.simulation': '仿真', 'settings.defaultSpeed': '默认速度', 'settings.defaultSpeedDescription': '播放时使用的仿真速度倍数。', 'settings.defaultSpeedAria': '默认仿真速度', 'settings.offlineMap': '离线地图', 'settings.about': '关于',
  'topbar.saved': '已保存', 'topbar.unsaved': '未保存', 'topbar.savedTitle': '所有更改均已保存', 'topbar.unsavedTitle': '存在未保存的本地更改', 'topbar.search': '搜索设备、IP、地点或运行命令…', 'topbar.openCommand': '打开命令面板', 'topbar.autoAddress': '打开自动寻址向导', 'topbar.autoAddressTitle': '自动寻址：预览并应用双栈 IP 方案', 'topbar.toggleTheme': '切换主题', 'topbar.localAccount': '本地账户', 'topbar.signOut': '退出登录', 'topbar.sections': '分区',
};

const es: Messages = {
  'language.english': 'Inglés', 'language.indonesian': 'Indonesio', 'language.chinese': 'Chino simplificado', 'language.spanish': 'Español', 'language.arabic': 'Árabe',
  'nav.primary': 'Navegación principal', 'nav.projects': 'Proyectos', 'nav.design': 'Diseño', 'nav.topology': 'Topología', 'nav.plant': 'Planta física', 'nav.config': 'Centro de configuración', 'nav.map': 'Mapa', 'nav.simulate': 'Simular', 'nav.twin': 'Gemelo digital', 'nav.education': 'Laboratorio educativo', 'nav.labs': 'Laboratorios', 'nav.operate': 'Operar', 'nav.problems': 'Centro de problemas', 'nav.reports': 'Centro de informes', 'nav.settings': 'Configuración',
  'settings.general': 'General', 'settings.runtime': 'Entorno', 'settings.networkOs': 'SO de red', 'settings.deviceTypes': 'Tipos de dispositivo', 'settings.devicePacks': 'Paquetes de dispositivos', 'settings.account': 'Cuenta', 'settings.appearance': 'Apariencia', 'settings.language': 'Idioma', 'settings.languageDescription': 'Idioma utilizado por la interfaz de la aplicación.', 'settings.theme': 'Tema', 'settings.themeDescription': 'Interfaz clara u oscura.', 'settings.dark': 'Oscuro', 'settings.light': 'Claro', 'settings.simulation': 'Simulación', 'settings.defaultSpeed': 'Velocidad predeterminada', 'settings.defaultSpeedDescription': 'Multiplicador de velocidad aplicado al iniciar.', 'settings.defaultSpeedAria': 'Velocidad de simulación predeterminada', 'settings.offlineMap': 'Mapa sin conexión', 'settings.about': 'Acerca de',
  'topbar.saved': 'Guardado', 'topbar.unsaved': 'Sin guardar', 'topbar.savedTitle': 'Todos los cambios están guardados', 'topbar.unsavedTitle': 'Cambios locales sin guardar', 'topbar.search': 'Buscar dispositivos, IP, lugares o ejecutar un comando…', 'topbar.openCommand': 'Abrir paleta de comandos', 'topbar.autoAddress': 'Abrir asistente de direccionamiento automático', 'topbar.autoAddressTitle': 'Direccionamiento automático: revisar y aplicar un plan IP dual-stack', 'topbar.toggleTheme': 'Cambiar tema', 'topbar.localAccount': 'Cuenta local', 'topbar.signOut': 'Cerrar sesión', 'topbar.sections': 'secciones',
};

const ar: Messages = {
  'language.english': 'الإنجليزية', 'language.indonesian': 'الإندونيسية', 'language.chinese': 'الصينية المبسطة', 'language.spanish': 'الإسبانية', 'language.arabic': 'العربية',
  'nav.primary': 'التنقل الرئيسي', 'nav.projects': 'المشاريع', 'nav.design': 'التصميم', 'nav.topology': 'الطوبولوجيا', 'nav.plant': 'البنية المادية', 'nav.config': 'مركز الإعدادات', 'nav.map': 'الخريطة', 'nav.simulate': 'المحاكاة', 'nav.twin': 'التوأم الرقمي', 'nav.education': 'مختبر التعليم', 'nav.labs': 'المختبرات', 'nav.operate': 'التشغيل', 'nav.problems': 'مركز المشكلات', 'nav.reports': 'مركز التقارير', 'nav.settings': 'الإعدادات',
  'settings.general': 'عام', 'settings.runtime': 'بيئة التشغيل', 'settings.networkOs': 'نظام تشغيل الشبكة', 'settings.deviceTypes': 'أنواع الأجهزة', 'settings.devicePacks': 'حزم الأجهزة', 'settings.account': 'الحساب', 'settings.appearance': 'المظهر', 'settings.language': 'اللغة', 'settings.languageDescription': 'اللغة المستخدمة في واجهة التطبيق.', 'settings.theme': 'السمة', 'settings.themeDescription': 'واجهة فاتحة أو داكنة.', 'settings.dark': 'داكن', 'settings.light': 'فاتح', 'settings.simulation': 'المحاكاة', 'settings.defaultSpeed': 'السرعة الافتراضية', 'settings.defaultSpeedDescription': 'مضاعف سرعة المحاكاة عند التشغيل.', 'settings.defaultSpeedAria': 'سرعة المحاكاة الافتراضية', 'settings.offlineMap': 'الخريطة دون اتصال', 'settings.about': 'حول',
  'topbar.saved': 'محفوظ', 'topbar.unsaved': 'غير محفوظ', 'topbar.savedTitle': 'تم حفظ جميع التغييرات', 'topbar.unsavedTitle': 'تغييرات محلية غير محفوظة', 'topbar.search': 'ابحث عن أجهزة أو عناوين IP أو أماكن أو نفّذ أمراً…', 'topbar.openCommand': 'فتح لوحة الأوامر', 'topbar.autoAddress': 'فتح معالج العنونة التلقائية', 'topbar.autoAddressTitle': 'العنونة التلقائية: معاينة وتطبيق خطة IP مزدوجة المكدس', 'topbar.toggleTheme': 'تبديل السمة', 'topbar.localAccount': 'حساب محلي', 'topbar.signOut': 'تسجيل الخروج', 'topbar.sections': 'الأقسام',
};

const messages: Record<Locale, Messages> = { en, id, 'zh-CN': zhCN, es, ar };

export const LANGUAGE_OPTIONS: { value: Locale; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'id', label: 'Bahasa Indonesia' },
  { value: 'zh-CN', label: '简体中文' },
  { value: 'es', label: 'Español' },
  { value: 'ar', label: 'العربية' },
];

export function normalizeLocale(value: string | null | undefined): Locale {
  const normalized = value?.trim().toLowerCase();
  if (normalized === 'id' || normalized?.startsWith('id-')) return 'id';
  if (normalized === 'zh-cn' || normalized?.startsWith('zh-hans') || normalized === 'zh') return 'zh-CN';
  if (normalized === 'es' || normalized?.startsWith('es-')) return 'es';
  if (normalized === 'ar' || normalized?.startsWith('ar-')) return 'ar';
  return 'en';
}

export function translate(locale: Locale, key: MessageKey): string {
  return messages[locale][key] ?? en[key];
}

export function applyLocale(locale: Locale): void {
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
}

function initialLocale(): Locale {
  return normalizeLocale(localStorage.getItem(STORAGE_KEY) ?? navigator.language);
}

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const initial = initialLocale();
applyLocale(initial);

export const useLocaleStore = create<LocaleState>((set) => ({
  locale: initial,
  setLocale: (locale) => {
    localStorage.setItem(STORAGE_KEY, locale);
    applyLocale(locale);
    set({ locale });
  },
}));

export function useTranslation() {
  const locale = useLocaleStore((state) => state.locale);
  const setLocale = useLocaleStore((state) => state.setLocale);
  return {
    locale,
    setLocale,
    t: (key: MessageKey) => translate(locale, key),
  };
}
