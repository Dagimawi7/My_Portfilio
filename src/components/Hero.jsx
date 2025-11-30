import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      {/* Main heading with waving hand */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center space-x-3"
      >
        <span>Hi, I'm <span className="text-blue-600">Dagimawi</span></span>
        
        {/* Waving hand with optimized infinite rotation */}
        <motion.span
          animate={{ rotate: [0, 15, -15, 15, 0] }} // slightly smaller angles for smoother Safari performance
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            repeatType: "loop"
          }}
          className="inline-block"
        >
          👋
        </motion.span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg md:text-2xl text-gray-600 max-w-2xl"
      >
        A Full-Stack Software Engineer passionate about building scalable,
        impactful solutions with modern technologies.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-10 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Projects
        </a>
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
