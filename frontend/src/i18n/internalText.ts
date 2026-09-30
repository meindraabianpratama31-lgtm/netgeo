import { useLocaleStore, type Locale } from './index';

/** Application-owned runtime messages only; never translate vendor payloads. */
export const INTERNAL_TEXT: Record<string, Record<Exclude<Locale, 'en'>, string>> = {
  "Request failed": { id: "Permintaan gagal", "zh-CN": "请求失败", es: "La solicitud falló", ar: "فشل الطلب" },
  "Network error": { id: "Kesalahan jaringan", "zh-CN": "网络错误", es: "Error de red", ar: "خطأ في الشبكة" },
  "Cannot reach the server. Check your connection.": { id: "Tidak dapat menghubungi server. Periksa koneksi Anda.", "zh-CN": "无法连接服务器。请检查网络连接。", es: "No se puede conectar al servidor. Comprueba la conexión.", ar: "تعذر الاتصال بالخادم. تحقق من اتصالك." },
  "Could not load activities.": { id: "Tidak dapat memuat aktivitas.", "zh-CN": "无法加载活动。", es: "No se pudieron cargar las actividades.", ar: "تعذر تحميل الأنشطة." },
  "Open a project first — its current network is what gets captured.": { id: "Buka proyek terlebih dahulu — jaringan saat ini yang akan direkam.", "zh-CN": "请先打开项目，以捕获其当前网络。", es: "Abre primero un proyecto: se capturará su red actual.", ar: "افتح مشروعاً أولاً — سيتم التقاط شبكته الحالية." },
  "Give the activity a name before saving.": { id: "Beri nama aktivitas sebelum menyimpan.", "zh-CN": "请先为活动命名再保存。", es: "Asigna un nombre a la actividad antes de guardarla.", ar: "أعط النشاط اسماً قبل الحفظ." },
  "Could not capture the current network.": { id: "Tidak dapat merekam jaringan saat ini.", "zh-CN": "无法捕获当前网络。", es: "No se pudo capturar la red actual.", ar: "تعذر التقاط الشبكة الحالية." },
  "Could not save the activity.": { id: "Tidak dapat menyimpan aktivitas.", "zh-CN": "无法保存活动。", es: "No se pudo guardar la actividad.", ar: "تعذر حفظ النشاط." },
  "Could not delete the activity.": { id: "Tidak dapat menghapus aktivitas.", "zh-CN": "无法删除活动。", es: "No se pudo eliminar la actividad.", ar: "تعذر حذف النشاط." },
  "Could not start the activity.": { id: "Tidak dapat memulai aktivitas.", "zh-CN": "无法开始活动。", es: "No se pudo iniciar la actividad.", ar: "تعذر بدء النشاط." },
  "Grading failed. Try again.": { id: "Penilaian gagal. Coba lagi.", "zh-CN": "评分失败，请重试。", es: "La evaluación falló. Inténtalo de nuevo.", ar: "فشل التقييم. حاول مجدداً." },
  "Submit failed. Try again.": { id: "Pengiriman gagal. Coba lagi.", "zh-CN": "提交失败，请重试。", es: "El envío falló. Inténtalo de nuevo.", ar: "فشل الإرسال. حاول مجدداً." },
  "Could not export the activity.": { id: "Tidak dapat mengekspor aktivitas.", "zh-CN": "无法导出活动。", es: "No se pudo exportar la actividad.", ar: "تعذر تصدير النشاط." },
  "That file is not a valid .netgeo-lab activity.": { id: "File tersebut bukan aktivitas .netgeo-lab yang valid.", "zh-CN": "该文件不是有效的 .netgeo-lab 活动。", es: "El archivo no es una actividad .netgeo-lab válida.", ar: "الملف ليس نشاط .netgeo-lab صالحاً." },
  "Update failed.": { id: "Pembaruan gagal.", "zh-CN": "更新失败。", es: "La actualización falló.", ar: "فشل التحديث." },
  "Failed to load fiber paths.": { id: "Gagal memuat jalur serat optik.", "zh-CN": "无法加载光纤路径。", es: "No se pudieron cargar las rutas de fibra.", ar: "تعذر تحميل مسارات الألياف." },
  "Failed to create path.": { id: "Gagal membuat jalur.", "zh-CN": "无法创建路径。", es: "No se pudo crear la ruta.", ar: "تعذر إنشاء المسار." },
  "Failed to delete path.": { id: "Gagal menghapus jalur.", "zh-CN": "无法删除路径。", es: "No se pudo eliminar la ruta.", ar: "تعذر حذف المسار." },
  "Elevation provider unavailable — try again shortly.": { id: "Penyedia elevasi tidak tersedia — coba lagi sebentar.", "zh-CN": "高程服务不可用，请稍后重试。", es: "Proveedor de elevación no disponible; inténtalo en breve.", ar: "مزود الارتفاع غير متاح — حاول بعد قليل." },
  "Link calculation failed.": { id: "Perhitungan tautan gagal.", "zh-CN": "链路计算失败。", es: "Falló el cálculo del enlace.", ar: "فشل حساب الرابط." },
  "Sector calculation failed.": { id: "Perhitungan sektor gagal.", "zh-CN": "扇区计算失败。", es: "Falló el cálculo del sector.", ar: "فشل حساب القطاع." },
  "Product selection failed.": { id: "Pemilihan produk gagal.", "zh-CN": "产品选择失败。", es: "Falló la selección del producto.", ar: "فشل اختيار المنتج." },
  "Failed to load saved studies.": { id: "Gagal memuat studi tersimpan.", "zh-CN": "无法加载已保存的研究。", es: "No se pudieron cargar los estudios guardados.", ar: "تعذر تحميل الدراسات المحفوظة." },
  "Failed to save study.": { id: "Gagal menyimpan studi.", "zh-CN": "无法保存研究。", es: "No se pudo guardar el estudio.", ar: "تعذر حفظ الدراسة." },
  "Failed to open study.": { id: "Gagal membuka studi.", "zh-CN": "无法打开研究。", es: "No se pudo abrir el estudio.", ar: "تعذر فتح الدراسة." },
  "Failed to delete study.": { id: "Gagal menghapus studi.", "zh-CN": "无法删除研究。", es: "No se pudo eliminar el estudio.", ar: "تعذر حذف الدراسة." },
  "Too many attempts. Please wait a minute and try again.": { id: "Terlalu banyak percobaan. Tunggu sebentar lalu coba lagi.", "zh-CN": "尝试次数过多。请稍等一分钟后重试。", es: "Demasiados intentos. Espera un minuto y vuelve a intentarlo.", ar: "محاولات كثيرة جداً. انتظر دقيقة وحاول مجدداً." },
  "Incorrect username or password.": { id: "Nama pengguna atau kata sandi salah.", "zh-CN": "用户名或密码错误。", es: "Usuario o contraseña incorrectos.", ar: "اسم المستخدم أو كلمة المرور غير صحيحة." },
  "Setup was already completed. Please sign in instead.": { id: "Penyiapan sudah selesai. Silakan masuk.", "zh-CN": "设置已完成，请登录。", es: "La configuración ya se completó. Inicia sesión.", ar: "اكتمل الإعداد بالفعل. يرجى تسجيل الدخول." },
  "Could not complete setup.": { id: "Tidak dapat menyelesaikan penyiapan.", "zh-CN": "无法完成设置。", es: "No se pudo completar la configuración.", ar: "تعذر إكمال الإعداد." },
  "Current password is incorrect.": { id: "Kata sandi saat ini salah.", "zh-CN": "当前密码错误。", es: "La contraseña actual es incorrecta.", ar: "كلمة المرور الحالية غير صحيحة." },
  "Could not change the password.": { id: "Tidak dapat mengubah kata sandi.", "zh-CN": "无法更改密码。", es: "No se pudo cambiar la contraseña.", ar: "تعذر تغيير كلمة المرور." },
  "Enter a valid http:// or https:// server origin.": { id: "Masukkan alamat server http:// atau https:// yang valid.", "zh-CN": "请输入有效的 http:// 或 https:// 服务器地址。", es: "Introduce un origen de servidor http:// o https:// válido.", ar: "أدخل عنوان خادم http:// أو https:// صالحاً." },
  "Server did not respond within 5 seconds. Check its address and network connection.": { id: "Server tidak merespons dalam 5 detik. Periksa alamat dan koneksi jaringan.", "zh-CN": "服务器在 5 秒内未响应。请检查地址和网络连接。", es: "El servidor no respondió en 5 segundos. Comprueba su dirección y la conexión.", ar: "لم يستجب الخادم خلال 5 ثوانٍ. تحقق من عنوانه واتصال الشبكة." },
  "Could not reach the server. Check its address, HTTPS compatibility, and whether it allows this app origin through CORS.": { id: "Tidak dapat menghubungi server. Periksa alamat, kompatibilitas HTTPS, dan izin asal aplikasi melalui CORS.", "zh-CN": "无法连接服务器。请检查地址、HTTPS 兼容性及 CORS 是否允许此应用来源。", es: "No se pudo conectar al servidor. Comprueba la dirección, compatibilidad HTTPS y si CORS permite el origen de esta aplicación.", ar: "تعذر الاتصال بالخادم. تحقق من عنوانه وتوافق HTTPS وسماح CORS بمصدر هذا التطبيق." },
  "Server denied the health check. Check its authentication or proxy configuration.": { id: "Server menolak pemeriksaan kesehatan. Periksa autentikasi atau konfigurasi proksi.", "zh-CN": "服务器拒绝健康检查。请检查身份验证或代理配置。", es: "El servidor rechazó la comprobación de estado. Revisa la autenticación o el proxy.", ar: "رفض الخادم فحص السلامة. تحقق من المصادقة أو إعدادات الوكيل." },
  "Server health check failed ({status}).": { id: "Pemeriksaan kesehatan server gagal ({status}).", "zh-CN": "服务器健康检查失败（{status}）。", es: "Falló la comprobación del servidor ({status}).", ar: "فشل فحص سلامة الخادم ({status})." },
  "This server did not identify itself as a healthy NetGeo backend.": { id: "Server ini tidak teridentifikasi sebagai backend NetGeo yang sehat.", "zh-CN": "此服务器未标识为正常的 NetGeo 后端。", es: "Este servidor no se identificó como un backend NetGeo saludable.", ar: "لم يعرّف الخادم نفسه كخادم NetGeo سليم." },
  "A valid remote server origin is required.": { id: "Alamat server jarak jauh yang valid diperlukan.", "zh-CN": "需要有效的远程服务器地址。", es: "Se requiere un origen de servidor remoto válido.", ar: "يلزم عنوان خادم بعيد صالح." },
  "Local engine must use a loopback HTTP(S) address and a port from 1 to 65535.": { id: "Mesin lokal harus memakai alamat HTTP(S) loopback dan port 1 hingga 65535.", "zh-CN": "本地引擎必须使用回环 HTTP(S) 地址及 1 至 65535 的端口。", es: "El motor local debe usar una dirección HTTP(S) de bucle local y un puerto entre 1 y 65535.", ar: "يجب أن يستخدم المحرك المحلي عنوان HTTP(S) للاسترجاع ومنفذاً من 1 إلى 65535." },
  "unknown version": { id: "versi tidak diketahui", "zh-CN": "未知版本", es: "versión desconocida", ar: "إصدار غير معروف" },
  "Geocoding failed (HTTP {status})": { id: "Geocoding gagal (HTTP {status})", "zh-CN": "地理编码失败（HTTP {status}）", es: "Falló la geocodificación (HTTP {status})", ar: "فشل الترميز الجغرافي (HTTP {status})" },
};

export function translateInternal(locale: Locale, source: string, variables?: Record<string, string | number>): string {
  const text = locale === 'en' ? source : INTERNAL_TEXT[source]?.[locale] ?? source;
  return variables ? text.replace(/\{(\w+)\}/g, (match, name: string) => String(variables[name] ?? match)) : text;
}

export function internalText(source: string, variables?: Record<string, string | number>): string {
  return translateInternal(useLocaleStore.getState().locale, source, variables);
}

/** Refresh an already visible application error when the language changes. */
export function relocalizeInternal(source: string | null, locale: Locale): string | null {
  if (source === null) return null;
  const original = INTERNAL_TEXT[source] ? source : Object.keys(INTERNAL_TEXT).find(
    (key) => Object.values(INTERNAL_TEXT[key]!).includes(source),
  );
  return original ? translateInternal(locale, original) : source;
}
