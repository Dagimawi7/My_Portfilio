// Import hooks and libraries
import { useState } from "react"; 
import { Menu, X } from "lucide-react"; 
import { motion } from "framer-motion"; 
import './LightRays.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo as SVG/PNG */}
        <a href="#home" className="flex items-center">
          <img 
            src="https://img.icons8.com/?size=100&id=NsK2E5UAFZE-&format=png&color=000000" 
            alt="Logo" 
            className="w-15 h-15 mr-2"
          />
          <span className="text-2xl font-bold text-white">DT</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-white">
          <a href="#about" className="hover:text-blue-600">About Me</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#certifications" className="hover:text-blue-600">Certifications</a>
          <a href="#resume" className="hover:text-blue-600">Resume</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* 🍏 Mobile Glass Button */}
        <button
          className="
            md:hidden 
            p-2 
            rounded-xl 
            bg-white/20
            backdrop-blur-md
            border border-white/40
            shadow-sm
            text-white
          "
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 🍏 Apple-Style Glass Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="
            md:hidden
            backdrop-blur-xl
            bg-white/30
            border-t border-white/40
            shadow-xl
            px-6 pb-4 pt-2
            rounded-b-2xl
          "
        >
          {[
            { id: "about", label: "About Me" },
            { id: "skills", label: "Skills" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "certifications", label: "Certifications" },
            { id: "resume", label: "Resume" },
            { id: "contact", label: "Contact" },
          ].map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`
                block py-3 
                text-white
                font-medium
                ${index !== 6 ? "border-b border-white/20" : ""}
              `}
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
