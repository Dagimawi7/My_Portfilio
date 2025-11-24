import Reveal from "./Reveal";

export default function Certifications() {
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
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold mb-10">Certifications</h2>
        </Reveal>

        <div className="space-y-6">
          {certs.map((cert, idx) => (
            <Reveal key={idx}>
              <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-gray-600">{cert.organization}</p>
                <p className="text-gray-500 text-sm mt-1">{cert.year}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
