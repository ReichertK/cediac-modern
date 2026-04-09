import { motion } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  HeartHandshake,
  Users,
  Target,
  Eye,
} from "lucide-react";


const valores = [
  {
    icon: Cpu,
    title: "Tecnología de Vanguardia",
    description:
      "Invertimos de forma continua en equipamiento de última generación para ofrecer diagnósticos precisos y estudios de alta complejidad.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad Médica",
    description:
      "Nuestros profesionales cumplen los más altos estándares de formación, con protocolos rigurosos en cada procedimiento.",
  },
  {
    icon: HeartHandshake,
    title: "Atención Humana",
    description:
      "Cada paciente es único. Nos comprometemos con un trato cálido, empático y personalizado en cada consulta.",
  },
  {
    icon: Users,
    title: "Equipo Interdisciplinario",
    description:
      "Médicos, técnicos y kinesiólogos trabajan de manera coordinada para brindarte una atención integral y sin demoras.",
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


export default function Nosotros() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/FRENTE-C7.jpg')` }}
        >
          <div className="absolute inset-0 bg-primary-900/75" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center lg:px-8 lg:py-36">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Sobre <span className="text-accent-300">CEDIAC Group</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-100"
          >
            Más de dos décadas acompañando la salud de la comunidad en la Zona
            Sur del Gran Buenos Aires. Una empresa prestadora de servicios de
            imágenes de alta complejidad y rehabilitación kinesiólogica.
          </motion.p>
        </div>
      </section>

      {/* Historia breve */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Nuestra Historia
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              CEDIAC viene poniendo a disposición de sus clientes no solo sus
              instalaciones, equipamientos, profesionales y servicios
              prestacionales, sino también su Know-How adquirido durante toda
              nuestra trayectoria en el Área de la Salud, como valor adicional
              de la empresa.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Una empresa prestadora de servicios de imágenes de alta complejidad
              para la salud, en la Zona Sur del Gran Buenos Aires, que viene
              brindando sus atenciones hace varios años a obras sociales,
              prepagas, al PAMI, clínicas y público en general, transformándose
              en una alternativa válida a la hora de atender a los afiliados y
              pacientes que cada institución requiera en la zona.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Hoy operamos en dos sedes —Berazategui Calle 7 y Quilmes Humberto
              Primo 343— ofreciendo resonancia magnética, tomografía,
              mamografía, ecografía, radiología digital y un completo servicio
              de kinesiología, todo bajo un mismo techo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              variants={fadeUp}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm lg:p-10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Nuestra Misión
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Brindar un servicio de diagnóstico por imágenes y
                rehabilitación kinesiológica de alta calidad, accesible y
                humano, utilizando tecnología de vanguardia para contribuir a
                la detección temprana y el tratamiento oportuno de patologías
                en la comunidad de la Zona Sur del Gran Buenos Aires.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              variants={fadeUp}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm lg:p-10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Nuestra Visión
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Ser el centro de referencia en diagnóstico por imágenes y
                rehabilitación de la región, reconocido por la excelencia
                técnica de nuestro equipo, la calidez en la atención y la
                incorporación permanente de innovaciones tecnológicas que
                mejoren la experiencia y los resultados de cada paciente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Nuestros Valores
            </h2>
            <p className="mt-4 text-gray-500">
              Los principios que guían cada decisión y cada interacción con
              nuestros pacientes.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <v.icon size={28} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
