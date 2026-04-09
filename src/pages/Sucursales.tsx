import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  Stethoscope,
} from "lucide-react";


const sucursales = [
  {
    name: "Berazategui — Calle 7",
    address: "Calle 7 entre 147 y 148, Berazategui, Prov. de Buenos Aires",
    image: `${import.meta.env.BASE_URL}images/FRENTE-C7.jpg`,
    imageAlt: "Fachada de la sucursal CEDIAC Berazategui Calle 7",
    description:
      "Centro de imágenes y kinesiología. Contamos con profesionales especializados en el tratamiento de lesiones y afecciones musculoesqueléticas, y equipos de última generación para diagnóstico por imágenes.",
    phones: [
      { label: "011 5263-7047 (Imágenes PAMI)", href: "tel:01152637047" },
      { label: "011 5263-2435 (Kinesio PAMI)", href: "tel:01152632435" },
      { label: "011 5263-7048", href: "tel:01152637048" },
    ],
    whatsapp: "5491128252135",
    hours: {
      weekdays: "Lunes a Viernes: 08:00 – 19:00",
      saturday: "Sábados: 08:00 – 13:00",
    },
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.5!2d-58.2120158!3d-34.7563982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f47da240687%3A0x209ef419397073cd!2sCediac!5e0!3m2!1ses-419!2sar!4v1700000000000",
    mapLink:
      "https://www.google.com/maps/place/Cediac/@-34.7563982,-58.2120158,17z",
    services: [
      "Tomografía Axial Computada",
      "Resonancia Magnética (Resonador abierto)",
      "Ecografía / Scan Fetal",
      "Mamografía Digitalizada",
      "Radiología Digital",
      "Kinesiología y Rehabilitación",
    ],
    highlight: "12 consultorios climatizados, gimnasio equipado y sala de RPG",
  },
  {
    name: "Quilmes — Humberto Primo",
    address: "Humberto Primo 343, Quilmes, Prov. de Buenos Aires",
    image: `${import.meta.env.BASE_URL}images/H3.jpg`,
    imageAlt: "Fachada de la sucursal CEDIAC Quilmes Humberto Primo 343",
    description:
      "Centro de imágenes con equipos de última generación y un equipo de profesionales altamente calificados. Contamos con especialistas en la atención de pacientes con discapacidades para un servicio más inclusivo y accesible.",
    phones: [
      { label: "011 5263-7049", href: "tel:01152637049" },
      { label: "011 4067-6730", href: "tel:01140676730" },
    ],
    whatsapp: "5491161911441",
    hours: {
      weekdays: "Lunes a Viernes: 08:00 – 20:00",
      saturday: "Sábados: 09:00 – 13:00",
    },
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.5!2d-58.2575!3d-34.7208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSHVtYmVydG8gUHJpbW8gMzQzLCBRdWlsbWVz!5e0!3m2!1ses-419!2sar!4v1700000000000",
    mapLink:
      "https://www.google.com/maps/search/CEDIAC+Quilmes+Humberto+Primo+343",
    services: [
      "Resonancia Magnética (MRI)",
      "Tomografía Axial Computada",
      "Ecografía / Scan Fetal",
      "Mamografía Digitalizada",
    ],
    highlight: "A 5 cuadras de la estación Quilmes, equipo especializado en accesibilidad",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};


export default function Sucursales() {
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
            Nuestras <span className="text-accent-300">Sucursales</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-primary-100"
          >
            Somos Cediac, una red de sucursales de imágenes y kinesiología
            dedicada a brindar atención de calidad a nuestros pacientes.
          </motion.p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {sucursales.map((s, i) => (
              <motion.article
                key={s.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                {/* Branch photo */}
                <div className="relative h-48 w-full bg-gray-100">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Map embed */}
                <div className="relative h-56 w-full bg-gray-100">
                  <iframe
                    title={`Mapa de la sucursal ${s.name}`}
                    src={s.mapSrc}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-5 p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-primary-700">
                    {s.name}
                  </h2>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600">
                    {s.description}
                  </p>

                  {/* Address */}
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <MapPin
                      size={18}
                      className="mt-0.5 shrink-0 text-accent-500"
                    />
                    <span>{s.address}</span>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <Clock
                      size={18}
                      className="mt-0.5 shrink-0 text-accent-500"
                    />
                    <div>
                      <p>{s.hours.weekdays}</p>
                      <p>{s.hours.saturday}</p>
                    </div>
                  </div>

                  {/* Phones */}
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <Phone
                      size={18}
                      className="mt-0.5 shrink-0 text-accent-500"
                    />
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {s.phones.map((p) => (
                        <a
                          key={p.href}
                          href={p.href}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {p.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Services list */}
                  <div>
                    <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
                      <Stethoscope size={16} className="text-accent-500" />
                      Prestaciones disponibles
                    </h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
                      {s.services.map((srv) => (
                        <li key={srv} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                          {srv}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight badge */}
                  <p className="rounded-lg bg-primary-50 px-4 py-2 text-xs font-medium text-primary-700">
                    {s.highlight}
                  </p>

                  {/* Action buttons */}
                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    <a
                      href={s.phones[0].href}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-primary-700 transition-colors"
                    >
                      <Phone size={16} />
                      Llamar
                    </a>
                    <a
                      href={`https://wa.me/${s.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                    <a
                      href={s.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
                    >
                      <Navigation size={16} />
                      Cómo llegar
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
