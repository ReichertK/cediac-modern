import { useState, useRef } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Building2,
  Handshake,
  ScanLine,
  Brain,
  ClipboardCheck,
  FileSpreadsheet,
  Users,
  ShieldCheck,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import WhatsAppCTA from "../components/WhatsAppCTA";
import Breadcrumb from "../components/Breadcrumb";
import { usePageTitle } from "../hooks/usePageTitle";

const beneficios = [
  {
    icon: ScanLine,
    title: "Imágenes de alta complejidad",
    desc: "Resonancia abierta, tomografía multislice, mamografía digital, ecografía, scan fetal y radiología digital.",
  },
  {
    icon: Brain,
    title: "Profesionales acreditados",
    desc: "Equipo médico con amplia experiencia, informes firmados y tiempos de entrega garantizados.",
  },
  {
    icon: ClipboardCheck,
    title: "Gestión integral del paciente",
    desc: "Turnos coordinados, pre-autorizaciones y trazabilidad desde la solicitud hasta la entrega del estudio.",
  },
  {
    icon: FileSpreadsheet,
    title: "Facturación y reportes",
    desc: "Facturación electrónica, liquidaciones en tiempo y forma y reportería personalizada según tu obra social.",
  },
  {
    icon: Users,
    title: "Cobertura en Zona Sur",
    desc: "Dos sedes (Berazategui y Quilmes) con amplia capacidad operativa para atender a tus afiliados.",
  },
  {
    icon: ShieldCheck,
    title: "Estándares de calidad",
    desc: "Protocolos de atención, bioseguridad y confidencialidad de datos alineados a la normativa vigente.",
  },
];

const servicios = [
  "Resonancia Magnética (Resonador abierto)",
  "Tomografía Axial Computada multislice",
  "Ecografía general, Doppler y Scan Fetal",
  "Mamografía Digital",
  "Radiología Digital y Panorámicas",
  "Densitometría Ósea",
  "Kinesiología y Rehabilitación (Berazategui)",
  "Consultorios médicos multiespecialidad (Quilmes)",
];

const pasos = [
  {
    step: "01",
    title: "Contacto inicial",
    desc: "Completá el formulario o escribinos por WhatsApp. Te respondemos a la brevedad.",
  },
  {
    step: "02",
    title: "Evaluación y propuesta",
    desc: "Analizamos las necesidades de tu obra social y armamos una propuesta de servicios y aranceles.",
  },
  {
    step: "03",
    title: "Firma de convenio",
    desc: "Suscribimos el convenio de prestación con las condiciones acordadas.",
  },
  {
    step: "04",
    title: "Alta operativa",
    desc: "Activamos tu cobertura en nuestros sistemas y comenzamos a atender a tus afiliados.",
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

export default function Prestadores() {
  usePageTitle(
    "Prestadores y obras sociales",
    "Sumá tu obra social o prepaga a la red CEDIAC Group. Completá el formulario de contratación y te contactamos en 48 horas hábiles.",
  );
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    // Identificar el origen del mensaje para el buzón actual.
    data.append("_subject", "Solicitud de contratación — Prestadores");
    data.append("origen", "Formulario Prestadores");

    try {
      // TODO: reemplazar por el endpoint específico de Prestadores cuando esté definido.
      const res = await fetch("https://formspree.io/f/myyqlvke", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        toast.success("Solicitud enviada correctamente", {
          description:
            "Nos pondremos en contacto a la brevedad con los detalles comerciales.",
        });
        form.reset();
      } else {
        toast.error("No se pudo enviar la solicitud", {
          description: "Por favor, intentá de nuevo o escribinos por WhatsApp.",
        });
      }
    } catch {
      toast.error("Error de conexión", {
        description: "Verificá tu conexión a internet e intentá de nuevo.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
          >
            <Handshake size={28} className="text-accent-300" />
          </motion.div>
          <Breadcrumb items={[{ label: "Prestadores y obras sociales" }]} onDark className="mb-6 justify-center" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Prestación de Servicios para{" "}
            <span className="text-accent-300">Obras Sociales</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-primary-100"
          >
            Somos prestadores de servicios médicos, principalmente en
            diagnóstico por imágenes. Sumate como obra social o prepaga y
            ofrecé a tus afiliados la mejor tecnología de la Zona Sur.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#contratacion"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-accent-600 transition-colors"
            >
              <Handshake size={16} />
              Solicitar contratación
            </a>
            <WhatsAppCTA
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors"
              preferred="berazategui"
              title="Contacto Comercial"
              subtitle="Coordinamos una reunión para presentarte la propuesta."
              message="Hola, represento una obra social / prepaga y quería coordinar una reunión para conocer la propuesta de prestación de CEDIAC."
            >
              <MessageCircle size={16} />
              Consultar por WhatsApp
            </WhatsAppCTA>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              ¿Por qué elegir CEDIAC como prestador?
            </h2>
            <p className="mt-4 text-gray-500">
              Más de 30 años de experiencia brindando diagnóstico por imágenes
              a obras sociales, prepagas, PAMI, clínicas y pacientes
              particulares.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b, i) => (
              <motion.div
                key={b.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <b.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios que prestamos */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
                <Building2 size={14} />
                Servicios prestados
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Una cartera completa de prestaciones
              </h2>
              <p className="mt-4 text-gray-500">
                Cubrimos los estudios y tratamientos más solicitados por las
                coberturas médicas, en dos sedes estratégicamente ubicadas en
                la Zona Sur del GBA.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {servicios.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-primary-500"
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proceso de contratación */}
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
              <motion.div
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de contratación */}
      <section
        id="contratacion"
        className="bg-gradient-to-br from-primary-800 to-primary-900 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-8 shadow-2xl lg:p-10"
          >
            <div className="mb-8 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <Handshake size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Solicitar contratación
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Completá tus datos y nos contactamos con la propuesta
                comercial.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="razon_social"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Razón social *
                  </label>
                  <input
                    id="razon_social"
                    name="razon_social"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                    placeholder="Obra Social Ejemplo S.A."
                  />
                </div>
                <div>
                  <label
                    htmlFor="cuit"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    CUIT
                  </label>
                  <input
                    id="cuit"
                    name="cuit"
                    type="text"
                    inputMode="numeric"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                    placeholder="30-12345678-9"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contacto_nombre"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Nombre del contacto *
                  </label>
                  <input
                    id="contacto_nombre"
                    name="contacto_nombre"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cargo"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Cargo
                  </label>
                  <input
                    id="cargo"
                    name="cargo"
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                    placeholder="Gerente de Prestaciones"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Correo electrónico *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                    placeholder="contacto@obrasocial.com.ar"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Teléfono *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                    placeholder="011 1234-5678"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="afiliados"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Cantidad aproximada de afiliados
                </label>
                <select
                  id="afiliados"
                  name="afiliados"
                  defaultValue=""
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                >
                  <option value="" disabled>
                    Seleccionar rango…
                  </option>
                  <option value="hasta_1000">Hasta 1.000</option>
                  <option value="1000_5000">1.000 – 5.000</option>
                  <option value="5000_20000">5.000 – 20.000</option>
                  <option value="mas_20000">Más de 20.000</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Mensaje / prestaciones de interés *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors resize-y"
                  placeholder="Contanos qué prestaciones te interesan y cualquier requerimiento especial…"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-primary-700 disabled:opacity-60 transition-colors"
                >
                  <Send size={16} />
                  {sending ? "Enviando…" : "Enviar solicitud"}
                </button>

                <span className="text-sm text-gray-500">o</span>

                <WhatsAppCTA
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-green-700 transition-colors"
                  preferred="berazategui"
                  title="Contacto Comercial"
                  subtitle="Coordinamos una reunión para presentarte la propuesta."
                  message="Hola, represento una obra social / prepaga y quería coordinar una reunión para conocer la propuesta de prestación de CEDIAC."
                >
                  <MessageCircle size={16} />
                  Escribir por WhatsApp
                </WhatsAppCTA>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
