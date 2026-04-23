import { useState, type ReactNode } from "react";
import WhatsAppChooser from "./WhatsAppChooser";
import type { BranchKey } from "../lib/whatsapp";

interface Props {
  children: ReactNode;
  className?: string;
  /** Mensaje opcional pre-rellenado */
  message?: string;
  /** Sucursal destacada en el selector */
  preferred?: BranchKey;
  /** Título del modal */
  title?: string;
  /** Bajada del modal */
  subtitle?: string;
  /** aria-label del botón */
  ariaLabel?: string;
}

/**
 * Botón reutilizable que, al hacer click, despliega el selector de sucursal
 * de WhatsApp (Berazategui / Quilmes / PAMI) antes de abrir la conversación.
 *
 * Acepta cualquier clase Tailwind en `className` para mantener consistencia
 * con los estilos actuales de cada lugar del sitio.
 */
export default function WhatsAppCTA({
  children,
  className,
  message,
  preferred,
  title,
  subtitle,
  ariaLabel,
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </button>
      <WhatsAppChooser
        open={open}
        onClose={() => setOpen(false)}
        message={message}
        preferred={preferred}
        title={title}
        subtitle={subtitle}
      />
    </>
  );
}
