import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, MapPin } from "lucide-react";
import { WHATSAPP_BRANCHES, waLink, type BranchKey } from "../lib/whatsapp";

interface Props {
  open: boolean;
  onClose: () => void;
  /** Mensaje opcional pre-rellenado en WhatsApp */
  message?: string;
  /** Sucursal destacada (aparece primera y resaltada) */
  preferred?: BranchKey;
  /** Título del modal */
  title?: string;
  /** Bajada del modal */
  subtitle?: string;
}

export default function WhatsAppChooser({
  open,
  onClose,
  message,
  preferred,
  title = "¿A qué sucursal querés escribir?",
  subtitle = "Elegí la sede más cercana y te atendemos por WhatsApp.",
}: Props) {
  // Ordena poniendo la sucursal preferida primero
  const ordered = preferred
    ? [...WHATSAPP_BRANCHES].sort((a, b) => {
        if (a.key === preferred) return -1;
        if (b.key === preferred) return 1;
        return 0;
      })
    : WHATSAPP_BRANCHES;

  // Cierra con tecla Escape + bloquea scroll del body
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  function handlePick(number: string) {
    window.open(waLink(number, message), "_blank", "noopener,noreferrer");
    onClose();
  }

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="wa-chooser-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-[#25D366] to-[#128C7E] px-6 py-6 text-white">
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="absolute right-3 top-3 rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle size={22} className="fill-white" />
                </div>
                <div>
                  <h2 id="wa-chooser-title" className="text-lg font-bold">
                    {title}
                  </h2>
                  <p className="text-sm text-white/90">{subtitle}</p>
                </div>
              </div>
            </div>

            {/* Opciones */}
            <div className="flex flex-col gap-2 p-4 sm:p-5">
              {ordered.map((b) => {
                const isPreferred = preferred === b.key;
                return (
                  <button
                    key={b.key}
                    type="button"
                    onClick={() => handlePick(b.number)}
                    className={`group flex items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${
                      isPreferred
                        ? "border-primary-300 bg-primary-50/60 hover:border-primary-500 hover:bg-primary-50"
                        : "border-gray-200 bg-white hover:border-primary-300 hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isPreferred
                          ? "bg-primary-500 text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-[#25D366] group-hover:text-white"
                      }`}
                    >
                      <MapPin size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-semibold text-gray-900">
                          {b.name}
                        </span>
                        {isPreferred && (
                          <span className="rounded-full bg-primary-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-700">
                            Recomendado
                          </span>
                        )}
                      </div>
                      <p className="truncate text-xs text-gray-500">
                        {b.description}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-[#128C7E]">
                        {b.display}
                      </p>
                    </div>
                    <MessageCircle
                      size={18}
                      className="shrink-0 text-gray-300 transition-colors group-hover:text-[#25D366]"
                    />
                  </button>
                );
              })}
            </div>

            <p className="border-t border-gray-100 px-6 py-3 text-center text-xs text-gray-400">
              Se abrirá WhatsApp en una pestaña nueva
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
