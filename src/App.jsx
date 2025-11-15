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



export default function App() {
  return (
    <>
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
    </>
  );
}
