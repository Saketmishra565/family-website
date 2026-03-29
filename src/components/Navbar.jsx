import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { familyConfig } from "./familyData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detect karne ke liye logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-[90] top-[54px] px-4 py-6 transition-all duration-500">
      {/* --- MAIN FLOATING NAV --- */}
      <nav 
        className={`max-w-5xl mx-auto flex justify-between items-center px-6 py-3 rounded-full border transition-all duration-500 
        ${scrolled 
          ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] py-2 w-full md:w-[90%]" 
          : "bg-transparent border-transparent w-full"}`}
      >
        
        {/* Family Logo - Modern Typography */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center font-black text-white shadow-lg shadow-purple-500/20">
            {familyConfig.surname.charAt(0)}
          </div>
          <h1 className="font-black text-xl tracking-tighter text-white uppercase flex items-center">
            {familyConfig.surname.split(' ')[0]}
            <span className="text-purple-500 ml-1 font-light tracking-[0.2em] text-[9px] opacity-70">FAMILY</span>
          </h1>
        </div>

        {/* Desktop Menu - Spacing aur Typography update ki hai */}
        <div className="hidden md:flex items-center space-x-10">
          {["Home", "Family", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400 hover:text-white transition-all duration-300 relative group"
            >
              {item}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Shimmer Button for Login */}
          <button className="relative inline-flex h-9 overflow-hidden rounded-full p-[1.2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-[10px] font-bold text-white backdrop-blur-3xl hover:bg-slate-900 transition-all uppercase tracking-widest">
              Login
            </span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU (Glassmorphism Overlay) --- */}
      <div 
        className={`md:hidden absolute top-24 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 space-y-8 transition-all duration-500 origin-top shadow-2xl
        ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
      >
        {["Home", "Family", "Contact"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="block text-4xl font-black text-white hover:text-purple-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}
        <div className="pt-4">
            <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-purple-500/20 active:scale-95 transition-transform">
              Family Login
            </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;