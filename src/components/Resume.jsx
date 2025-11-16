import Reveal from "./Reveal";
import './LightRays.css';

export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold mb-6">Resume</h2>
        </Reveal>

        <Reveal>
          <p className="text-lg text-gray-700 mb-8">
            You can view or download my latest resume below.
          </p>
        </Reveal>

        <Reveal>
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Resume (PDF)
          </a>
        </Reveal>
      </div>
    </section>
  );
}
