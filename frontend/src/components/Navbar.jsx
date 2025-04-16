import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand Name */}
          <div className="text-2xl font-bold">MyPortfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-purple-400">Home</a>
            <a href="#about" className="hover:text-purple-400">About</a>
            <a href="#projects" className="hover:text-purple-400">Projects</a>
            <a href="#contact" className="hover:text-purple-400">Contact</a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#home" className="block hover:text-purple-400">Home</a>
          <a href="#about" className="block hover:text-purple-400">About</a>
          <a href="#projects" className="block hover:text-purple-400">Projects</a>
          <a href="#contact" className="block hover:text-purple-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
