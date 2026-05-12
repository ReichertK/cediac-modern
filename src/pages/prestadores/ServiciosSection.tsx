import { m } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import { servicios } from "./data";

export default function ServiciosSection() {
  return (
    <section className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
              <Building2 size={14} />
              Servicios prestados
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl">
              Una cartera completa de prestaciones
            </h2>
            <p className="mt-4 text-neutral-500">
              Cubrimos los estudios y tratamientos más solicitados por las
              coberturas médicas, en dos sedes estratégicamente ubicadas en
              la Zona Sur del GBA.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {servicios.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 text-sm text-neutral-700"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-primary-500"
                  />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Profesionales médicos revisando estudios"
              className="h-[360px] w-full object-cover lg:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
          </m.div>
        </div>
      </div>
    </section>
  );
}
