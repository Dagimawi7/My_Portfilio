// Import Reveal component to animate content
import Reveal from "./Reveal";
// Import LightRays CSS (for background effects)
import './LightRays.css';

// Projects section component
export default function Projects() {
  // Array of projects to display
  const projects = [
    { title: "Project 1", description: "A cool project that does something interesting." },
    { title: "Project 2", description: "Another awesome project with a clean UI." },
    { title: "Project 3", description: "A full-stack application with authentication." },
  ];

  return (
    // Main section for Projects with vertical padding
    <section id="projects" className="py-24">

      {/* Container to center content and limit max width */}
      <div className="max-w-6xl mx-auto px-6">

        {/* Animated section title */}
        <Reveal>
          <h2 className="text-4xl font-bold mb-10">Projects</h2>
        </Reveal>

        {/* Grid of project cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            // Each project card animated individually
            <Reveal key={idx}>
              <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
                {/* Project title */}
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {/* Project description */}
                <p className="text-gray-700 mt-3">{project.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
