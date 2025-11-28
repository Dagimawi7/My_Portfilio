// Import Reveal component to animate content
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope size={50} />,
      url: "mailto:20dtamrat@gmail.com",
      label: "Email",
    },
    {
      icon: <FaLinkedin size={50} />,
      url: "https://www.linkedin.com/in/dagimawi-tamrat/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={50} />,
      url: "https://github.com/Dagimawi7",
      label: "GitHub",
    },
  ];

  return (
    <section id="contact" className="py-2">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Section title */}
        <Reveal>
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        </Reveal>

        {/* Description */}
        <Reveal>
          <p className="text-lg text-gray-700 mb-6">
            Feel free to reach out for collaboration or opportunities!
          </p>
        </Reveal>

        {/* Contact icons with floating animation */}
        <Reveal>
          <div className="flex justify-center gap-10 mb-6">
            {contacts.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.label}
                className="text-gray-800 hover:text-blue-600 transition-colors"
                // Hover and click animations
                whileHover={{ scale: 1.4, rotate: 15 }}
                whileTap={{ scale: 1.1, rotate: -10 }}
                // Continuous floating animation
                animate={{
                  y: [0, -10, 0], // move up 10px then back
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
