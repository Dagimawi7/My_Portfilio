import Reveal from "./Reveal";
import { motion } from "framer-motion";
import dsacert from '../assets/dsacert.png';
import pyt from '../assets/pyt.png';

export default function Certifications() {
  const certs = [
    {
      title: "Master the Coding Interview: Data Structures + Algorithms",
      organization: "Udemy",
      year: "2025",
      img: dsacert,
      link: "https://www.udemy.com/certificate/UC-3fa9780e-9d66-4a5a-a218-507d0f4ede08/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
    },
    {
      title: "Python Basic Certification",
      organization: "HackerRank",
      year: "2024",
      img: pyt,
      link: "https://www.hackerrank.com/certificates/iframe/c81dbcc17c2a"
    },
    {
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "In Progress",
      img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg",
    },
    {
      title: "Full-Stack Web Development",
      organization: "Udemy",
      year: "In Progress",
      img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/udemy.svg",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold mb-16 text-center text-white">Certifications</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <Reveal key={i}>
              <motion.div
                className="h-full bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors group relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-20 h-20 mb-6 bg-black/20 rounded-full flex items-center justify-center p-4 border border-white/5 shadow-inner">
                  {cert.img ? (
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-2xl">📜</span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
                  {cert.title}
                </h3>

                <p className="text-blue-300 text-sm mb-1">{cert.organization}</p>
                <p className="text-gray-500 text-xs mb-4">{cert.year}</p>

                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm font-medium text-white bg-blue-600/80 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors"
                  >
                    View Credential
                  </a>
                ) : (
                  <span className="mt-auto text-sm text-gray-500 italic px-4 py-2">
                    Coming Soon
                  </span>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
