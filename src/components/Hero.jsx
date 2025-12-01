import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Aspiring Full-Stack Software Engineer";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 2; // We only have one phrase for now, but keeping logic extensible
      const fullTxt = fullText;

      setText(isDeleting
        ? fullTxt.substring(0, text.length - 1)
        : fullTxt.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullTxt) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

      {/* Background Glow (Optional enhancement) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* Main heading with waving hand */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6 flex flex-col md:flex-row items-center justify-center gap-3"
      >
        <span>Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Dagimawi</span></span>

        {/* Waving hand */}
        <motion.span
          animate={{ rotate: [0, 15, -15, 15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            repeatType: "loop",
            repeatDelay: 2
          }}
          className="inline-block origin-bottom-right"
        >
          👋
        </motion.span>
      </motion.h1>

      {/* Dynamic Subheading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xl md:text-3xl text-gray-400 h-10 mb-8 font-light"
      >
        I am a <span className="text-white font-semibold">{text}</span>
        <span className="animate-pulse">|</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-base md:text-lg text-gray-500 max-w-2xl mb-12 leading-relaxed"
      >
        Passionate about building scalable, impactful solutions with modern technologies.
        Turning complex problems into elegant code.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <a
          href="#projects"
          className="group relative px-8 py-3 bg-blue-600 text-white rounded-full font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
        >
          <span className="relative z-10">View Projects</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>

        <a
          href="#contact"
          className="px-8 py-3 border border-gray-700 text-gray-300 rounded-full font-medium hover:bg-white/5 hover:border-white/20 transition-all hover:text-white"
        >
          Contact Me
        </a>
      </motion.div>

    </section>
  );
}
