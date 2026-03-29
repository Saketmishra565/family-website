import React from "react";
import { members } from "./familyData"; // Ensure path is correct

const FamilyMembers = () => {
  return (
    <section id="family" className="py-24 px-6 bg-[#05010d]" data-aos="fade-up">
      <div className="max-w-7xl mx-auto text-center">
        {/* Modern Header (Unchanged) */}
        <h3 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 tracking-tight">
          Our Family Pillars
        </h3>
        <div className="w-32 h-1.5 mx-auto mb-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {members.map((person) => (
            <div 
              key={person.id} 
              className="relative bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 group overflow-hidden shadow-2xl animate-float"
            >
              {/* Glow background on hover */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 blur-[80px] group-hover:bg-purple-600/20 transition-all"></div>

              {/* --- ATTRACTIVE PHOTO SHAPE - UPDATED FOR FACE FOCUS --- */}
              <div className="relative w-52 h-52 mx-auto mb-8 p-1.5 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2">
                
                {/* Outer Mask with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-600 squircle-mask opacity-70 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Inner Image Mask - Increased size slightly */}
                <div className="relative w-full h-full bg-[#05010d] squircle-mask p-1.5 overflow-hidden">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    // 👇 YE DO CLASSES CHANGE KI HAI 👇
                    className="w-full h-full object-contain object-center img-smooth transition-all duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    
                    // Fallback image in case original fails
                    onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=" + person.name + "&background=random"; }}
                  />
                </div>

                {/* Aesthetic Detail: Small Floating Icon/Badge */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center border-2 border-[#05010d] shadow-lg transform scale-0 group-hover:scale-100 transition-transform delay-100">
                  <span className="text-white text-xs font-bold">♥</span>
                </div>
              </div>
              {/* --- ATTRACTIVE PHOTO SHAPE END --- */}

              {/* Text Styles Update */}
              <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                {person.name}
              </h4>
              <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-4">
                {person.role}
              </p>
              
              <div className="w-10 h-0.5 bg-gray-700 mx-auto mb-4 group-hover:w-24 transition-all duration-500 group-hover:bg-purple-500"></div>
              
              <p className="text-gray-400 text-sm leading-relaxed px-2 italic font-light opacity-80 group-hover:opacity-100 line-clamp-2">
                "{person.bio}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyMembers; // Ensure this matches filename if needed