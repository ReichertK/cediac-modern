import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sucursales from "./pages/Sucursales";
import Equipos from "./pages/Equipos";
import Contacto from "./pages/Contacto";
import Kinesiologia from "./pages/Kinesiologia";
import Nosotros from "./pages/Nosotros";
import Faq from "./pages/Faq";
import Servicios from "./pages/Servicios";

export default function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="sucursales" element={<Sucursales />} />
          <Route path="equipos" element={<Equipos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="kinesiologia" element={<Kinesiologia />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </>
  );
}

