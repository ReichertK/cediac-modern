import { useState, useRef } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";


const contactCards = [
  {
    icon: Phone,
    title: "Central de Turnos",
    lines: ["011 5263-8980"],
    href: "tel:01152638980",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["011 2825-2135 (Berazategui)", "011 6191-1441 (Quilmes)"],
    href: "https://wa.me/5491128252135",
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    lines: ["info@cediac.com.ar"],
    href: "mailto:info@cediac.com.ar",
  },
  {
    icon: Clock,
    title: "Horarios de Atención",
    lines: ["Lun a Vie: 08:00 – 20:00", "Sábados: 08:00 – 13:00"],
  },
  {
    icon: MapPin,
    title: "Berazategui — Calle 7",
    lines: ["Calle 7 entre 147 y 148, Berazategui"],
    href: "https://www.google.com/maps/search/CEDIAC+Berazategui+Calle+7",
  },
  {
    icon: MapPin,
    title: "Quilmes — Humberto Primo",
    lines: ["Humberto Primo 343, Quilmes"],
    href: "https://www.google.com/maps/search/CEDIAC+Quilmes+Humberto+Primo+343",
  },
];

const motivos = [
  { value: "", label: "Seleccionar motivo…" },
  { value: "turnos", label: "Turnos" },
  { value: "resultados", label: "Resultados" },
  { value: "info", label: "Información general" },
  { value: "otro", label: "Otro" },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};


export default function Contacto() {
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/myyqlvke", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        toast.success("Mensaje enviado correctamente", {
          description: "Te responderemos a la brevedad por correo electrónico.",
        });
        form.reset();
      } else {
        toast.error("No se pudo enviar el mensaje", {
          description: "Por favor, intentá de nuevo o contactanos por WhatsApp.",
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
      {/* Header */}
      <section className="relative overflow-hidden bg-primary-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
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
            Contacto y <span className="text-accent-300">Turnos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-primary-100"
          >
            Escribinos y te respondemos a la brevedad, o comunicate
            directamente por teléfono o WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form column (3/5) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Envianos tu consulta
                </h2>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    {/* Nombre */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Nombre completo
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    {/* Teléfono + Email row */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Teléfono
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
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Correo electrónico
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                          placeholder="juan@correo.com"
                        />
                      </div>
                    </div>

                    {/* Motivo */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Motivo de consulta
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        defaultValue=""
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                      >
                        {motivos.map((m) => (
                          <option
                            key={m.value}
                            value={m.value}
                            disabled={m.value === ""}
                          >
                            {m.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors resize-y"
                        placeholder="Escribí tu consulta acá…"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-primary-700 disabled:opacity-60 transition-colors"
                    >
                      <Send size={16} />
                      {sending ? "Enviando…" : "Enviar Mensaje"}
                    </button>
                  </form>
              </div>
            </motion.div>

            {/* Info column (2/5) */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              {contactCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                      <card.icon size={20} />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {card.title}
                    </h3>
                  </div>
                  <div className="space-y-1 pl-[52px] text-sm text-gray-600">
                    {card.lines.map((line) => (
                      <p key={line}>
                        {card.href ? (
                          <a
                            href={card.href}
                            target={
                              card.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel="noopener noreferrer"
                            className="hover:text-primary-600 transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
