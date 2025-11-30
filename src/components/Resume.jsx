import Reveal from "./Reveal";
import './LightRays.css';
import TiltedCard from './TiltedCard';
import ElectricBorder from './ElectricBorder';
import resume from '../assets/resumepic.png';

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
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.6}
              thickness={3}
              style={{ borderRadius: '16px', display: 'inline-block' }}
            >
              <TiltedCard
                imageSrc={resume} // image preview of your resume
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={false}
              />
            </ElectricBorder>

            {/* Download button centered at the bottom of the card */}
            <a
              href= "/src/assets/Resume.pdf"
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
