import Reveal from "./Reveal";
import { motion } from "framer-motion";
import ElectricBorder from "./ElectricBorder"; // Import ElectricBorder
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
      year: "soon",
      img: null,
    },
    {
      title: "Full-Stack Web Development",
      organization: "Udemy",
      year: "soon",
      img: null,
    },
  ];

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold mb-16 text-center">Certifications</h2>
        </Reveal>

        <div className="flex justify-center gap-8 flex-wrap">
          {certs.map((cert, i) => (
            <Reveal key={i}>
              <ElectricBorder
                color="#7df9ff"
                speed={0.8}   // slightly slower for Safari
                chaos={0.5}   // reduce chaos for smoother animation
                thickness={2}
                style={{ borderRadius: '24px', display: 'inline-block' }}
              >
                <motion.div
                  className="relative bg-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm"
                  style={{
                    width: "100%",   // responsive width
                    maxWidth: "384px",
                    aspectRatio: "1 / 1", // maintain square shape
                  }}
                  initial={{ rotate: 0, y: 0 }}
                  whileHover={{
                    rotate: 0,
                    y: -10,  // smaller movement for Safari smoothness
                    transition: { type: "spring", stiffness: 150 },
                  }}
                >
                  {cert.img && (
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-24 h-24 object-contain mb-4"
                      loading="lazy"
                    />
                  )}

                  <h3 className="text-xl sm:text-2xl font-semibold text-center mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-gray-600 text-center">{cert.organization}</p>
                  <p className="text-gray-500 text-sm mt-2">{cert.year}</p>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 text-blue-600 underline hover:text-blue-800"
                    >
                      Show Credential
                    </a>
                  )}
                </motion.div>
              </ElectricBorder>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
