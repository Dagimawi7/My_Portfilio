// Import hooks and libraries
import { useState } from "react"; // state for menu open/close
import { Menu, X } from "lucide-react"; // hamburger & close icons
import { motion } from "framer-motion"; // animations
import './LightRays.css'; // light rays styles

// Navbar component
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // track if mobile menu is open

  const toggleMenu = () => setMenuOpen(!menuOpen); // toggle mobile menu

  return (
    // Navbar container fixed at top with shadow and high z-index
    <nav className="fixed top-0 left-0 w-full shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">Dagimawi</h1>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden md:flex space-x-8 text-red-700 font-medium">
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
          {/* Mobile menu links */}
          <a
            href="#about"
            className="block py-3 border-b border-gray-100"
            onClick={toggleMenu} // close menu when clicked
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
