import React from "react";
import { members } from "./familyData"; 

const FamilyMembers = () => {
  return (
    <section id="family" className="py-24 px-6 bg-[#030014] relative overflow-hidden" data-aos="fade-up">
      
      {/* --- Background Ambient Glows --- */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Modern Header Section */}
        <div className="mb-20">
          <span className="text-purple-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Heritage</span>
          <h3 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter">
            परिवार के <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">स्तंभ</span>
          </h3>
          <div className="w-24 h-1.5 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.4)]"></div>
        </div>

        {/* Responsive Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((person) => (
            <div 
              key={person.id} 
              className="relative group bg-white/[0.02] border border-white/5 p-6 rounded-[2.5rem] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden hover:border-purple-500/30 active:scale-95"
            >
              
              {/* --- IMAGE CONTAINER UPDATED TO PREVENT CROPPING --- */}
              <div className="relative w-48 h-48 mx-auto mb-6 p-2 transition-transform duration-700 group-hover:scale-105">
                
                {/* Gradient Border for Photo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-600 squircle-mask opacity-40 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Inner Image Mask - Added Padding & Object Contain */}
                <div className="relative w-full h-full bg-[#0a0a0a] squircle-mask overflow-hidden flex items-center justify-center">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-contain p-2 img-smooth transition-all duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                    /* object-contain use kiya hai taaki face na kate */
                    onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=" + person.name + "&background=random&color=fff"; }}
                  />
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-1 -right-1 w-9 h-9 bg-purple-600 rounded-xl flex items-center justify-center border-2 border-[#030014] shadow-xl transform scale-0 group-hover:scale-100 transition-transform delay-150">
                   <span className="text-white text-xs">❤️</span>
                </div>
              </div>

              {/* --- TEXT CONTENT --- */}
              <div className="space-y-2">
                <h4 className="text-xl font-black text-white tracking-tight group-hover:text-purple-400 transition-colors">
                  {person.name}
                </h4>
                
                <p className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 font-bold text-[9px] uppercase tracking-widest border border-purple-500/20">
                  {person.role}
                </p>
                
                <div className="w-8 h-0.5 bg-white/10 mx-auto my-4 group-hover:w-16 transition-all duration-500 group-hover:bg-purple-500"></div>
                
                <p className="text-gray-400 text-xs leading-relaxed italic opacity-70 group-hover:opacity-100 transition-opacity px-2">
                  "{person.bio}"
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyMembers;