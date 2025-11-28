import Reveal from "./Reveal";
import { motion } from "framer-motion";
import ElectricBorder from "./ElectricBorder";

// Skills with official Simple Icons URLs
const skills = [
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" }, // fixed Node.js
  { name: "Express", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" },
  { name: "Git & GitHub", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" },
  { name: "Java", img: "https://img.icons8.com/?size=100&id=ETDhNONw82Nc&format=png&color=000000" }, // fixed Java
  { name: "Python", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" },
  { name: "HTML", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" },
  { name: "C++", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cplusplus.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold mb-14 text-center">Skills</h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="w-32 h-32"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: "12px", display: "inline-block", padding: "4px" }}
              >
                <div className="w-28 h-28 flex items-center justify-center bg-gray-800 rounded-md p-2">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
