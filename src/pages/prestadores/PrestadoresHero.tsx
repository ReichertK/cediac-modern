import { m } from "framer-motion";
import { Handshake, MessageCircle } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import WhatsAppCTA from "../../components/WhatsAppCTA";

export default function PrestadoresHero() {
  return (
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
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-3 flex size-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
        >
          <Handshake size={28} className="text-accent-300" />
        </m.div>
        <Breadcrumb
          items={[{ label: "Prestadores y obras sociales" }]}
          onDark
          className="mb-6 justify-center"
        />
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          Prestación de Servicios para{" "}
          <span className="text-accent-300">Obras Sociales</span>
        </m.h1>
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-primary-100"
        >
          Somos prestadores de servicios médicos, principalmente en
          diagnóstico por imágenes. Sumate como obra social o prepaga y
          ofrecé a tus afiliados la mejor tecnología de la Zona Sur.
        </m.p>
        <m.div
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
        </m.div>
      </div>
    </section>
  );
}
