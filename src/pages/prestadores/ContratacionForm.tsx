import { useState } from "react";
import type { FormEvent } from "react";
import { m } from "framer-motion";
import { toast } from "sonner";
import { Handshake, MessageCircle, Send } from "lucide-react";
import WhatsAppCTA from "../../components/WhatsAppCTA";

export default function ContratacionForm() {
  const [sending, setSending] = useState(false);

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
    <section
      id="contratacion"
      className="bg-gradient-to-br from-primary-800 to-primary-900 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white p-8 shadow-2xl lg:p-10"
        >
          <div className="mb-8 text-center">
            <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <Handshake size={24} />
            </div>
            <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
              Solicitar contratación
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Completá tus datos y nos contactamos con la propuesta
              comercial.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="razon_social"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  Razón social *
                </label>
                <input
                  id="razon_social"
                  name="razon_social"
                  type="text"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                  placeholder="Obra Social Ejemplo S.A."
                />
              </div>
              <div>
                <label
                  htmlFor="cuit"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  CUIT
                </label>
                <input
                  id="cuit"
                  name="cuit"
                  type="text"
                  inputMode="numeric"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                  placeholder="30-12345678-9"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contacto_nombre"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  Nombre del contacto *
                </label>
                <input
                  id="contacto_nombre"
                  name="contacto_nombre"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                  placeholder="Juan Pérez"
                />
              </div>
              <div>
                <label
                  htmlFor="cargo"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  Cargo
                </label>
                <input
                  id="cargo"
                  name="cargo"
                  type="text"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                  placeholder="Gerente de Prestaciones"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  Correo electrónico *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                  placeholder="contacto@obrasocial.com.ar"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  Teléfono *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                  placeholder="011 1234-5678"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="afiliados"
                className="mb-1.5 block text-sm font-medium text-neutral-700"
              >
                Cantidad aproximada de afiliados
              </label>
              <select
                id="afiliados"
                name="afiliados"
                defaultValue=""
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
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
                className="mb-1.5 block text-sm font-medium text-neutral-700"
              >
                Mensaje / prestaciones de interés *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors resize-y"
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

              <span className="text-sm text-neutral-500">o</span>

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
        </m.div>
      </div>
    </section>
  );
}
