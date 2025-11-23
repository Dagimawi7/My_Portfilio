// Import Reveal component to animate content
import Reveal from "./Reveal";
// Import LightRays CSS (for background effects)
import './LightRays.css';

// Resume section component
export default function Resume() {
  return (
    // Main section for Resume with vertical padding
    <section id="resume" className="py-24">

      {/* Container to center content and limit max width */}
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Animated section title */}
        <Reveal>
          <h2 className="text-4xl font-bold mb-6">Resume</h2>
        </Reveal>

        {/* Animated description */}
        <Reveal>
          <p className="text-lg text-gray-700 mb-8">
            You can view or download my latest resume below.
          </p>
        </Reveal>

        {/* Animated download button */}
        <Reveal>
          <a
            href="/resume.pdf"               // link to PDF
            target="_blank"                 // open in new tab
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Resume (PDF)
          </a>
        </Reveal>

      </div>
    </section>
  );
}
