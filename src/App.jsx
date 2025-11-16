import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./Layout";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import LightRays from "./components/LightRays";
import './components/LightRays.css';





export default function App() {
  return (

    <div className="relative w-full min-h-screen">

      {/* 🔥 FULL WEBSITE BACKGROUND */}
      <div className="fixed inset-0 -z-20">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={2}
          lightSpread={50}
          rayLength={10}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
    
    
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Layout />
      <Resume />
      <Contact />
      <Footer />
      <LightRays />
    
      </div>
    
  );
}
