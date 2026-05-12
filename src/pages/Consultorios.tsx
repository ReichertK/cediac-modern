import { m } from "framer-motion";
import {
  Heart,
  Baby,
  Stethoscope,
  Bone,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  CalendarCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import WhatsAppCTA from "../components/WhatsAppCTA";
import Breadcrumb from "../components/Breadcrumb";
import { usePageTitle } from "../hooks/usePageTitle";

interface Especialidad {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const especialidades: Especialidad[] = [
  {
    icon: Heart,
    title: "Cardiología",
    description:
      "Consulta cardiológica, evaluación de riesgo, seguimiento de patologías cardíacas y electrocardiograma en sede.",
    image:
      "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Baby,
    title: "Ginecología",
    description:
      "Control ginecológico integral, PAP, colposcopía y seguimiento de pacientes de todas las edades.",
    image:
      "https://images.pexels.com/photos/7088487/pexels-photo-7088487.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Stethoscope,
    title: "Clínica Médica",
    description:
      "Atención clínica general, controles de salud, emisión de órdenes médicas y derivaciones a especialistas.",
    image:
      "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Bone,
    title: "Traumatología",
    description:
      "Diagnóstico y tratamiento de lesiones osteoarticulares, evaluación post-traumática y seguimiento de rehabilitación.",
    image:
      "https://images.pexels.com/photos/7446996/pexels-photo-7446996.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const beneficios = [
  {
    icon: MapPin,
    title: "Ubicación céntrica",
    desc: "Sede de Quilmes a 5 cuadras de la estación de tren.",
  },
  {
    icon: Clock,
    title: "Turnos de lunes a sábado",
    desc: "Horarios amplios y agenda flexible coordinada por WhatsApp.",
  },
  {
    icon: CalendarCheck,
    title: "Integración con imágenes",
    desc: "Estudios complementarios en la misma sede, sin derivaciones externas.",
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

export default function Consultorios() {
  usePageTitle(
    "Consultorios médicos",
    "Especialidades médicas en la sede Quilmes de CEDIAC Group: cardiología, ginecología, clínica médica y traumatología.",
  );
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-primary-900/75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center lg:px-8 lg:py-28">
          <Breadcrumb items={[{ label: "Consultorios médicos" }]} onDark className="mb-8 justify-center" />
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-3 flex size-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
          >
            <Stethoscope size={28} className="text-accent-300" />
          </m.div>
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Consultorios <span className="text-accent-300">Médicos</span>
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-primary-100"
          >
            Sede Quilmes (Humberto Primo 343). Atención médica en múltiples
            especialidades, integrada con nuestro centro de diagnóstico por
            imágenes.
          </m.p>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-wrap justify-center gap-3"
          >
            <WhatsAppCTA
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-accent-600 transition-colors"
              preferred="quilmes"
              title="Turno en Consultorios (Quilmes)"
              subtitle="Los consultorios médicos funcionan en la sede de Quilmes."
              message="Hola, quería solicitar un turno en consultorios médicos (Quilmes)."
            >
              <Phone size={16} />
              Solicitar turno
            </WhatsAppCTA>
          </m.div>
        </div>
      </section>

      {/* Beneficios strip */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {beneficios.map((b, i) => (
              <m.div
                key={b.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <b.icon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">{b.desc}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Especialidades */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-100 via-primary-50/30 to-neutral-100 py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-primary-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 size-80 rounded-full bg-accent-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
              Nuestras Especialidades
            </h2>
            <p className="mt-4 text-neutral-500">
              Contamos con profesionales de distintas ramas de la medicina para
              acompañarte en el cuidado integral de tu salud.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {especialidades.map((e, i) => (
              <m.article
                key={e.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/60 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary-200 hover:bg-white hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="flex items-center gap-2">
                    <e.icon size={18} className="shrink-0 text-accent-500" />
                    <h3 className="text-base font-semibold text-neutral-900">
                      {e.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {e.description}
                  </p>
                </div>
              </m.article>
            ))}
          </div>

          {/* Nota sobre especialidades adicionales */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-neutral-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur-md">
            <p className="text-sm leading-relaxed text-neutral-600">
              También atendemos <span className="font-semibold text-neutral-800">otras especialidades</span>.
              Consultá disponibilidad y profesionales por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <m.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-primary-700 to-primary-800 py-16 text-center text-white"
      >
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Reservá tu turno en consultorios
          </h2>
          <p className="mt-3 text-primary-100">
            Sede Quilmes (Humberto Primo 343). Coordinamos tu atención por
            WhatsApp en minutos.
          </p>
          <WhatsAppCTA
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-green-600 transition-colors"
            preferred="quilmes"
            title="Turno en Consultorios (Quilmes)"
            subtitle="Los consultorios médicos funcionan en la sede de Quilmes."
            message="Hola, quería solicitar un turno en consultorios médicos (Quilmes)."
          >
            <MessageCircle size={18} />
            Solicitar turno por WhatsApp
          </WhatsAppCTA>
        </div>
      </m.section>
    </>
  );
}
