import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { SearchX, Home, Stethoscope, MapPin, Phone } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";

const suggestions = [
  { to: "/", label: "Inicio", icon: Home },
  { to: "/servicios", label: "Servicios", icon: Stethoscope },
  { to: "/sucursales", label: "Sucursales", icon: MapPin },
  { to: "/contacto", label: "Contacto", icon: Phone },
];

export default function NotFound() {
  usePageTitle("Página no encontrada", "La URL solicitada no existe en CEDIAC Group. Volvé al inicio o revisá nuestras secciones principales.");

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-neutral-50 px-4 py-16">
      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="mx-auto max-w-lg text-center"
      >
        <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-full bg-primary-50 text-primary-400">
          <SearchX size={48} aria-hidden="true" />
        </div>
        <h1 className="text-6xl font-semibold text-primary-600">404</h1>
        <p className="mt-4 text-xl font-semibold text-neutral-800">
          Página no encontrada
        </p>
        <p className="mt-2 text-neutral-500">
          La dirección que ingresaste no existe o fue movida. Te dejamos algunos accesos directos:
        </p>

        <ul className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-3">
          {suggestions.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <Link
                to={to}
                className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-primary-300 hover:text-primary-600 hover:shadow-md"
              >
                <Icon size={16} className="text-primary-500" aria-hidden="true" />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-600 transition-colors"
        >
          Volver al inicio
        </Link>
      </m.div>
    </section>
  );
}
