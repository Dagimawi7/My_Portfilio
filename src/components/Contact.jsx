import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope size={30} />,
      url: "mailto:20dtamrat@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
      borderColor: "group-hover:border-red-500/50",
      shadow: "group-hover:shadow-red-500/20"
    },
    {
      icon: <FaLinkedin size={30} />,
      url: "https://www.linkedin.com/in/dagimawi-tamrat/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
      borderColor: "group-hover:border-blue-500/50",
      shadow: "group-hover:shadow-blue-500/20"
    },
    {
      icon: <FaGithub size={30} />,
      url: "https://github.com/Dagimawi7",
      label: "GitHub",
      color: "hover:text-purple-400",
      borderColor: "group-hover:border-purple-500/50",
      shadow: "group-hover:shadow-purple-500/20"
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <Reveal>
          <h2 className="text-4xl font-bold mb-8 text-white">Get In Touch</h2>
        </Reveal>

        <Reveal>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </Reveal>

        <Reveal>
          <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
            {contacts.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 ${item.borderColor} hover:-translate-y-2 hover:shadow-lg ${item.shadow}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`text-gray-300 transition-colors ${item.color}`}>
                  {item.icon}
                </div>
                <span className="sr-only">{item.label}</span>
              </motion.a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Dagimawi Tamrat. Built with React & Tailwind.</p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
