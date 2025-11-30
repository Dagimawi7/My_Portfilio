import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope size={40} />, // slightly smaller for smoother Safari performance
      url: "mailto:20dtamrat@gmail.com",
      label: "Email",
    },
    {
      icon: <FaLinkedin size={40} />,
      url: "https://www.linkedin.com/in/dagimawi-tamrat/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={40} />,
      url: "https://github.com/Dagimawi7",
      label: "GitHub",
    },
  ];

  return (
    <section id="contact" className="py-12"> {/* added more padding */}
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Section title */}
        <Reveal>
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        </Reveal>

        {/* Description */}
        <Reveal>
          <p className="text-lg text-gray-700 mb-8">
            Feel free to reach out for collaboration or opportunities!
          </p>
        </Reveal>

        {/* Contact icons with floating animation */}
        <Reveal>
          <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
            {contacts.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.label}
                className="text-gray-800 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }} // smaller rotation for smoother animation
                whileTap={{ scale: 1.05, rotate: -5 }}
                animate={{
                  y: [0, -6, 0], // reduced movement to prevent Safari lag
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: index * 0.2, // stagger each icon slightly
                }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
