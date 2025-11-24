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
          I’m a recent Computer Science graduate with a strong passion for exploring all sides of the tech world. I’ve worked with a wide range of programming languages and technologies, and I’m always excited to learn something new or take on a challenge. I’m motivated, adaptable, and committed to growing both my skills and my impact in the tech industry. I’m looking forward to connecting with others and contributing to innovative projects as I start my career.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
