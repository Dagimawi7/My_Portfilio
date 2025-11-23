// Import motion from Framer Motion for animations
import { motion } from "framer-motion";

// Reveal component animates its children when they appear in view
export default function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {children} {/* Render whatever content is wrapped inside Reveal */}
    </motion.div>
  );
}
