import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import WhatsAppChooser from "./WhatsAppChooser";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Contactar por WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, ease: "easeOut" as const }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1ebe5b] transition-colors"
      >
        <MessageCircle size={28} className="fill-white" />
        <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
      </motion.button>
      <WhatsAppChooser open={open} onClose={() => setOpen(false)} />
    </>
  );
}
