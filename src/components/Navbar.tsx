import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import WhatsAppCTA from "./WhatsAppCTA";

const primaryLinks = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/kinesiologia", label: "Kinesiología" },
  { to: "/equipos", label: "Equipos" },
  { to: "/coberturas", label: "Coberturas" },
  { to: "/sucursales", label: "Sucursales" },
  { to: "/contacto", label: "Contacto" },
];

const moreLinks = [
  { to: "/nosotros", label: "Nosotros", desc: "Historia y equipo de CEDIAC" },
  { to: "/consultorios", label: "Consultorios Médicos", desc: "Especialidades en Quilmes" },
  { to: "/prestadores", label: "Prestadores / Obras Sociales", desc: "Sumate como prestador" },
  { to: "/faq", label: "Preguntas Frecuentes", desc: "Dudas comunes" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative inline-flex items-center text-sm font-medium leading-none transition-colors duration-200 ${
    isActive
      ? "text-primary-600 after:absolute after:inset-x-0 after:-bottom-2 after:h-[2px] after:rounded-full after:bg-primary-500"
      : "text-neutral-700 hover:text-primary-500"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreWrapperRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  // Cierra el dropdown con Escape y al perder foco fuera del contenedor
  useEffect(() => {
    if (!moreOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMoreOpen(false);
        moreButtonRef.current?.focus();
      }
    };
    const onDocClick = (e: MouseEvent) => {
      if (
        moreWrapperRef.current &&
        !moreWrapperRef.current.contains(e.target as Node)
      ) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [moreOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="CEDIAC Group - Inicio">
          <span className="text-xl font-bold tracking-tight text-primary-700">
            CEDIAC<span className="text-accent-500"> Group</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          {primaryLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={navLinkClass}
            >
              {l.label}
            </NavLink>
          ))}

          {/* Dropdown "Más" */}
          <div
            ref={moreWrapperRef}
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              ref={moreButtonRef}
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-sm font-medium leading-none text-neutral-700 hover:text-primary-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 rounded"
              aria-haspopup="menu"
              aria-expanded={moreOpen}
              aria-controls="nav-more-menu"
            >
              Más
              <ChevronDown
                size={14}
                aria-hidden="true"
                className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <m.div
                  id="nav-more-menu"
                  role="menu"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full w-72 pt-3"
                >
                  <div className="rounded-xl border border-neutral-200 bg-white p-2 shadow-xl">
                    {moreLinks.map((l) => (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        role="menuitem"
                        onClick={() => setMoreOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-lg px-3 py-2.5 transition-colors ${
                            isActive
                              ? "bg-primary-50 text-primary-700"
                              : "text-neutral-700 hover:bg-neutral-50"
                          }`
                        }
                      >
                        <div className="text-sm font-semibold">{l.label}</div>
                        <div className="text-xs text-neutral-500">{l.desc}</div>
                      </NavLink>
                    ))}
                  </div>
                </m.div>
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
            className="lg:hidden rounded-md p-2 text-neutral-600 hover:bg-neutral-100"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden border-t border-neutral-200 bg-white"
          >
            <div className="flex flex-col gap-1 p-4">
              {primaryLinks.map((l) => (                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary-50 text-primary-600"
                        : "text-neutral-700 hover:bg-neutral-50"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}

              <div className="mt-2 border-t border-neutral-100 pt-2">
                <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
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
                          : "text-neutral-700 hover:bg-neutral-50"
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
                Solicitar turno por WhatsApp
              </WhatsAppCTA>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
