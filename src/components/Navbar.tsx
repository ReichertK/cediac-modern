import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/equipos", label: "Equipos" },
  { to: "/sucursales", label: "Sucursales" },
  { to: "/contacto", label: "Contacto" },
  { to: "/faq", label: "Preguntas Frecuentes" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors duration-200 ${
    isActive
      ? "text-primary-500"
      : "text-gray-700 hover:text-primary-500"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-primary-700">
            CEDIAC<span className="text-accent-500"> Group</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navLinkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5491161911441"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-primary-600 transition-colors"
          >
            <Phone size={16} />
            Turnos
          </a>

          <button
            type="button"
            className="lg:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden border-t border-gray-200 bg-white"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary-50 text-primary-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href="https://wa.me/5491161911441"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-primary-600 transition-colors"
              >
                <Phone size={16} />
                Solicitar Turno por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
