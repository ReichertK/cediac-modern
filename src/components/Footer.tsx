import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/equipos", label: "Equipos" },
  { to: "/coberturas", label: "Coberturas" },
  { to: "/kinesiologia", label: "Kinesiología" },
  { to: "/sucursales", label: "Sucursales" },
  { to: "/contacto", label: "Contacto" },
  { to: "/faq", label: "Preguntas Frecuentes" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-300">
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
                  Calle 7 — Tel: 011 5263-7047
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-400" />
                <div>
                  <span className="font-medium text-white">Quilmes</span>
                  <br />
                  Humberto Primo 343 — Tel: 011 5263-7049
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
              <a
                href="#"
                aria-label="Instagram de CEDIAC"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-gray-300 hover:bg-accent-500 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                aria-label="Facebook de CEDIAC"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-gray-300 hover:bg-accent-500 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} CEDIAC Group. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
