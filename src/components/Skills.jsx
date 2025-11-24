import Reveal from "./Reveal";
import CircularGallery from "./CircularGallery";

export default function Skills() {
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

  // Map skills to gallery items
  const items = skills.map((skill, idx) => ({
    image: `https://via.placeholder.com/300?text=${encodeURIComponent(skill)}`, // placeholder image with skill text
    text: skill,
  }));

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section title */}
        <Reveal>
          <h2 className="text-4xl font-bold mb-14 text-center">Skills</h2>
        </Reveal>

        {/* Circular gallery for skills */}
        <div style={{ height: "500px", position: "relative" }}>
          <CircularGallery
            items={items}
            bend={3}               // bend curve
            textColor="#ffffff"     // text color under skill
            borderRadius={0.05}    // rounded edges of cards
            scrollEase={0.02}      // scroll smoothness
          />
        </div>
      </div>
    </section>
  );
}
