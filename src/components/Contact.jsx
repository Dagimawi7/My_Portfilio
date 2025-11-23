// Import Reveal component to animate content
import Reveal from "./Reveal";

// Contact section component
export default function Contact() {
  return (
    // Main section for Contact with small vertical padding
    <section id="contact" className="py-2">

      {/* Container to center content and limit width */}
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Animated section title */}
        <Reveal>
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        </Reveal>

        {/* Animated description */}
        <Reveal>
          <p className="text-lg text-gray-700 mb-6">
            Feel free to reach out for collaboration or opportunities!
          </p>
        </Reveal>

        {/* Animated email link */}
        <Reveal>
          <a
            href="mailto:your-email@example.com" // opens default mail client
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            your-email@example.com
          </a>
        </Reveal>

      </div>
    </section>
  );
}
