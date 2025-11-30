// Import main website sections and components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import LightRays from "./components/LightRays";
import './components/LightRays.css';
import Experience from "./components/Experience";
import ProfileCard from './components/ProfileCard';
import './index.css';
import ChromaGrid from "./components/ChromaGrid";


export default function App() {
  return (
    <div className="relative w-full min-h-screen">

      {/* Subtle animated background */}
      <div className="fixed inset-0 -z-20">
        <LightRays
          raysOrigin="top-center"
          raysColor="rgba(255,255,255,0.05)"  // very faint
          raysSpeed={1}                       // slower, subtle
          lightSpread={0.5}
          rayLength={5}
          followMouse={true}
          mouseInfluence={0.05}               // minimal
          noiseAmount={0.02}                  // less noisy
          distortion={0.02}                   // minimal distortion
        />
      </div>

      {/* Sections */}
      <Navbar />
      <Hero />

      {/* Centered profile card, avatar dominant */}
      <div className="flex justify-center items-center my-10 relative z-10">
        <ProfileCard
          name="Dagimawi Tamrat"
          title="Computer Science Graduate"
          handle="Dagimawi7"
          status="Available"
          contactText="Reach Out"
          avatarUrl="https://img.icons8.com/?size=100&id=NsK2E5UAFZE-&format=png&color=000000" // Large and clear
          enableTilt={true}
          behindGlowEnabled={true}              // still have subtle glow
          behindGlowColor="rgba(125,190,255,0.2)" // faint
          behindGlowSize="30%"                  // small glow
          onContactClick={() =>
            window.open('https://www.linkedin.com/in/dagimawi-tamrat', '_blank')
          }
        />
      </div>
      
      <About />
      <Skills />
      <Experience />
      <ChromaGrid />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
      
          

    </div>
  );
}
