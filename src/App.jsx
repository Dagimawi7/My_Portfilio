// Import main website sections and components
import Navbar from "./components/Navbar";          // top navigation bar
import Hero from "./components/Hero";              // Hero section at top
import About from "./components/About";            // About Me section
import Projects from "./components/Projects";      // Projects section
import Contact from "./components/Contact";        // Contact section
import Footer from "./components/Footer";          // Footer at bottom
import Skills from "./components/Skills";          // Skills section
import Resume from "./components/Resume";          // Resume section
import Certifications from "./components/Certifications"; // Certifications section
import LightRays from "./components/LightRays";    // animated background
import './components/LightRays.css'; 
import Experience from "./components/Experience";


// Main App component rendering the entire website
export default function App() {
  return (
    // Main container for the website
    <div className="relative w-full min-h-screen">

      {/* 🔥 Full-screen animated background behind all content */}
      <div className="fixed inset-0 -z-20">
        <LightRays
          raysOrigin="top-center"  // rays start from top-center
          raysColor=""             // ray color (default if empty)
          raysSpeed={2}            // speed of the rays
          lightSpread={1}          // how wide rays spread
          rayLength={10}           // length of each ray
          followMouse={true}       // rays follow mouse movement
          mouseInfluence={0.15}    // mouse effect intensity
          noiseAmount={0.1}        // randomness of rays
          distortion={0.05}        // wave/distortion effect
        />
      </div>

      {/* Website content sections */}
      <Navbar />         {/* Navigation bar */}
      <Hero />           {/* Hero section */}
      <About />          {/* About Me */}
      <Skills />         {/* Skills list */}
      <Experience />
      <Projects />       {/* Projects */}
      <Certifications /> {/* Certifications */}
      <Resume />         {/* Resume download */}
      <Contact />        {/* Contact section */}
      <Footer />         {/* Footer at bottom */}
      
    

    </div>
  );
}
