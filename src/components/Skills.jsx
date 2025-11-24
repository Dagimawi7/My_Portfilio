// Import Reveal component to animate elements when they appear on screen
import Reveal from "./Reveal";

// Skills component displays a grid of all technical skills
export default function Skills() {
  // Array of skills to display
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Tailwind CSS",
    "Git & GitHub",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "C++",
  ];

  return (
    // Main section for Skills
    // py-24 adds vertical padding
    <section id="skills" className="py-24">

      {/* Container to center content and limit max width */}
      <div className="max-w-6xl mx-auto px-6">

        {/* Animated section title */}
        <Reveal>
          <h2 className="text-4xl font-bold mb-10">Skills</h2>
        </Reveal>

        {/* Responsive grid for skill cards */}
        {/* grid-cols-2 on small screens, 3 on medium, 4 on large */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            // Each skill card is animated on scroll
            <Reveal key={idx}>
              <div className="p-4 bg-white shadow rounded-lg text-center font-medium hover:shadow-lg transition">
                {/* Display skill name */}
                {skill}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
