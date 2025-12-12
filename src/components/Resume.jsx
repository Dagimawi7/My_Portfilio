import Reveal from "./Reveal";
import TiltedCard from './TiltedCard';
import resume from '../assets/resumepic.png';
import resumepdf from '../assets/DTResume.pdf';
import { FileDown } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold mb-8 text-white">Resume</h2>
        </Reveal>

        <Reveal>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Take a look at my professional journey. You can view the preview below or download the full PDF.
          </p>
        </Reveal>

        <div className="flex flex-col items-center gap-8">
          <Reveal>
            <div className="relative group">
              {/* Glow effect behind the card */}
              <div className="absolute -inset-4 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <TiltedCard
                imageSrc={resume}
                containerHeight="450px"
                containerWidth="320px"
                imageHeight="450px"
                imageWidth="320px"
                rotateAmplitude={8}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-[15px]" />
                }
              />
            </div>
          </Reveal>

          <Reveal>
            <a
              href={resumepdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <FileDown className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
