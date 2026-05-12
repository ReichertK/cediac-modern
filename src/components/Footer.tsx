import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/equipos", label: "Equipos" },
  { to: "/coberturas", label: "Coberturas" },
  { to: "/kinesiologia", label: "Kinesiología" },
  { to: "/consultorios", label: "Consultorios Médicos" },
  { to: "/prestadores", label: "Prestadores" },
  { to: "/sucursales", label: "Sucursales" },
  { to: "/contacto", label: "Contacto" },
  { to: "/faq", label: "Preguntas Frecuentes" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold text-white">
              CEDIAC<span className="text-accent-400"> Group</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed">
              Centro de Diagnóstico por Imágenes, Alta Complejidad y
              Kinesiología. Tecnología de vanguardia al servicio de tu salud.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Enlaces
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm hover:text-accent-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sucursales */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Sucursales
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-400" />
                <div>
                  <span className="font-medium text-white">Berazategui</span>
                  <br />
                  Calle 7. Tel: 011 5263-7047
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-400" />
                <div>
                  <span className="font-medium text-white">Quilmes</span>
                  <br />
                  Humberto Primo 343. Tel: 011 5263-7049
                </div>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent-400 shrink-0" />
                <a href="tel:01152638980" className="hover:text-accent-400 transition-colors">
                  Central de Turnos: 011 5263-8980
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent-400 shrink-0" />
                <a href="mailto:info@cediac.com.ar" className="hover:text-accent-400 transition-colors">
                  info@cediac.com.ar
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-accent-400 shrink-0" />
                <span>Lun a Vie: 8:00 – 20:00</span>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              {/* TODO: reemplazar href con URLs reales cuando se publiquen las redes.
                  Mientras tanto se linkea al WhatsApp principal para no perder la conversión. */}
              <a
                href="https://wa.me/5491128252135"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="flex size-9 items-center justify-center rounded-full bg-neutral-700 text-neutral-300 hover:bg-accent-500 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.15 1.6 5.96L2 22l4.27-1.12a9.93 9.93 0 0 0 5.77 1.83h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm5.77 14.1c-.24.68-1.4 1.3-1.93 1.38-.49.07-1.12.1-1.8-.11-.41-.13-.94-.31-1.62-.6-2.86-1.23-4.72-4.11-4.86-4.3-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08.99-2.37.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.97.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.16.28.73 1.21 1.57 1.96 1.08.96 1.99 1.26 2.28 1.41.28.14.45.12.61-.07.17-.19.7-.82.89-1.1.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.93.29.14.48.21.55.33.07.12.07.69-.17 1.37z"/></svg>
              </a>
              <a
                href="mailto:info@cediac.com.ar"
                aria-label="Enviar email a CEDIAC"
                className="flex size-9 items-center justify-center rounded-full bg-neutral-700 text-neutral-300 hover:bg-accent-500 hover:text-white transition-colors"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-neutral-700 pt-6 text-center text-xs text-neutral-500">
          © {year} CEDIAC Group. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
