import Reveal from "./Reveal";
import { motion } from "framer-motion";

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
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <Reveal>
          <h2 className="text-4xl font-bold mb-16 text-center text-white">Experience</h2>
        </Reveal>

        <div className="relative border-l-2 border-blue-500/30 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-black shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

              <Reveal>
                <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.company}
                      </h3>
                      <h4 className="text-lg text-blue-300 font-medium mt-1">{exp.role}</h4>
                    </div>
                    <span className="text-sm text-gray-400 mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 opacity-70" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
