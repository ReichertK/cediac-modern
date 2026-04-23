import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Barra delgada fija en el top que indica el progreso de scroll.
 * Útil en páginas largas (Servicios, Kinesiología, Prestadores).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600"
    />
  );
}
