import { type Locale } from './index';

const CATALOG_TEXT: Record<string, Record<Exclude<Locale, 'en'>, string>> = {
  "Routing": { id: "Perutean", "zh-CN": "路由", es: "Enrutamiento", ar: "التوجيه" },
  "Switching": { id: "Penyakelaran", "zh-CN": "交换", es: "Conmutación", ar: "التبديل" },
  "Wireless & Access": { id: "Nirkabel & Akses", "zh-CN": "无线与接入", es: "Inalámbrico y acceso", ar: "اللاسلكي والوصول" },
  "Security & Compute": { id: "Keamanan & Komputasi", "zh-CN": "安全与计算", es: "Seguridad y cómputo", ar: "الأمن والحوسبة" },
  "Real World": { id: "Dunia Nyata", "zh-CN": "真实环境", es: "Mundo real", ar: "العالم الحقيقي" },
  "Edge Router": { id: "Router Tepi", "zh-CN": "边缘路由器", es: "Router de borde", ar: "موجّه طرفي" },
  "Core Router": { id: "Router Inti", "zh-CN": "核心路由器", es: "Router central", ar: "موجّه أساسي" },
  "Access Switch": { id: "Switch Akses", "zh-CN": "接入交换机", es: "Conmutador de acceso", ar: "مبدّل الوصول" },
  "Spine Switch": { id: "Switch Spine", "zh-CN": "脊柱交换机", es: "Conmutador spine", ar: "مبدّل العمود الفقري" },
  "Wi-Fi 7 AP": { id: "Titik Akses Wi-Fi 7", "zh-CN": "Wi-Fi 7 接入点", es: "Punto de acceso Wi-Fi 7", ar: "نقطة وصول Wi-Fi 7" },
  "Firewall": { id: "Dinding Api", "zh-CN": "防火墙", es: "Cortafuegos", ar: "جدار حماية" },
  "Host / PC": { id: "Host / Komputer", "zh-CN": "主机 / 电脑", es: "Host / PC", ar: "مضيف / حاسوب" },
  "Server": { id: "Server", "zh-CN": "服务器", es: "Servidor", ar: "خادم" },
  "Internet / Cloud": { id: "Internet / Awan", "zh-CN": "互联网 / 云", es: "Internet / Nube", ar: "الإنترنت / السحابة" },
  "BGP/MPLS edge — multi-NOS target (IOS-XR/Junos/SR-OS).": { id: "Tepi BGP/MPLS — target multi-NOS (IOS-XR/Junos/SR-OS).", "zh-CN": "BGP/MPLS 边缘 — 支持多种 NOS（IOS-XR/Junos/SR-OS）。", es: "Borde BGP/MPLS: destino multi-NOS (IOS-XR/Junos/SR-OS).", ar: "طرف BGP/MPLS — يستهدف عدة أنظمة NOS (IOS-XR/Junos/SR-OS)." },
  "High-capacity backbone core, 100G/400G uplinks.": { id: "Inti backbone berkapasitas tinggi, uplink 100G/400G.", "zh-CN": "高容量骨干核心，100G/400G 上行链路。", es: "Núcleo troncal de alta capacidad, enlaces ascendentes 100G/400G.", ar: "نواة رئيسية عالية السعة، وصلات صاعدة 100G/400G." },
  "L2/L3 access, VLAN trunking, EVPN-VXLAN capable.": { id: "Akses L2/L3, trunking VLAN, mendukung EVPN-VXLAN.", "zh-CN": "L2/L3 接入、VLAN 中继，支持 EVPN-VXLAN。", es: "Acceso L2/L3, enlaces troncales VLAN, compatible con EVPN-VXLAN.", ar: "وصول L2/L3، ربط VLAN، يدعم EVPN-VXLAN." },
  "Datacenter spine for spine-leaf fabrics.": { id: "Spine pusat data untuk jaringan spine-leaf.", "zh-CN": "用于脊叶架构的数据中心脊柱交换机。", es: "Spine de centro de datos para redes spine-leaf.", ar: "عمود فقري لمركز البيانات في بنية spine-leaf." },
  "Tri-band Wi-Fi 7 access point with 2.5G uplink.": { id: "Titik akses Wi-Fi 7 tiga pita dengan uplink 2.5G.", "zh-CN": "三频 Wi-Fi 7 接入点，带 2.5G 上行链路。", es: "Punto de acceso Wi-Fi 7 tribanda con enlace ascendente 2.5G.", ar: "نقطة وصول Wi-Fi 7 ثلاثية النطاق بوصلة صاعدة 2.5G." },
  "FTTH optical line terminal, 1:64 split per PON.": { id: "Terminal jalur optik FTTH, pembagian 1:64 per PON.", "zh-CN": "FTTH 光线路终端，每个 PON 按 1:64 分光。", es: "Terminal de línea óptica FTTH, división 1:64 por PON.", ar: "طرفية خط بصري FTTH، تقسيم 1:64 لكل PON." },
  "Zone-based NGFW for security-lab scenarios.": { id: "NGFW berbasis zona untuk skenario laboratorium keamanan.", "zh-CN": "用于安全实验场景的基于区域的 NGFW。", es: "NGFW por zonas para escenarios de laboratorio de seguridad.", ar: "NGFW قائم على المناطق لسيناريوهات مختبر الأمن." },
  "Generic endpoint for connectivity & traffic tests.": { id: "Endpoint umum untuk pengujian konektivitas dan lalu lintas.", "zh-CN": "用于连接和流量测试的通用终端。", es: "Punto final genérico para pruebas de conectividad y tráfico.", ar: "نقطة نهاية عامة لاختبارات الاتصال وحركة المرور." },
  "Application/DHCP/DNS server endpoint.": { id: "Endpoint server aplikasi/DHCP/DNS.", "zh-CN": "应用程序/DHCP/DNS 服务器终端。", es: "Punto final de servidor de aplicaciones/DHCP/DNS.", ar: "نقطة نهاية خادم التطبيقات/DHCP/DNS." },
  "Bridge to a real host ethernet adapter / the internet. Pick the uplink NIC in Properties.": { id: "Jembatani ke adaptor ethernet host nyata / internet. Pilih NIC uplink di Properti.", "zh-CN": "桥接至真实主机的以太网适配器或互联网。在属性中选择上行网卡。", es: "Puente a un adaptador Ethernet real o a Internet. Elige la NIC de enlace en Propiedades.", ar: "جسر إلى محول Ethernet حقيقي أو الإنترنت. اختر بطاقة الوصلة الصاعدة من الخصائص." },
  "router": { id: "router", "zh-CN": "路由器", es: "router", ar: "موجّه" },
  "switch": { id: "switch", "zh-CN": "交换机", es: "conmutador", ar: "مبدّل" },
  "host": { id: "host", "zh-CN": "主机", es: "host", ar: "مضيف" },
  "ap": { id: "titik akses", "zh-CN": "接入点", es: "punto de acceso", ar: "نقطة وصول" },
  "cpe": { id: "perangkat pelanggan", "zh-CN": "用户终端", es: "equipo del cliente", ar: "معدات العميل" },
  "olt": { id: "terminal jalur optik", "zh-CN": "光线路终端", es: "terminal de línea óptica", ar: "طرفية خط بصري" },
  "firewall": { id: "dinding api", "zh-CN": "防火墙", es: "cortafuegos", ar: "جدار حماية" },
  "server": { id: "server", "zh-CN": "服务器", es: "servidor", ar: "خادم" },
  "cloud": { id: "awan", "zh-CN": "云", es: "nube", ar: "سحابة" },
};

/** Translate display text only; template keys and persisted device data stay stable. */
export function translateCatalog(locale: Locale, source: string): string {
  return locale === 'en' ? source : CATALOG_TEXT[source]?.[locale] ?? source;
}
