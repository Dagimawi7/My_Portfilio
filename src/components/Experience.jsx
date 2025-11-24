// Import Reveal component to animate content
import Reveal from "./Reveal";
// Import LightRays CSS (for background effects)
import './LightRays.css';


// Experience section component
export default function Experience() {
  // Array of experiences to display
  const experiences = [
    {
      company: "Peek",
      role: "Front End Web Developer",
      period: "January 2024 – May 2024",
      details: [
        "Collaborated in an Agile team of engineers and designers to build a secure, scalable medical application.",
        "Developed core features for video playback, real-time notetaking, and reporting, enhancing reliability for medical professionals.",
        "Implemented secure authentication using Firebase and integrated responsive, accessible UI with React + Tailwind.",
        "Coordinated weekly sprints, ensuring developer-ready user stories and smooth cross-team communication."
      ]
    },
    {
      company: "Hi5 Decor & Rental",
      role: "Front End Web Developer",
      period: "December 2023 – January 2024",
      details: [
        "Built and launched a fully responsive marketing website for a home decor business using HTML, CSS, and JavaScript.",
        "Designed a clean, mobile-first UI to highlight products and services, improving usability and accessibility across devices.",
        "Developed interactive features like smooth scrolling, product gallery, and a contact form to increase user engagement and support lead generation.",
        "Hosted the site on GoDaddy with custom domain and SSL, managed deployment, updates, and technical troubleshooting end to end."
      ]
    }
  ];

  return (
    // Main section for Experience with vertical padding
    <section id="experience" className="py-24">

      {/* Container to center content and limit max width */}
      <div className="max-w-6xl mx-auto px-6">

        {/* Animated section title */}
        <Reveal>
          <h2 className="text-4xl font-bold mb-10">Experience</h2>
        </Reveal>

        {/* List of experiences */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            // Each experience card animated individually
            <Reveal key={idx}>
              <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
                {/* Company name and role */}
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <h4 className="text-gray-600 mt-1">{exp.role}</h4>
                <p className="text-gray-500 text-sm mt-1">{exp.period}</p>

                {/* Details as bullet points */}
                <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
