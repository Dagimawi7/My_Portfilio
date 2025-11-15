import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
        </Reveal>

        <Reveal>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a final-year Computer Science student and aspiring full-stack
            software engineer. I've interned at Goldman Sachs and Kainos where
            I learned about scalable backend systems and user-first development.

            <br /><br />

            I enjoy building full-stack apps using React, Node.js, and cloud
            technologies. My goal is to build impactful software that scales.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
