import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Scan, Radio } from "lucide-react";


interface Equipment {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  model: string;
  category: string;
  image: string;
  alt: string;
  features: string[];
  description: string;
}

const equipment: Equipment[] = [
  {
    icon: Scan,
    name: "Tomógrafo Toshiba Activion",
    model: "Multislice — 16 cortes",
    category: "Tomografía Computada",
    image: "/images/TOMOGRAFO-C7.jpg",
    alt: "Tomógrafo Toshiba Activion multislice de 16 cortes en sala de estudios de CEDIAC",
    features: [
      "Adquisición helicoidal continua",
      "Reconstrucción 3D de alta resolución",
      "Angiotomografías vasculares",
      "Baja dosis de radiación por estudio",
    ],
    description:
      "Tomógrafo Multislice de 16 cortes marca Toshiba Activion, con capacidades 3D, helicoidal y angiotomografías. Permite realizar estudios de alta complejidad con tiempos de adquisición mínimos, reduciendo la exposición del paciente.",
  },
  {
    icon: ShieldCheck,
    name: "Mamógrafo SENOGRAPHE DMR",
    model: "Digital de Alta Frecuencia",
    category: "Mamografía",
    image: "/images/MAMOGRAFIA-C7.jpg",
    alt: "Mamógrafo SENOGRAPHE DMR digital de alta frecuencia en sala de mamografía de CEDIAC",
    features: [
      "Bajas dosis para la paciente",
      "Óptima imagen en cualquier tipo de mama",
      "Apto para diagnóstico precoz, diagnóstico general y screening",
      "Mamografía con proyección axilar y magnificación disponibles",
    ],
    description:
      "Electric modelo SENOGRAPHE DMR, de Alta Frecuencia. La mamografía es una técnica de imágenes que utiliza rayos X para detectar el cáncer de mama. Este equipo de última generación ofrece imágenes de alta calidad y resolución con las dosis más bajas para la paciente.",
  },
  {
    icon: Radio,
    name: "Resonador General Electric Profile V",
    model: "Resonancia Magnética — Resonador abierto",
    category: "Resonancia Magnética",
    image: "/images/reso.jpg",
    alt: "Resonador magnético General Electric Profile V de diseño abierto en sala de resonancia de CEDIAC",
    features: [
      "Alto campo magnético para máxima definición",
      "Estudios neurológicos y musculoesqueléticos",
      "Angiorresonancia vascular",
      "Diseño abierto para mayor comodidad del paciente",
    ],
    description:
      "El resonador General Electric Profile V de diseño abierto ofrece estudios de resonancia magnética con excelente relación señal-ruido, permitiendo diagnósticos precisos en neurología, traumatología, abdomen y pelvis, reduciendo la sensación de claustrofobia.",
  },
  {
    icon: Cpu,
    name: "Generador Dinan AF-500",
    model: "Rayos X de Alta Frecuencia (IGBT)",
    category: "Radiología Digital",
    image: "/images/RX-H1-1.jpg",
    alt: "Generador de rayos X Dinan AF-500 de alta frecuencia en sala de radiología de CEDIAC",
    features: [
      "Frecuencia de trabajo de 30 KHz",
      "Controlado por microprocesador",
      "Tecnología IGBT de última generación",
      "Radiología digital convencional y panorámicas",
    ],
    description:
      "Dinan AF-500, generador de rayos X de alta frecuencia (IGBT) controlado por microprocesador. La radiografía utiliza rayos X para crear imágenes de los huesos y tejidos blandos del cuerpo, con calidad y resolución de última generación.",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};


export default function Equipos() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-8 lg:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Nuestra <span className="text-accent-300">Tecnología</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-primary-100"
          >
            Equipamiento de última generación operado por profesionales
            altamente capacitados. CEDIAC está comprometido con brindar a sus
            pacientes los mejores servicios de imágenes y kinesiología,
            permitiéndonos realizar diagnósticos y tratamientos precisos y
            eficaces.
          </motion.p>
        </div>
      </section>

      {/* Alternating Feature Sections */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-20 lg:gap-28">
            {equipment.map((eq, i) => {
              const isReversed = i % 2 !== 0;

              return (
                <motion.article
                  key={eq.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className={`flex flex-col items-center gap-8 lg:gap-14 ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Image placeholder */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                      <img
                        src={eq.image}
                        alt={eq.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="w-full lg:w-1/2">
                    <span className="mb-2 inline-block rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">
                      {eq.category}
                    </span>
                    <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                      {eq.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-primary-600">
                      {eq.model}
                    </p>

                    <p className="mt-4 leading-relaxed text-gray-600">
                      {eq.description}
                    </p>

                    <ul className="mt-6 space-y-2">
                      {eq.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-primary-700 py-14 text-center text-white"
      >
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Tecnología al servicio de tu salud
          </h2>
          <p className="mt-3 text-primary-100">
            Todos nuestros equipos son operados por técnicos con amplia
            experiencia y pasan por controles de mantenimiento rigurosos para
            garantizar la máxima precisión diagnóstica.
          </p>
        </div>
      </motion.section>
    </>
  );
}
