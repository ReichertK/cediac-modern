import { m } from "framer-motion";
import { fadeUp, pasos } from "./data";

export default function PasosSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Proceso de contratación
          </h2>
          <p className="mt-4 text-gray-500">
            En pocos pasos activamos la prestación para tus afiliados.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p, i) => (
            <m.div
              key={p.step}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="relative rounded-2xl border border-gray-100 bg-gradient-to-br from-primary-50/40 to-white p-6 shadow-sm"
            >
              <span className="text-3xl font-bold text-primary-200">
                {p.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{p.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
