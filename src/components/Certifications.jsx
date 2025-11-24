import Reveal from "./Reveal";
import { motion } from "framer-motion";
import pyt from '../assets/pyt.png'
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

        <div className="flex justify-center gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              className="relative bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center"
              style={{
                width: "384px",     // 4 inches
                height: "384px",    // 4 inches
              }}
              initial={{ rotate: i === 0 ? -8 : i === 2 ? 8 : 0, y: 0 }}
              whileHover={{
                rotate: 0,
                y: -20,
                transition: { type: "spring", stiffness: 200 },
              }}
            >
              {/* Certificate Image */}
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
          ))}
        </div>
      </div>
    </section>
  );
}
