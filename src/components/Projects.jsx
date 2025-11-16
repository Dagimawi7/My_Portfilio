import Reveal from "./Reveal";
import './LightRays.css';

export default function Projects() {
  const projects = [
    { title: "Project 1", description: "A cool project that does something interesting." },
    { title: "Project 2", description: "Another awesome project with a clean UI." },
    { title: "Project 3", description: "A full-stack application with authentication." },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold mb-10">Projects</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={idx}>
              <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-700 mt-3">{project.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
