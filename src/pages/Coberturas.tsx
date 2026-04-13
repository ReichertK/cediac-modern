import { motion } from "framer-motion";
import { ShieldCheck, AlertCircle, MessageCircle } from "lucide-react";

const coberturas = [
  "PAMI",
  "IOMA",
  "OSDE",
  "Swiss Medical",
  "Galeno",
  "Medifé",
  "Omint",
  "Accord Salud",
  "OSPRERA",
  "Medicus",
  "Hospital Italiano",
  "OSECAC",
  "Unión Personal",
  "Luis Pasteur",
  "OSPEDYC",
  "Particular",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.45, ease: "easeOut" as const },
  }),
};

export default function Coberturas() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-primary-900/75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
          >
            <ShieldCheck size={28} className="text-accent-300" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Obras Sociales y <span className="text-accent-300">Prepagas</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-primary-100"
          >
            Trabajamos con las principales coberturas médicas de la región para
            que puedas acceder a todos nuestros estudios y tratamientos.
          </motion.p>
        </div>
      </section>

      {/* Grid de Coberturas */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Coberturas que aceptamos
            </h2>
            <p className="mt-4 text-gray-500">
              Atendemos pacientes de obras sociales, prepagas y particulares en
              ambas sedes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {coberturas.map((name, i) => (
              <motion.div
                key={name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
              >
                <ShieldCheck
                  size={20}
                  className="shrink-0 text-primary-500 group-hover:text-accent-500 transition-colors"
                />
                <span className="text-base font-semibold text-gray-800">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-amber-200 bg-amber-50 p-8 lg:p-10"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <AlertCircle size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Información importante
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Los planes y la cobertura pueden variar según el tipo de
                  estudio y la sede elegida. Te recomendamos consultar
                  previamente por WhatsApp o telefónicamente para confirmar la
                  cobertura específica de tu prestación.
                </p>
                <a
                  href="https://wa.me/5491128252135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-primary-600 transition-colors"
                >
                  <MessageCircle size={18} />
                  Consultar cobertura por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
