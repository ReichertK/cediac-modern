import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  ArrowRight,
  Brain,
  ScanLine,
  Baby,
  HeartPulse,
  Bone,
  Activity,
} from "lucide-react";


const services = [
  {
    icon: Brain,
    title: "Resonancia Magnética",
    desc: "Equipo de alto campo para estudios neurológicos, musculoesqueléticos y abdominales con máxima definición.",
  },
  {
    icon: ScanLine,
    title: "Tomografía Computada",
    desc: "Tomógrafo multislice de última generación para diagnósticos rápidos y precisos.",
  },
  {
    icon: Baby,
    title: "Ecografía y Scan Fetal",
    desc: "Ecografía general, obstétrica, Doppler vascular, scan fetal y musculoesquelética con equipos de alta resolución.",
  },
  {
    icon: HeartPulse,
    title: "Mamografía Digital",
    desc: "Mamografía digital directa con la mejor calidad de imagen para detección temprana.",
  },
  {
    icon: Bone,
    title: "Rayos X y Panorámicas",
    desc: "Radiología digital convencional, panorámicas dentales y teleradiografías.",
  },
  {
    icon: Activity,
    title: "Kinesiología y Rehabilitación",
    desc: "12 consultorios equipados, sala de RPG y gimnasio completo con ultrasonido terapéutico, láser, TENS, kinesiotaping y más.",
  },
];

const branches = [
  {
    name: "Berazategui — Calle 7",
    address: "Calle 7 entre 147 y 148, Berazategui",
    phones: ["011 5263-7047", "011 5263-2435", "011 5263-7048"],
    whatsapp: "5491128252135",
    mapQuery: "CEDIAC+Berazategui+Calle+7",
  },
  {
    name: "Quilmes — Humberto Primo",
    address: "Humberto Primo 343, Quilmes",
    phones: ["011 5263-7049"],
    whatsapp: "5491161911441",
    mapQuery: "CEDIAC+Quilmes+Humberto+Primo+343",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-800 text-white">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/pxfuel.jpg')` }}
        >
          <div className="absolute inset-0 bg-primary-900/70" />
        </div>

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent-500/10" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-400/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-24 text-center lg:py-36 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Tu bienestar, <br className="hidden sm:block" />
            nuestro <span className="text-accent-300">objetivo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-2xl text-lg leading-relaxed text-primary-100"
          >
            En nuestro centro, nos comprometemos a brindarte la atención que
            necesitás para vivir una vida saludable y plena. Contamos con una
            acreditada nómina de profesionales que garantizan la correcta
            atención del paciente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://wa.me/5491161911441"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-accent-600 transition-colors"
            >
              <Phone size={18} />
              Solicitar Turno
            </a>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition-colors"
            >
              Nuestros Servicios
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-gray-500">
              Una empresa prestadora de servicios de imágenes de alta
              complejidad para la salud, en la Zona Sur del Gran Buenos Aires,
              que atiende a obras sociales, prepagas, PAMI, clínicas y público
              en general.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <s.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Nuestras Sucursales
            </h2>
            <p className="mt-4 text-gray-500">
              Visitanos en cualquiera de nuestras dos sedes, equipadas con
              tecnología de punta para tu comodidad.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {branches.map((b, i) => (
              <motion.div
                key={b.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-bold text-primary-700">
                  {b.name}
                </h3>
                <p className="mb-4 flex items-start gap-2 text-sm text-gray-600">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent-500" />
                  {b.address}
                </p>
                <ul className="mb-5 space-y-1">
                  {b.phones.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone size={14} className="text-primary-400" />
                      <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-primary-500 transition-colors">
                        {p}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${b.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-600 transition-colors"
                  >
                    <Phone size={14} />
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/${b.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <MapPin size={14} />
                    Cómo llegar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
