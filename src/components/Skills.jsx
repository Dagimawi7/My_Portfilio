import Reveal from "./Reveal";

export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Git & GitHub",
    "AWS / Cloud",
    "Docker",
    "C++",
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold mb-10">Skills</h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <Reveal key={idx}>
              <div className="p-4 bg-white shadow rounded-lg text-center font-medium hover:shadow-lg transition">
                {skill}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
