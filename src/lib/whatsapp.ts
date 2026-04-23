// Configuración central de los números de WhatsApp de CEDIAC.
// Editar aquí para cambiar los destinos de todos los botones del sitio.

export type BranchKey = "berazategui" | "quilmes" | "pami";

export interface WhatsAppBranch {
  key: BranchKey;
  name: string;
  number: string; // Formato internacional sin "+" (como espera wa.me)
  display: string; // Formato legible
  description: string;
}

export const WHATSAPP_BRANCHES: WhatsAppBranch[] = [
  {
    key: "berazategui",
    name: "Berazategui",
    number: "5491128252135",
    display: "011 2825-2135",
    description: "Sede Calle 7 — Imágenes y Kinesiología",
  },
  {
    key: "quilmes",
    name: "Quilmes",
    number: "5491140676730",
    display: "011 4067-6730",
    description: "Sede Humberto Primo 343 — Imágenes y Consultorios",
  },
  {
    key: "pami",
    name: "PAMI",
    number: "5491167704552",
    display: "011 6770-4552",
    description: "Atención exclusiva afiliados PAMI",
  },
];

export function getBranch(key: BranchKey): WhatsAppBranch {
  const b = WHATSAPP_BRANCHES.find((x) => x.key === key);
  if (!b) throw new Error(`Sucursal de WhatsApp desconocida: ${key}`);
  return b;
}

export function waLink(number: string, message?: string): string {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
