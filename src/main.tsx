import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* `reducedMotion="user"` hace que Framer Motion respete
        la preferencia del sistema operativo (WCAG 2.3.3). */}
    <MotionConfig reducedMotion="user">
      <BrowserRouter basename="/cediac-modern">
        <App />
      </BrowserRouter>
    </MotionConfig>
  </StrictMode>,
);
