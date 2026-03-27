import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { familyConfig } from "./familyData"; // Surname yahan se uthayenge

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-[#05010d]/80 backdrop-blur-md border-b border-white/10 fixed top-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        
        {/* Family Logo */}
        <h1 className="font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
          {familyConfig.surname.split(' ')[0]} <span className="text-white" style={{ fontFamily: 'Poppins' }}>परिवार</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Home</a>
          <a href="#family" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Members</a>
          <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Events</a>
          
          {/* Ek special button "Add Memory" ke liye (Future use ke liye) */}
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all">
            Family Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#05010d] border border-white/10 rounded-2xl py-6 px-6 space-y-5 animate-in fade-in slide-in-from-top-4 duration-300">
          <a href="#home" className="block text-gray-300 text-lg hover:text-purple-400" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#family" className="block text-gray-300 text-lg hover:text-purple-400" onClick={() => setIsOpen(false)}>Family Members</a>
          <a href="#contact" className="block text-gray-300 text-lg hover:text-purple-400" onClick={() => setIsOpen(false)}>Upcoming Events</a>
          <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold">
            Family Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;