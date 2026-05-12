import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* `LazyMotion` + `m` ahorra ~30kb cargando solo las features que
        necesitamos. `reducedMotion="user"` hace que Framer Motion respete
        la preferencia del SO (WCAG 2.3.3). */}
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <BrowserRouter basename="/cediac-modern">
          <App />
        </BrowserRouter>
      </MotionConfig>
    </LazyMotion>
  </StrictMode>,
);
