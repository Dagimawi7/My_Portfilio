// Import Reveal component to animate content
import Reveal from "./Reveal";
import './LightRays.css';
import zt from '../assets/zt.png';
import CircularGallery from "./CircularGallery";
import ChromaGrid from "./ChromaGrid";


// Individual project card component
function ProjectCard({ project }) {
  return (
    <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition flex flex-col">
      {/* Media preview */}
      {project.media && (
        <div className="mb-4">
          {project.media.endsWith(".mp4") ? (
            <video
              src={project.media}
              controls
              className="w-full h-48 object-cover rounded"
            />
          ) : (
            <img
              src={project.media}
              alt={project.title}
              className="w-full h-48 object-cover rounded"
              loading="lazy"
            />
          )}
        </div>
      )}

      {/* Project title */}
      <h3 className="text-xl font-semibold">{project.title}</h3>

      {/* Project description */}
      <p className="text-gray-700 mt-3 grow">{project.description}</p>

      {/* Optional tech stack */}
      {project.techStack && (
        <p className="text-sm text-gray-500 mt-2">{project.techStack.join(", ")}</p>
      )}

      {/* Button linking to the project */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center"
        >
          View Project
        </a>
      )}
    </div>
  );
}

// Projects section component
export default function Projects() {
  const projects = [
    { 
      title: "Weather App", 
      description: "Built a cross-platform desktop app with Python, PyQt5, and OpenWeatherMap API, delivering real-time weather updates with visual feedback. Designed a dark-themed, interactive UI with smooth animations and responsive layouts. Implemented robust error handling and automated testing with GitHub Actions.",
      link: "https://example.com/weather-app",
      media: "https://via.placeholder.com/400x250.png?text=Weather+App",
      techStack: ["Python", "PyQt5", "OpenWeatherMap API"]
    },
    { 
      title: "Full-Stack E-commerce Website", 
      description: "Building a MERN stack e-commerce platform with React, Node.js, Express, and MongoDB. Features secure authentication, dynamic product catalog, shopping cart, and multiple payment options including Credit/Debit, PayPal, Klarna, and Google Pay. Focused on responsive UI, scalable backend architecture, and CI/CD with GitHub Actions. Learning best practices in testing, deployment, and cloud integration.",
      link: "https://example.com/ecommerce",
      media: zt,
      techStack: ["React", "Node.js", "Express", "MongoDB", "CI/CD"]
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold mb-10">Projects</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={idx}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
