// Import the Reveal component (used for fade/slide animations when elements appear)
import Reveal from "./Reveal";

// This component creates the "About Me" section of the website
export default function About() {
  return (
    // The main section for this part of the site. 
    // "id=about" lets navbar links scroll here.
    // "py-24" adds big padding above and below.
    <section id="about" className="py-24">

      {/* Container that centers the content and limits width */}
      <div className="max-w-4xl mx-auto px-6">

        {/* Reveal animation wrapper for the title */}
        <Reveal>
          {/* Section heading */}
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
        </Reveal>

        {/* Reveal animation wrapper for the paragraph */}
        <Reveal>
          {/* Main paragraph describing you */}
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
