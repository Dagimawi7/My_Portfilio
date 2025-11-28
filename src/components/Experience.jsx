import Reveal from "./Reveal";
import ElectricBorder from "./ElectricBorder"; // Import your ElectricBorder
import './LightRays.css';

export default function Experience() {
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
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold mb-10">Experience</h2>
        </Reveal>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <Reveal key={idx}>
              <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.6}
                thickness={2}
                style={{ borderRadius: '12px' }}
              >
                <div className="p-6 bg-white rounded-xl">
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <h4 className="text-gray-600 mt-1">{exp.role}</h4>
                  <p className="text-gray-500 text-sm mt-1">{exp.period}</p>

                  <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </ElectricBorder>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
