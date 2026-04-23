import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppCTA from "./WhatsAppCTA";

const primaryLinks = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/equipos", label: "Equipos" },
  { to: "/coberturas", label: "Coberturas" },
  { to: "/sucursales", label: "Sucursales" },
  { to: "/contacto", label: "Contacto" },
];

const moreLinks = [
  { to: "/consultorios", label: "Consultorios Médicos", desc: "Especialidades en Quilmes" },
  { to: "/kinesiologia", label: "Kinesiología", desc: "Rehabilitación integral" },
  { to: "/prestadores", label: "Prestadores / Obras Sociales", desc: "Sumate como prestador" },
  { to: "/faq", label: "Preguntas Frecuentes", desc: "Dudas comunes" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors duration-200 ${
    isActive
      ? "text-primary-500"
      : "text-gray-700 hover:text-primary-500"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

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
          {primaryLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={navLinkClass}>
              {l.label}
            </NavLink>
          ))}

          {/* Dropdown "Más" */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors"
              aria-haspopup="true"
              aria-expanded={moreOpen}
            >
              Más
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full w-72 pt-3"
                >
                  <div className="rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
                    {moreLinks.map((l) => (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        onClick={() => setMoreOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-lg px-3 py-2.5 transition-colors ${
                            isActive
                              ? "bg-primary-50 text-primary-700"
                              : "text-gray-700 hover:bg-gray-50"
                          }`
                        }
                      >
                        <div className="text-sm font-semibold">{l.label}</div>
                        <div className="text-xs text-gray-500">{l.desc}</div>
                      </NavLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <WhatsAppCTA
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-primary-600 transition-colors"
            ariaLabel="Solicitar turno por WhatsApp"
            title="Solicitá tu turno"
            subtitle="Elegí la sucursal para coordinar tu atención."
          >
            <Phone size={16} />
            Turnos
          </WhatsAppCTA>

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
              {primaryLinks.map((l) => (
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

              <div className="mt-2 border-t border-gray-100 pt-2">
                <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Más
                </p>
                {moreLinks.map((l) => (
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
              </div>

              <WhatsAppCTA
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-primary-600 transition-colors"
                ariaLabel="Solicitar turno por WhatsApp"
                title="Solicitá tu turno"
                subtitle="Elegí la sucursal para coordinar tu atención."
              >
                <Phone size={16} />
                Solicitar Turno por WhatsApp
              </WhatsAppCTA>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
