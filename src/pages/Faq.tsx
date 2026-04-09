import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";


const faqs = [
  {
    question: "¿Qué tipos de servicios de imágenes ofrecen?",
    answer:
      "Ofrecemos una amplia gama de servicios de imágenes, incluyendo: Tomografía Computarizada (TC), Radiografías, Mamografías, Ecografías, Resonancias Magnéticas (RM), Scan Fetal y Densitometría Ósea.",
  },
  {
    question: "¿Qué necesito para programar una cita?",
    answer:
      "Para programar una cita necesitás: DNI, credencial de Obra Social o Prepaga, la razón de tu cita (orden médica) y si tenés alguna alergia a los medicamentos. Podés sacar turno llamando a nuestra Central de Turnos al 011 5263-8980, o por WhatsApp al 011 2825-2135 (Berazategui) o 011 6191-1441 (Quilmes).",
  },
  {
    question: "¿Cuánto tiempo dura una cita de imágenes?",
    answer:
      "El tiempo varía en función del tipo de procedimiento. Por ejemplo, una mamografía suele durar unos 15 minutos, mientras que una tomografía computada puede durar hasta una hora. La resonancia magnética dura entre 20 y 45 minutos dependiendo de la zona a evaluar.",
  },
  {
    question: "¿Qué debo llevar el día del estudio?",
    answer:
      "Te pedimos que traigas la orden médica original, tu DNI, la credencial de la obra social o prepaga (si corresponde), y cualquier estudio previo relacionado con la zona a evaluar. Para resonancia magnética, es importante que no lleves objetos metálicos ni tarjetas magnéticas.",
  },
  {
    question: "¿Atienden obras sociales y prepagas?",
    answer:
      "Sí. Trabajamos con la mayoría de las obras sociales y prepagas del mercado, PAMI, clínicas y público en general. Te recomendamos consultar con tu cobertura si requiere autorización previa y comunicarte con nosotros para confirmar la prestación antes de asistir.",
  },
  {
    question: "¿Necesito preparación previa para una tomografía o resonancia?",
    answer:
      "Depende del tipo de estudio. En algunos casos se requiere ayuno de 4 a 6 horas, especialmente si se va a utilizar contraste endovenoso. Al momento de otorgarte el turno te indicaremos las instrucciones específicas de preparación.",
  },
  {
    question: "¿Tienen servicio de kinesiología? ¿Cómo funciona?",
    answer:
      "Sí, contamos con un completo servicio de kinesiología y rehabilitación en nuestra sede de Berazategui Calle 7. Disponemos de 12 consultorios en amplio ambiente climatizado, sala de RPG y gimnasio totalmente equipado. Contamos con equipos de ultrasonido terapéutico, láser, TENS, acupuntura láser, calor infrarrojo, crioterapia y kinesiotaping.",
  },
  {
    question: "¿La resonancia magnética es dolorosa o peligrosa?",
    answer:
      "No. La resonancia magnética es un estudio indoloro que no utiliza radiación ionizante. Funciona mediante campos magnéticos y ondas de radio. Nuestro equipo (resonador abierto) minimiza la sensación de claustrofobia para mayor comodidad del paciente.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer:
      "Contamos con dos sedes: Berazategui — Calle 7 entre 147 y 148 (diagnóstico por imágenes y kinesiología), y Quilmes — Humberto Primo 343 (diagnóstico por imágenes). La sucursal de Quilmes se encuentra a 5 cuadras de la estación de tren Quilmes y a 10 cuadras del centro comercial Quilmes Plaza.",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
};

const accordionContent = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2, ease: "easeIn" as const } },
};


export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-primary-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
        >
          <div className="absolute inset-0 bg-primary-900/75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center lg:px-8 lg:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Preguntas <span className="text-accent-300">Frecuentes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-primary-100"
          >
            Respondemos las dudas más comunes sobre nuestros servicios,
            turnos y estudios.
          </motion.p>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;

              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  className="rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        variants={accordionContent}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-100 px-6 pb-5 pt-4 text-sm leading-relaxed text-gray-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-900">
              ¿No encontrás tu respuesta?
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Comunicate con nosotros y te ayudamos con lo que necesites.
            </p>
            <a
              href="https://wa.me/5491128252135"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={18} />
              Escribinos por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
