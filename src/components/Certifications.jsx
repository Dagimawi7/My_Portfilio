import Reveal from "./Reveal";
import { motion } from "framer-motion";
import ElectricBorder from "./ElectricBorder"; // Import ElectricBorder
import pyt from '../assets/pyt.png';

export default function Certifications() {
  const certs = [
    {
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2024",
      img: pyt,
    },
    {
      title: "Google Data Analytics Certificate",
      organization: "Google",
      year: "2023",
      img: "/google.png",
    },
    {
      title: "Full-Stack Web Development",
      organization: "Meta / Coursera",
      year: "2023",
      img: "/meta.png",
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
                </motion.div>
              </ElectricBorder>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
