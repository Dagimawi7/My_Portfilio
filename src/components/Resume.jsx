// Import Reveal component to animate content
import Reveal from "./Reveal";
// Import LightRays CSS (for background effects)
import './LightRays.css';
import TiltedCard from './TiltedCard';



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
          <div className="flex flex-col items-center">
            <TiltedCard
              imageSrc="src/assets/resumepic.png" // image preview of your resume
              altText="My Resume"
              captionText="My Resume"
              containerHeight="400px"
              containerWidth="300px"
              imageHeight="400px"
              imageWidth="300px"
              rotateAmplitude={10}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false} // we don't need overlay
            />

            {/* Download button centered at the bottom of the card */}
            <a
              href="/src/assets/Resume.pdf"
              target="_blank"
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Download PDF
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}