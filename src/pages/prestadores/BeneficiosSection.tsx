import { m } from "framer-motion";
import { beneficios, fadeUp } from "./data";

export default function BeneficiosSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
            ¿Por qué elegir CEDIAC como prestador?
          </h2>
          <p className="mt-4 text-neutral-500">
            Más de 30 años de experiencia brindando diagnóstico por imágenes
            a obras sociales, prepagas, PAMI, clínicas y pacientes
            particulares.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b, i) => (
            <m.div
              key={b.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                <b.icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">{b.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
