import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Dagimawi</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-white shadow-inner px-6 pb-4"
        >
          <a
            href="#about"
            className="block py-3 border-b border-gray-100"
            onClick={toggleMenu}
          >
            About
          </a>

          <a
            href="#projects"
            className="block py-3 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Projects
          </a>

          <a
            href="#contact"
            className="block py-3"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </motion.div>
      )}
    </nav>
  );
}
