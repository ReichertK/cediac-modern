import {
  Brain,
  ClipboardCheck,
  FileSpreadsheet,
  ScanLine,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Beneficio {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Paso {
  step: string;
  title: string;
  desc: string;
}

export const beneficios: Beneficio[] = [
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

export const servicios: string[] = [
  "Resonancia Magnética (Resonador abierto)",
  "Tomografía Axial Computada multislice",
  "Ecografía general, Doppler y Scan Fetal",
  "Mamografía Digital",
  "Radiología Digital y Panorámicas",
  "Densitometría Ósea",
  "Kinesiología y Rehabilitación (Berazategui)",
  "Consultorios médicos multiespecialidad (Quilmes)",
];

export const pasos: Paso[] = [
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

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};
