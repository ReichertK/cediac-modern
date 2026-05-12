import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  to?: string; // último crumb suele no tener link
}

interface Props {
  items: Crumb[];
  /** Si true, aplica un fondo tenue compatible con heros oscuros */
  onDark?: boolean;
  className?: string;
}

/**
 * Breadcrumb accesible. Acepta un array ordenado de {label, to}.
 * El primer crumb (Inicio) se agrega automáticamente con ícono.
 */
export default function Breadcrumb({ items, onDark = false, className = "" }: Props) {
  const baseText = onDark ? "text-white/80" : "text-gray-500";
  const activeText = onDark ? "text-white" : "text-gray-900";
  const linkHover = onDark ? "hover:text-white" : "hover:text-primary-600";
  const separator = onDark ? "text-white/40" : "text-gray-300";

  return (
    <nav
      aria-label="Ruta de navegación"
      className={`text-xs sm:text-sm ${baseText} ${className}`}
    >
      <ol className="inline-flex flex-wrap items-center gap-1">
        <li>
          <Link
            to="/"
            className={`inline-flex items-center gap-1 transition-colors ${linkHover}`}
          >
            <Home size={14} />
            <span className="sr-only sm:not-sr-only">Inicio</span>
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.to ?? item.label} className="flex items-center gap-1">
              <ChevronRight size={14} className={separator} aria-hidden="true" />
              {isLast || !item.to ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={`font-medium ${activeText}`}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className={`transition-colors ${linkHover}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
