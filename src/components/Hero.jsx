// Import motion from Framer Motion for animations
import { motion } from "framer-motion";

// Hero section component
export default function Hero() {
  return (
    // Full-screen Hero section with centered content
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      {/* Animated main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        Hi, I'm <span className="text-blue-600">Dagimawi</span> 👋
      </motion.h1>

      {/* Animated subheading/description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg md:text-2xl text-gray-600 max-w-2xl"
      >
        A Full-Stack Software Engineer passionate about building scalable,
        impactful solutions with modern technologies.
      </motion.p>

      {/* Animated buttons for navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-10 flex space-x-4"
      >
        {/* Button linking to Projects section */}
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Projects
        </a>

        {/* Button linking to Contact section */}
        <a
          href="#contact"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
