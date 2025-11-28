import Reveal from "./Reveal";
import { motion } from "framer-motion";
import ElectricBorder from "./ElectricBorder"; // Import ElectricBorder
import pyt from '../assets/pyt.png'; // Python logo example


export default function Certifications() {
  const certs = [
    {
      title: "Master the Coding Interview: Data Structures + Algorithms",
      organization: "Udemy",
      year: "2025",
      img: "src/assets/dsacert.png", // Replace with actual path to PDF/PNG preview
      link: "https://www.udemy.com/certificate/UC-3fa9780e-9d66-4a5a-a218-507d0f4ede08/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
    },
    {
      title: "Python Basic Certification",
      organization: "HackerRank",
      year: "2024",
      img: "src/assets/pyt.png",
      link: "https://www.hackerrank.com/certificates/iframe/c81dbcc17c2a"
    },
    
    {
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "soon",
      img: "",
    },
    
    {
      title: "Full-Stack Web Development",
      organization: "Udemy",
      year: "soon",
      img: "",
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
                speed={1}
                chaos={0.6}
                thickness={2}
                style={{ borderRadius: '24px', display: 'inline-block' }}
              >
                <motion.div
                  className="relative bg-white rounded-2xl p-6 flex flex-col items-center justify-center"
                  style={{
                    width: "384px",
                    height: "384px",
                  }}
                  initial={{ rotate: i === 0 ? -8 : i === 2 ? 8 : 0, y: 0 }}
                  whileHover={{
                    rotate: 0,
                    y: -20,
                    transition: { type: "spring", stiffness: 200 },
                  }}
                >
                  {cert.img && (
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-24 h-24 object-contain mb-4 drop-shadow"
                    />
                  )}

                  <h3 className="text-2xl font-semibold text-center mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-gray-600 text-center">{cert.organization}</p>
                  <p className="text-gray-500 text-sm mt-2">{cert.year}</p>

                  {/* Optional: link to certificate PDF */}
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
