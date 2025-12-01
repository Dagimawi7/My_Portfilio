// Import hooks and libraries
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import './LightRays.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-lg shadow-lg border-b border-white/10" : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center group">
          <div className="relative w-10 h-10 mr-3 overflow-hidden rounded-full border-2 border-transparent group-hover:border-blue-500 transition-all">
            <img
              src="https://img.icons8.com/?size=100&id=NsK2E5UAFZE-&format=png&color=000000"
              alt="Logo"
              className="w-full h-full object-cover bg-white"
            />
          </div>
          <span className="text-xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">DT</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-sm text-gray-300">
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", display: "block" },
          closed: { opacity: 0, height: 0, transitionEnd: { display: "none" } }
        }}
        className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
      >
        <div className="flex flex-col p-6 space-y-4">
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-gray-300 hover:text-white hover:pl-2 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
