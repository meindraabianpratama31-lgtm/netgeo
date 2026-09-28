import { create } from 'zustand';

export const LOCALES = ['en', 'id', 'zh-CN', 'es', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

const STORAGE_KEY = 'netgeo.locale';
const COOKIE_KEY = 'netgeo_locale';

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
  'login.platform': 'Network Simulation Platform',
  'login.firstRun': 'First-run setup — create your admin account',
  'login.username': 'Username',
  'login.password': 'Password',
  'login.newPassword': 'New password',
  'login.confirmPassword': 'Confirm password',
  'login.hidePassword': 'Hide password',
  'login.showPassword': 'Show password',
  'login.minCharacters': 'At least {count} characters.',
  'login.passwordMismatch': 'Passwords do not match.',
  'login.creating': 'Creating account…',
  'login.signingIn': 'Signing in…',
  'login.createAndSignIn': 'Create account & sign in',
  'login.signIn': 'Sign in',
  'login.setupHint': 'This one-time setup secures your NetGeo instance',
  'login.signInHint': 'Sign in with your NetGeo account',
  'topology.add': 'Add',
  'topology.addDevice': 'Add device',
  'topology.select': 'Select',
  'topology.selectHint': 'Select (V)',
  'topology.link': 'Link',
  'topology.linkHint': 'Link mode (L) — drag between device ports',
  'topology.group': 'Group',
  'topology.groupHint': 'Grouping — coming in a later phase',
  'topology.delete': 'Delete',
  'topology.deleteDevice': 'Delete device',
  'topology.deleteLink': 'Delete link',
  'topology.deleteHint': 'Select a device or link to delete',
  'topology.autoLayout': 'Auto-layout',
  'topology.autoLayoutHint': 'Auto-layout (hierarchy) — repositions every node and cannot be undone',
  'topology.find': 'Find device or IP…',
  'topology.noDevices': 'No devices yet',
  'topology.findAria': 'Find device on canvas',
  'topology.clearSearch': 'Clear search',
  'topology.noMatch': 'No match for “{query}”',
  'picker.search': 'Search devices, templates, vendors…',
  'picker.searchAria': 'Search devices',
  'picker.close': 'Close',
  'picker.recent': 'Recent',
  'picker.noMatch': 'No device matches “{query}”.',
  'picker.hint': 'Enter to add the first match · Esc to close',
  'status.ready': 'System ready',
  'status.running': 'Simulation running',
  'status.paused': 'Simulation paused',
  'status.linkSelected': 'Link selected',
  'status.noSelection': 'No selection',
  'status.nodesLinks': '{nodes} nodes · {links} links',
  'status.drawer': 'Diagnostics drawer',
  'status.console': 'Console',
  'status.diagnostics': 'Diagnostics',
  'status.ledger': 'Event Ledger',
  'status.config': 'Config',
  'status.dropped': '{count} dropped',
  'status.online': 'online',
  'sim.play': 'Play', 'sim.pause': 'Pause', 'sim.step': 'Step', 'sim.stop': 'Stop', 'sim.speed': 'Simulation speed',
  'mode.lab': 'Lab mode', 'mode.realtime': 'Realtime', 'mode.realtimeHint': 'Realtime: actions run the lab to completion', 'mode.simulation': 'Simulation', 'mode.simulationHint': 'Simulation: step through every event in the ledger',
  'map.layer': 'Map layer', 'map.satellite': 'Satellite', 'map.street': 'Street', 'map.offline': 'Offline', 'map.tilesUnavailable': 'Tiles unavailable', 'map.loadingTiles': 'Loading tiles…',
  'map.select': 'Select', 'map.place': 'Place', 'map.rfPlanning': 'RF Planning (sandbox)', 'map.measure': 'Measure', 'map.deleteDevice': 'Delete selected device', 'map.rainControl': 'Rain rate control', 'map.rainRate': 'Rain Rate', 'map.clear': 'Clear', 'map.drizzle': 'Drizzle', 'map.heavy': 'Heavy', 'map.checkLos': 'Check Line of Sight', 'map.checkingLos': 'Checking LOS…', 'map.signalQuality': 'Signal Quality', 'map.strong': 'Strong', 'map.good': 'Good', 'map.fair': 'Fair', 'map.weak': 'Weak', 'map.losStatus': 'LOS Status', 'map.partial': 'Partial', 'map.blocked': 'Blocked', 'map.gisLayers': 'GIS layers', 'map.toggleGis': 'Toggle GIS layers', 'map.signalStrength': 'Signal Strength', 'map.selectHint': 'Click a device to select it • Delete key removes selected device', 'app.workspace': 'Workspace', 'topbar.userMenu': 'User menu',
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
  ...en,
  'language.english': 'Inggris', 'language.indonesian': 'Indonesia', 'language.chinese': 'Mandarin Sederhana', 'language.spanish': 'Spanyol', 'language.arabic': 'Arab',
  'nav.primary': 'Navigasi utama', 'nav.projects': 'Proyek', 'nav.design': 'Desain', 'nav.topology': 'Topologi', 'nav.plant': 'Infrastruktur Fisik', 'nav.config': 'Pusat Konfigurasi', 'nav.map': 'Peta', 'nav.simulate': 'Simulasi', 'nav.twin': 'Kembaran Digital', 'nav.education': 'Lab Pendidikan', 'nav.labs': 'Lab', 'nav.operate': 'Operasional', 'nav.problems': 'Pusat Masalah', 'nav.reports': 'Pusat Laporan', 'nav.settings': 'Pengaturan',
  'login.platform': 'Platform Simulasi Jaringan', 'login.firstRun': 'Penyiapan awal — buat akun admin Anda', 'login.username': 'Nama pengguna', 'login.password': 'Kata sandi', 'login.newPassword': 'Kata sandi baru', 'login.confirmPassword': 'Konfirmasi kata sandi', 'login.hidePassword': 'Sembunyikan kata sandi', 'login.showPassword': 'Tampilkan kata sandi', 'login.minCharacters': 'Minimal {count} karakter.', 'login.passwordMismatch': 'Kata sandi tidak sama.', 'login.creating': 'Membuat akun…', 'login.signingIn': 'Sedang masuk…', 'login.createAndSignIn': 'Buat akun dan masuk', 'login.signIn': 'Masuk', 'login.setupHint': 'Penyiapan satu kali ini mengamankan NetGeo Anda', 'login.signInHint': 'Masuk dengan akun NetGeo Anda',
  'topology.add': 'Tambah', 'topology.addDevice': 'Tambah perangkat', 'topology.select': 'Pilih', 'topology.selectHint': 'Pilih (V)', 'topology.link': 'Tautan', 'topology.linkHint': 'Mode tautan (L) — tarik di antara port perangkat', 'topology.group': 'Grup', 'topology.groupHint': 'Pengelompokan — tersedia pada tahap berikutnya', 'topology.delete': 'Hapus', 'topology.deleteDevice': 'Hapus perangkat', 'topology.deleteLink': 'Hapus tautan', 'topology.deleteHint': 'Pilih perangkat atau tautan untuk dihapus', 'topology.autoLayout': 'Tata otomatis', 'topology.autoLayoutHint': 'Tata otomatis (hierarki) — memindahkan semua node dan tidak dapat dibatalkan', 'topology.find': 'Cari perangkat atau IP…', 'topology.noDevices': 'Belum ada perangkat', 'topology.findAria': 'Cari perangkat di kanvas', 'topology.clearSearch': 'Bersihkan pencarian', 'topology.noMatch': 'Tidak ada hasil untuk “{query}”',
  'picker.search': 'Cari perangkat, templat, vendor…', 'picker.searchAria': 'Cari perangkat', 'picker.close': 'Tutup', 'picker.recent': 'Terbaru', 'picker.noMatch': 'Tidak ada perangkat yang cocok dengan “{query}”.', 'picker.hint': 'Enter untuk menambah hasil pertama · Esc untuk menutup',
  'status.ready': 'Sistem siap', 'status.running': 'Simulasi berjalan', 'status.paused': 'Simulasi dijeda', 'status.linkSelected': 'Tautan dipilih', 'status.noSelection': 'Tidak ada pilihan', 'status.nodesLinks': '{nodes} node · {links} tautan', 'status.drawer': 'Panel diagnostik', 'status.console': 'Konsol', 'status.diagnostics': 'Diagnostik', 'status.ledger': 'Catatan Peristiwa', 'status.config': 'Konfigurasi', 'status.dropped': '{count} dibuang', 'status.online': 'daring',
  'sim.play': 'Jalankan', 'sim.pause': 'Jeda', 'sim.step': 'Langkah', 'sim.stop': 'Hentikan', 'sim.speed': 'Kecepatan simulasi',
  'mode.lab': 'Mode lab', 'mode.realtime': 'Waktu nyata', 'mode.realtimeHint': 'Waktu nyata: tindakan menjalankan lab hingga selesai', 'mode.simulation': 'Simulasi', 'mode.simulationHint': 'Simulasi: telusuri setiap peristiwa dalam catatan',
  'map.layer': 'Lapisan peta', 'map.satellite': 'Satelit', 'map.street': 'Jalan', 'map.offline': 'Offline', 'map.tilesUnavailable': 'Tile tidak tersedia', 'map.loadingTiles': 'Memuat tile…',
  'map.select': 'Pilih', 'map.place': 'Tempatkan', 'map.rfPlanning': 'Perencanaan RF (sandbox)', 'map.measure': 'Ukur', 'map.deleteDevice': 'Hapus perangkat terpilih', 'map.rainControl': 'Kontrol curah hujan', 'map.rainRate': 'Curah Hujan', 'map.clear': 'Cerah', 'map.drizzle': 'Gerimis', 'map.heavy': 'Lebat', 'map.checkLos': 'Periksa Garis Pandang', 'map.checkingLos': 'Memeriksa LOS…', 'map.signalQuality': 'Kualitas Sinyal', 'map.strong': 'Kuat', 'map.good': 'Baik', 'map.fair': 'Cukup', 'map.weak': 'Lemah', 'map.losStatus': 'Status LOS', 'map.partial': 'Sebagian', 'map.blocked': 'Terhalang', 'map.gisLayers': 'Lapisan GIS', 'map.toggleGis': 'Tampilkan/sembunyikan lapisan GIS', 'map.signalStrength': 'Kekuatan Sinyal', 'map.selectHint': 'Klik perangkat untuk memilih • Tombol Delete menghapus perangkat terpilih', 'app.workspace': 'Ruang kerja', 'topbar.userMenu': 'Menu pengguna',
  'settings.general': 'Umum', 'settings.runtime': 'Runtime', 'settings.networkOs': 'Sistem Operasi Jaringan', 'settings.deviceTypes': 'Jenis Perangkat', 'settings.devicePacks': 'Paket Perangkat', 'settings.account': 'Akun', 'settings.appearance': 'Tampilan', 'settings.language': 'Bahasa', 'settings.languageDescription': 'Bahasa yang digunakan pada antarmuka aplikasi.', 'settings.theme': 'Tema', 'settings.themeDescription': 'Antarmuka Terang atau Gelap.', 'settings.dark': 'Gelap', 'settings.light': 'Terang', 'settings.simulation': 'Simulasi', 'settings.defaultSpeed': 'Kecepatan bawaan', 'settings.defaultSpeedDescription': 'Pengali kecepatan simulasi saat dijalankan.', 'settings.defaultSpeedAria': 'Kecepatan simulasi bawaan', 'settings.offlineMap': 'Peta Offline', 'settings.about': 'Tentang',
  'topbar.saved': 'Tersimpan', 'topbar.unsaved': 'Belum tersimpan', 'topbar.savedTitle': 'Semua perubahan sudah tersimpan', 'topbar.unsavedTitle': 'Ada perubahan lokal yang belum tersimpan', 'topbar.search': 'Cari perangkat, IP, lokasi, atau jalankan perintah…', 'topbar.openCommand': 'Buka palet perintah', 'topbar.autoAddress': 'Buka panduan pengalamatan otomatis', 'topbar.autoAddressTitle': 'Alamat otomatis: tinjau dan terapkan rencana IP dual-stack', 'topbar.toggleTheme': 'Ganti tema', 'topbar.localAccount': 'Akun lokal', 'topbar.signOut': 'Keluar', 'topbar.sections': 'bagian',
};

const zhCN: Messages = {
  ...en,
  'language.english': '英语', 'language.indonesian': '印度尼西亚语', 'language.chinese': '简体中文', 'language.spanish': '西班牙语', 'language.arabic': '阿拉伯语',
  'nav.primary': '主导航', 'nav.projects': '项目', 'nav.design': '设计', 'nav.topology': '拓扑', 'nav.plant': '物理设施', 'nav.config': '配置中心', 'nav.map': '地图', 'nav.simulate': '仿真', 'nav.twin': '数字孪生', 'nav.education': '教学实验室', 'nav.labs': '实验室', 'nav.operate': '运维', 'nav.problems': '问题中心', 'nav.reports': '报告中心', 'nav.settings': '设置',
  'login.platform': '网络仿真平台', 'login.firstRun': '首次设置 — 创建管理员账户', 'login.username': '用户名', 'login.password': '密码', 'login.newPassword': '新密码', 'login.confirmPassword': '确认密码', 'login.hidePassword': '隐藏密码', 'login.showPassword': '显示密码', 'login.minCharacters': '至少 {count} 个字符。', 'login.passwordMismatch': '密码不匹配。', 'login.creating': '正在创建账户…', 'login.signingIn': '正在登录…', 'login.createAndSignIn': '创建账户并登录', 'login.signIn': '登录', 'login.setupHint': '此一次性设置将保护您的 NetGeo 实例', 'login.signInHint': '使用您的 NetGeo 账户登录',
  'topology.add': '添加', 'topology.addDevice': '添加设备', 'topology.select': '选择', 'topology.selectHint': '选择 (V)', 'topology.link': '链路', 'topology.linkHint': '链路模式 (L) — 在设备端口之间拖动', 'topology.group': '分组', 'topology.groupHint': '分组功能将在后续阶段提供', 'topology.delete': '删除', 'topology.deleteDevice': '删除设备', 'topology.deleteLink': '删除链路', 'topology.deleteHint': '选择要删除的设备或链路', 'topology.autoLayout': '自动布局', 'topology.autoLayoutHint': '自动布局（层次）— 重新定位所有节点且无法撤销', 'topology.find': '查找设备或 IP…', 'topology.noDevices': '暂无设备', 'topology.findAria': '在画布上查找设备', 'topology.clearSearch': '清除搜索', 'topology.noMatch': '没有与“{query}”匹配的结果',
  'picker.search': '搜索设备、模板、厂商…', 'picker.searchAria': '搜索设备', 'picker.close': '关闭', 'picker.recent': '最近使用', 'picker.noMatch': '没有与“{query}”匹配的设备。', 'picker.hint': '按 Enter 添加第一个结果 · 按 Esc 关闭',
  'status.ready': '系统就绪', 'status.running': '仿真运行中', 'status.paused': '仿真已暂停', 'status.linkSelected': '已选择链路', 'status.noSelection': '未选择', 'status.nodesLinks': '{nodes} 个节点 · {links} 条链路', 'status.drawer': '诊断面板', 'status.console': '控制台', 'status.diagnostics': '诊断', 'status.ledger': '事件日志', 'status.config': '配置', 'status.dropped': '丢弃 {count} 个', 'status.online': '在线',
  'settings.general': '常规', 'settings.runtime': '运行时', 'settings.networkOs': '网络操作系统', 'settings.deviceTypes': '设备类型', 'settings.devicePacks': '设备包', 'settings.account': '账户', 'settings.appearance': '外观', 'settings.language': '语言', 'settings.languageDescription': '应用程序界面使用的语言。', 'settings.theme': '主题', 'settings.themeDescription': '浅色或深色界面。', 'settings.dark': '深色', 'settings.light': '浅色', 'settings.simulation': '仿真', 'settings.defaultSpeed': '默认速度', 'settings.defaultSpeedDescription': '播放时使用的仿真速度倍数。', 'settings.defaultSpeedAria': '默认仿真速度', 'settings.offlineMap': '离线地图', 'settings.about': '关于',
  'topbar.saved': '已保存', 'topbar.unsaved': '未保存', 'topbar.savedTitle': '所有更改均已保存', 'topbar.unsavedTitle': '存在未保存的本地更改', 'topbar.search': '搜索设备、IP、地点或运行命令…', 'topbar.openCommand': '打开命令面板', 'topbar.autoAddress': '打开自动寻址向导', 'topbar.autoAddressTitle': '自动寻址：预览并应用双栈 IP 方案', 'topbar.toggleTheme': '切换主题', 'topbar.localAccount': '本地账户', 'topbar.signOut': '退出登录', 'topbar.sections': '分区',
};

const es: Messages = {
  ...en,
  'language.english': 'Inglés', 'language.indonesian': 'Indonesio', 'language.chinese': 'Chino simplificado', 'language.spanish': 'Español', 'language.arabic': 'Árabe',
  'nav.primary': 'Navegación principal', 'nav.projects': 'Proyectos', 'nav.design': 'Diseño', 'nav.topology': 'Topología', 'nav.plant': 'Planta física', 'nav.config': 'Centro de configuración', 'nav.map': 'Mapa', 'nav.simulate': 'Simular', 'nav.twin': 'Gemelo digital', 'nav.education': 'Laboratorio educativo', 'nav.labs': 'Laboratorios', 'nav.operate': 'Operar', 'nav.problems': 'Centro de problemas', 'nav.reports': 'Centro de informes', 'nav.settings': 'Configuración',
  'login.platform': 'Plataforma de simulación de redes', 'login.firstRun': 'Configuración inicial — crea tu cuenta de administrador', 'login.username': 'Usuario', 'login.password': 'Contraseña', 'login.newPassword': 'Nueva contraseña', 'login.confirmPassword': 'Confirmar contraseña', 'login.hidePassword': 'Ocultar contraseña', 'login.showPassword': 'Mostrar contraseña', 'login.minCharacters': 'Al menos {count} caracteres.', 'login.passwordMismatch': 'Las contraseñas no coinciden.', 'login.creating': 'Creando cuenta…', 'login.signingIn': 'Iniciando sesión…', 'login.createAndSignIn': 'Crear cuenta e iniciar sesión', 'login.signIn': 'Iniciar sesión', 'login.setupHint': 'Esta configuración única protege tu instancia de NetGeo', 'login.signInHint': 'Inicia sesión con tu cuenta de NetGeo',
  'topology.add': 'Añadir', 'topology.addDevice': 'Añadir dispositivo', 'topology.select': 'Seleccionar', 'topology.selectHint': 'Seleccionar (V)', 'topology.link': 'Enlace', 'topology.linkHint': 'Modo enlace (L) — arrastra entre los puertos', 'topology.group': 'Agrupar', 'topology.groupHint': 'Agrupación — disponible en una fase posterior', 'topology.delete': 'Eliminar', 'topology.deleteDevice': 'Eliminar dispositivo', 'topology.deleteLink': 'Eliminar enlace', 'topology.deleteHint': 'Selecciona un dispositivo o enlace para eliminar', 'topology.autoLayout': 'Diseño automático', 'topology.autoLayoutHint': 'Diseño automático (jerarquía) — recoloca todos los nodos y no se puede deshacer', 'topology.find': 'Buscar dispositivo o IP…', 'topology.noDevices': 'Aún no hay dispositivos', 'topology.findAria': 'Buscar dispositivo en el lienzo', 'topology.clearSearch': 'Borrar búsqueda', 'topology.noMatch': 'Sin resultados para “{query}”',
  'picker.search': 'Buscar dispositivos, plantillas, proveedores…', 'picker.searchAria': 'Buscar dispositivos', 'picker.close': 'Cerrar', 'picker.recent': 'Recientes', 'picker.noMatch': 'Ningún dispositivo coincide con “{query}”.', 'picker.hint': 'Enter para añadir el primer resultado · Esc para cerrar',
  'status.ready': 'Sistema listo', 'status.running': 'Simulación en curso', 'status.paused': 'Simulación en pausa', 'status.linkSelected': 'Enlace seleccionado', 'status.noSelection': 'Sin selección', 'status.nodesLinks': '{nodes} nodos · {links} enlaces', 'status.drawer': 'Panel de diagnóstico', 'status.console': 'Consola', 'status.diagnostics': 'Diagnóstico', 'status.ledger': 'Registro de eventos', 'status.config': 'Configuración', 'status.dropped': '{count} descartados', 'status.online': 'en línea',
  'settings.general': 'General', 'settings.runtime': 'Entorno', 'settings.networkOs': 'SO de red', 'settings.deviceTypes': 'Tipos de dispositivo', 'settings.devicePacks': 'Paquetes de dispositivos', 'settings.account': 'Cuenta', 'settings.appearance': 'Apariencia', 'settings.language': 'Idioma', 'settings.languageDescription': 'Idioma utilizado por la interfaz de la aplicación.', 'settings.theme': 'Tema', 'settings.themeDescription': 'Interfaz clara u oscura.', 'settings.dark': 'Oscuro', 'settings.light': 'Claro', 'settings.simulation': 'Simulación', 'settings.defaultSpeed': 'Velocidad predeterminada', 'settings.defaultSpeedDescription': 'Multiplicador de velocidad aplicado al iniciar.', 'settings.defaultSpeedAria': 'Velocidad de simulación predeterminada', 'settings.offlineMap': 'Mapa sin conexión', 'settings.about': 'Acerca de',
  'topbar.saved': 'Guardado', 'topbar.unsaved': 'Sin guardar', 'topbar.savedTitle': 'Todos los cambios están guardados', 'topbar.unsavedTitle': 'Cambios locales sin guardar', 'topbar.search': 'Buscar dispositivos, IP, lugares o ejecutar un comando…', 'topbar.openCommand': 'Abrir paleta de comandos', 'topbar.autoAddress': 'Abrir asistente de direccionamiento automático', 'topbar.autoAddressTitle': 'Direccionamiento automático: revisar y aplicar un plan IP dual-stack', 'topbar.toggleTheme': 'Cambiar tema', 'topbar.localAccount': 'Cuenta local', 'topbar.signOut': 'Cerrar sesión', 'topbar.sections': 'secciones',
};

const ar: Messages = {
  ...en,
  'language.english': 'الإنجليزية', 'language.indonesian': 'الإندونيسية', 'language.chinese': 'الصينية المبسطة', 'language.spanish': 'الإسبانية', 'language.arabic': 'العربية',
  'nav.primary': 'التنقل الرئيسي', 'nav.projects': 'المشاريع', 'nav.design': 'التصميم', 'nav.topology': 'الطوبولوجيا', 'nav.plant': 'البنية المادية', 'nav.config': 'مركز الإعدادات', 'nav.map': 'الخريطة', 'nav.simulate': 'المحاكاة', 'nav.twin': 'التوأم الرقمي', 'nav.education': 'مختبر التعليم', 'nav.labs': 'المختبرات', 'nav.operate': 'التشغيل', 'nav.problems': 'مركز المشكلات', 'nav.reports': 'مركز التقارير', 'nav.settings': 'الإعدادات',
  'login.platform': 'منصة محاكاة الشبكات', 'login.firstRun': 'الإعداد الأول — أنشئ حساب المسؤول', 'login.username': 'اسم المستخدم', 'login.password': 'كلمة المرور', 'login.newPassword': 'كلمة مرور جديدة', 'login.confirmPassword': 'تأكيد كلمة المرور', 'login.hidePassword': 'إخفاء كلمة المرور', 'login.showPassword': 'إظهار كلمة المرور', 'login.minCharacters': '{count} أحرف على الأقل.', 'login.passwordMismatch': 'كلمتا المرور غير متطابقتين.', 'login.creating': 'جارٍ إنشاء الحساب…', 'login.signingIn': 'جارٍ تسجيل الدخول…', 'login.createAndSignIn': 'إنشاء الحساب وتسجيل الدخول', 'login.signIn': 'تسجيل الدخول', 'login.setupHint': 'يؤمّن هذا الإعداد لمرة واحدة نسخة NetGeo الخاصة بك', 'login.signInHint': 'سجّل الدخول باستخدام حساب NetGeo',
  'topology.add': 'إضافة', 'topology.addDevice': 'إضافة جهاز', 'topology.select': 'تحديد', 'topology.selectHint': 'تحديد (V)', 'topology.link': 'رابط', 'topology.linkHint': 'وضع الرابط (L) — اسحب بين منافذ الأجهزة', 'topology.group': 'تجميع', 'topology.groupHint': 'التجميع — سيتوفر في مرحلة لاحقة', 'topology.delete': 'حذف', 'topology.deleteDevice': 'حذف الجهاز', 'topology.deleteLink': 'حذف الرابط', 'topology.deleteHint': 'حدد جهازاً أو رابطاً لحذفه', 'topology.autoLayout': 'ترتيب تلقائي', 'topology.autoLayoutHint': 'ترتيب تلقائي (هرمي) — يعيد تموضع جميع العقد ولا يمكن التراجع عنه', 'topology.find': 'ابحث عن جهاز أو IP…', 'topology.noDevices': 'لا توجد أجهزة بعد', 'topology.findAria': 'البحث عن جهاز في اللوحة', 'topology.clearSearch': 'مسح البحث', 'topology.noMatch': 'لا توجد نتيجة لـ “{query}”',
  'picker.search': 'ابحث عن الأجهزة والقوالب والمورّدين…', 'picker.searchAria': 'البحث عن أجهزة', 'picker.close': 'إغلاق', 'picker.recent': 'الأخيرة', 'picker.noMatch': 'لا يوجد جهاز يطابق “{query}”.', 'picker.hint': 'Enter لإضافة أول نتيجة · Esc للإغلاق',
  'status.ready': 'النظام جاهز', 'status.running': 'المحاكاة قيد التشغيل', 'status.paused': 'المحاكاة متوقفة مؤقتاً', 'status.linkSelected': 'تم تحديد الرابط', 'status.noSelection': 'لا يوجد تحديد', 'status.nodesLinks': '{nodes} عقد · {links} روابط', 'status.drawer': 'لوحة التشخيص', 'status.console': 'وحدة التحكم', 'status.diagnostics': 'التشخيص', 'status.ledger': 'سجل الأحداث', 'status.config': 'الإعدادات', 'status.dropped': 'تم إسقاط {count}', 'status.online': 'متصل',
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

export function translate(locale: Locale, key: MessageKey, variables?: Record<string, string | number>): string {
  const value = messages[locale][key] ?? en[key];
  if (!variables) return value;
  return value.replace(/\{(\w+)\}/g, (match, name: string) => String(variables[name] ?? match));
}

export function applyLocale(locale: Locale): void {
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  document.title = `NetGeo — ${translate(locale, 'login.platform')}`;
}

function initialLocale(): Locale {
  const cookieLocale = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${COOKIE_KEY}=`))
    ?.split('=')[1];
  return normalizeLocale(localStorage.getItem(STORAGE_KEY) ?? cookieLocale ?? navigator.language);
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
    document.cookie = `${COOKIE_KEY}=${encodeURIComponent(locale)}; Max-Age=31536000; Path=/; SameSite=Strict`;
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
    t: (key: MessageKey, variables?: Record<string, string | number>) => translate(locale, key, variables),
  };
}
