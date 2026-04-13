import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="mx-auto max-w-md text-center"
      >
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-50 text-primary-400">
          <SearchX size={48} />
        </div>
        <h1 className="text-6xl font-extrabold text-primary-600">404</h1>
        <p className="mt-4 text-xl font-semibold text-gray-800">
          Página no encontrada
        </p>
        <p className="mt-2 text-gray-500">
          Parece que esta página no está en nuestros consultorios. Verificá la
          dirección o volvé al inicio.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-600 transition-colors"
        >
          Volver al Inicio
        </Link>
      </motion.div>
    </section>
  );
}
