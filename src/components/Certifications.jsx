// Import the Reveal component for animations (fade/slide in on scroll)
import Reveal from "./Reveal";

// This component displays a list of your certifications
export default function Certifications() {
  // Array of certification objects with title, organization, and year
  const certs = [
    {
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2024",
    },
    {
      title: "Google Data Analytics Certificate",
      organization: "Google",
      year: "2023",
    },
    {
      title: "Full-Stack Web Development",
      organization: "Meta / Coursera",
      year: "2023",
    },
  ];

  return (
    // Main section for certifications
    // "id=certifications" allows scrolling from navbar
    // "py-24" adds padding above and below
    <section id="certifications" className="py-24">

      {/* Container to center content and set max width */}
      <div className="max-w-6xl mx-auto px-6">

        {/* Reveal animation for the section heading */}
        <Reveal>
          <h2 className="text-4xl font-bold mb-10">Certifications</h2>
        </Reveal>

        {/* Container for the list of certifications with spacing between items */}
        <div className="space-y-6">
          {certs.map((cert, idx) => (
            // Reveal animation for each certification card
            <Reveal key={idx}>
              <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
                {/* Certification title */}
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                {/* Organization that issued the certification */}
                <p className="text-gray-600">{cert.organization}</p>
                {/* Year earned */}
                <p className="text-gray-500 text-sm mt-1">{cert.year}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
