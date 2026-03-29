import React from "react";
import { FiInstagram, FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030014] pt-16 pb-8 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Branding Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black tracking-tighter text-white mb-2">
            MISHRA<span className="text-purple-500 font-light">FAMILY</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xs mx-auto italic">
            "Sada Sahayate" - Parampara aur Prem ka ek atoot bandhan.
          </p>
        </div>

        {/* Quick Links / Socials */}
        <div className="flex space-x-6 mb-10">
          {[
            { icon: <FiInstagram />, link: "#" },
            { icon: <FiGithub />, link: "#" },
            { icon: <FiLinkedin />, link: "#" }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.link} 
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase font-bold text-gray-600">
          <p>© {currentYear} Saket Mishra</p>
          
          <p className="flex items-center gap-1">
            Made with <FiHeart className="text-purple-500 fill-purple-500 animate-pulse" /> in <span className="text-gray-400">Indore</span>
          </p>
          
          <div className="flex gap-6">
            <a href="#home" className="hover:text-purple-400 transition-colors">Privacy</a>
            <a href="#home" className="hover:text-purple-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;