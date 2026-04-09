import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  ScanLine,
  Baby,
  HeartPulse,
  Bone,
  Activity,
  ArrowRight,
} from "lucide-react";


const services = [
  {
    id: "resonancia",
    icon: Brain,
    title: "Resonancia Magnética",
    subtitle: "Resonador abierto GE Profile V",
    description:
      "Equipo abierto de alto campo que brinda máxima comodidad al paciente, ideal para quienes sufren claustrofobia. Permite estudios neurológicos, musculoesqueléticos, abdominales y articulares con excelente definición de imagen.",
    image: `${import.meta.env.BASE_URL}images/reso.jpg`,
    link: "/equipos",
    linkLabel: "Ver equipamiento",
  },
  {
    id: "tomografia",
    icon: ScanLine,
    title: "Tomografía Computada",
    subtitle: "Toshiba Activion 16 cortes",
    description:
      "Tomógrafo multislice de última generación con baja dosis de radiación. Realiza estudios de cráneo, tórax, abdomen, columna y articulaciones con reconstrucciones 3D de alta precisión.",
    image: `${import.meta.env.BASE_URL}images/TOMOGRAFO-C7.jpg`,
    link: "/equipos",
    linkLabel: "Ver equipamiento",
  },
  {
    id: "ecografia",
    icon: Baby,
    title: "Ecografía y Scan Fetal",
    subtitle: "Ecografía general, obstétrica y Doppler",
    description:
      "Ecografía general, obstétrica, Doppler vascular, scan fetal y musculoesquelética con equipos de alta resolución. Incluye ecografía transvaginal, tiroidea, de partes blandas y articular.",
    image: `${import.meta.env.BASE_URL}images/ECOGRAFIA-H1.jpg`,
    link: "/equipos",
    linkLabel: "Ver equipamiento",
  },
  {
    id: "mamografia",
    icon: HeartPulse,
    title: "Mamografía Digital",
    subtitle: "SENOGRAPHE DMR de GE Healthcare",
    description:
      "Mamografía digital directa con la mejor calidad de imagen para detección temprana del cáncer de mama. Sistema de alta resolución que minimiza la dosis de radiación y maximiza el contraste.",
    image: `${import.meta.env.BASE_URL}images/MAMOGRAFIA-C7.jpg`,
    link: "/equipos",
    linkLabel: "Ver equipamiento",
  },
  {
    id: "rayosx",
    icon: Bone,
    title: "Rayos X y Panorámicas",
    subtitle: "Equipo Dinan AF-500",
    description:
      "Radiología digital convencional, panorámicas dentales y teleradiografías. Equipo de última generación para radiología general con mesa basculante de tres movimientos y seriógrafo.",
    image: `${import.meta.env.BASE_URL}images/RX-H1-1.jpg`,
    link: "/equipos",
    linkLabel: "Ver equipamiento",
  },
  {
    id: "kinesiologia",
    icon: Activity,
    title: "Kinesiología y Rehabilitación",
    subtitle: "12 consultorios · Gimnasio · Sala RPG",
    description:
      "Centro de rehabilitación integral con ultrasonido terapéutico, láser, TENS, acupuntura láser, calor infrarrojo, crioterapia y kinesiotaping. Tratamos artralgias, lesiones musculares, discopatías, RPG y reumatología.",
    image: `${import.meta.env.BASE_URL}images/kineiooo.jpg`,
    link: "/kinesiologia",
    linkLabel: "Conocer más",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const tabContent = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};


export default function Servicios() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-8 lg:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Nuestros <span className="text-accent-300">Servicios</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-primary-100"
          >
            Diagnóstico por imágenes y rehabilitación con tecnología de última
            generación, al servicio de tu salud.
          </motion.p>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Tab bar */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {services.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  active === i
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600"
                }`}
              >
                <s.icon size={16} />
                <span className="hidden sm:inline">{s.title}</span>
              </button>
            ))}
          </div>

          {/* Active service detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              variants={tabContent}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-[340px] lg:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary-700">
                    <current.icon size={14} />
                    {current.subtitle}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <current.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    {current.title}
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-gray-600">
                  {current.description}
                </p>
                <Link
                  to={current.link}
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-primary-700 transition-colors"
                >
                  {current.linkLabel}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Grid overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Todo en un solo lugar
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                onClick={() => {
                  setActive(i);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:border-primary-200 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  <s.icon size={22} />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500">{s.subtitle}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 opacity-0 transition-opacity group-hover:opacity-100">
                  Ver detalle <ArrowRight size={14} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
