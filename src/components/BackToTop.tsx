import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Botón flotante para volver al inicio de la página. Aparece tras 500 px de scroll.
 * Se ubica a la izquierda del botón de WhatsApp para no solaparlos.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          type="button"
          aria-label="Volver al inicio de la página"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-6 right-24 z-40 flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-lg backdrop-blur-sm transition-colors hover:bg-white hover:text-primary-600"
        >
          <ArrowUp size={18} />
        </m.button>
      )}
    </AnimatePresence>
  );
}
