import { useCallback, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  Bone,
  Wind,
  Dumbbell,
  PersonStanding,
  Zap,
  Hand,
  HeartPulse,
  Accessibility,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


const areas = [
  {
    icon: Bone,
    title: "Artralgias, Artrosis y Artritis",
    description:
      "Rehabilitación de artralgias en general, artrosis y artritis. Abordaje integral para mejorar la movilidad articular y reducir el dolor.",
    image: `${import.meta.env.BASE_URL}images/20220527_114951.jpg`,
  },
  {
    icon: PersonStanding,
    title: "RPG — Reeducación Postural Global",
    description:
      "Corrección de alteraciones del raquis en pacientes mayores de 18 años: rectificaciones, cifosis, lordosis y escoliosis mediante posturas activas.",
    image: `${import.meta.env.BASE_URL}images/boxs.jpeg`,
  },
  {
    icon: Dumbbell,
    title: "Lesiones Musculares y Articulares",
    description:
      "Recuperación de lesiones musculares y articulares, alteraciones del eje de miembros en caderas, rodillas y pies. Gimnasia terapéutica y neurodesarrollo.",
    image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2022-10-27-at-12.59.09-(2).jpeg`,
  },
  {
    icon: Zap,
    title: "Electroterapia y TENS",
    description:
      "Ultrasonido terapéutico, láser, estimulación eléctrica nerviosa transcutánea (TENS), acupuntura láser, calor infrarrojo y crioterapia.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Hand,
    title: "Terapia Manual y Kinesiotaping",
    description:
      "Vendaje neuromuscular (kinesiotaping) para facilitación propioceptiva, masaje terapéutico y movilizaciones articulares.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Wind,
    title: "Discopatías no Quirúrgicas",
    description:
      "Tratamiento conservador de discopatías no quirúrgicas mediante técnicas de fisioterapia, fortalecimiento y estabilización de columna.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: HeartPulse,
    title: "Patología Vascular",
    description:
      "Tratamiento kinesiológico para patologías vasculares sin compromiso neurológico, mejorando la circulación y reduciendo edemas.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Accessibility,
    title: "Reumatología",
    description:
      "Rehabilitación de patologías reumatológicas en pacientes mayores de 18 años, buscando mejorar la funcionalidad y calidad de vida.",
    image: `${import.meta.env.BASE_URL}images/20220527_114609.jpg`,
  },
];

const carouselSlides = [
  { src: `${import.meta.env.BASE_URL}images/boxs.jpeg`, caption: "Boxes de kinesiología equipados" },
  { src: `${import.meta.env.BASE_URL}images/20220527_114951.jpg`, caption: "Gimnasio terapéutico" },
  { src: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2022-10-27-at-12.59.09-(2).jpeg`, caption: "Sala de rehabilitación" },
  { src: `${import.meta.env.BASE_URL}images/20220527_114609.jpg`, caption: "Sala de RPG" },
  { src: `${import.meta.env.BASE_URL}images/sala-espera-h1.jpg`, caption: "Sala de espera" },
];

const instalaciones = [
  "12 consultorios en amplio ambiente climatizado, totalmente equipados",
  "Sala para Rehabilitación Postural Global (RPG)",
  "Amplio gimnasio totalmente equipado",
  "Confortable sala de espera con televisores y baños saludables",
];


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};


export default function Kinesiologia() {
  /* Parallax hero */
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  /* Embla carousel */
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
  }, [emblaApi, updateButtons]);

  return (
    <>
      {/* Hero with Parallax */}
      <section className="relative h-[75vh] min-h-[480px] overflow-hidden bg-primary-900 text-white">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 scale-110 bg-cover bg-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/kineiooo.jpg`}
            alt="Centro de kinesiología CEDIAC"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-primary-900/50 to-primary-900/80" />
        </motion.div>

        <div className="relative flex h-full items-center justify-center">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Rehabilitación integral y{" "}
              <span className="text-accent-300">
                recuperación de la movilidad
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-100"
            >
              Contamos con un conjunto de equipos altamente sofisticados con
              ultrasonido terapéutico, láser, estimulación eléctrica nerviosa
              transcutánea, acupuntura láser, calor infrarrojo, crioterapia y
              aplicación de kinesiotaping.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Instalaciones strip */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {instalaciones.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent-400" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Carousel: Nuestras Instalaciones */}
      <section className="bg-gray-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Nuestras Instalaciones
          </h2>

          <div className="relative">
            {/* Embla viewport */}
            <div ref={emblaRef} className="overflow-hidden rounded-2xl">
              <div className="flex">
                {carouselSlides.map((slide) => (
                  <div
                    key={slide.caption}
                    className="relative min-w-0 flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_50%] px-2"
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={slide.src}
                        alt={slide.caption}
                        className="h-64 w-full object-cover sm:h-80"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-sm font-medium text-white">
                          {slide.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nav buttons */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="absolute -left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-lg backdrop-blur-sm transition-opacity hover:bg-white disabled:opacity-30"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-lg backdrop-blur-sm transition-opacity hover:bg-white disabled:opacity-30"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Áreas de Tratamiento (Glassmorphism) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-primary-50/30 to-gray-100 py-20 lg:py-28">
        {/* Subtle decorative blobs */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Áreas de Tratamiento
            </h2>
            <p className="mt-4 text-gray-500">
              Abordamos cada patología con un enfoque interdisciplinario,
              combinando distintas técnicas para lograr la mejor evolución
              posible.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, i) => (
              <motion.article
                key={area.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/50 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary-200 hover:bg-white/70 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="flex items-center gap-2">
                    <area.icon
                      size={18}
                      className="shrink-0 text-accent-500"
                    />
                    <h3 className="text-base font-semibold text-gray-900">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {area.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-primary-700 to-primary-800 py-16 text-center text-white"
      >
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Comenzá tu recuperación hoy
          </h2>
          <p className="mt-3 text-primary-100">
            Nuestro equipo de kinesiólogos te espera en la sede de Berazategui
            Calle 7, con instalaciones diseñadas para tu comodidad y
            recuperación.
          </p>
          <a
            href="https://wa.me/5491128252135"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={18} />
            Solicitar turno por WhatsApp
          </a>
        </div>
      </motion.section>
    </>
  );
}
