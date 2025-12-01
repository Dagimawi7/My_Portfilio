import Reveal from "./Reveal";
import { motion } from "framer-motion";
import ElectricBorder from "./ElectricBorder";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" },
      { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" },
      { name: "HTML5", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" },
      { name: "CSS3", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" },
      { name: "Express", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg" },
      { name: "MongoDB", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg" },
      { name: "Java", img: "https://img.icons8.com/?size=100&id=ETDhNONw82Nc&format=png&color=000000" },
      { name: "Python", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" },
      { name: "C++", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cplusplus.svg" },
    ]
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: "Git", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg" },
      { name: "GitHub", img: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold mb-16 text-center">Technical Skills</h2>
        </Reveal>

        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <Reveal>
                <h3 className="text-2xl font-semibold mb-8 text-gray-300 border-l-4 border-blue-500 pl-4">
                  {category.title}
                </h3>
              </Reveal>

              <div className="flex flex-wrap gap-6">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="group relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ElectricBorder
                      color="#7df9ff"
                      speed={1}
                      chaos={0.3}
                      thickness={1.5}
                      style={{ borderRadius: "16px", padding: "2px" }}
                    >
                      <div className="w-28 h-28 flex flex-col items-center justify-center bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-white/5 shadow-xl group-hover:bg-gray-800 transition-colors">
                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="w-10 h-10 object-contain mb-3 opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </ElectricBorder>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
