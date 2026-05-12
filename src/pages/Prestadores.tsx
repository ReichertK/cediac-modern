import { usePageTitle } from "../hooks/usePageTitle";
import PrestadoresHero from "./prestadores/PrestadoresHero";
import BeneficiosSection from "./prestadores/BeneficiosSection";
import ServiciosSection from "./prestadores/ServiciosSection";
import PasosSection from "./prestadores/PasosSection";
import ContratacionForm from "./prestadores/ContratacionForm";

export default function Prestadores() {
  usePageTitle(
    "Prestadores y obras sociales",
    "Sumá tu obra social o prepaga a la red CEDIAC Group. Completá el formulario de contratación y te contactamos en 48 horas hábiles.",
  );

  return (
    <>
      <PrestadoresHero />
      <BeneficiosSection />
      <ServiciosSection />
      <PasosSection />
      <ContratacionForm />
    </>
  );
}