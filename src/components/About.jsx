import React from "react";
import { members } from "./familyData"; 
import { useTheme } from "../context/ThemeContext"; 

const FamilyMembers = () => {
  const { themeData } = useTheme(); 

  return (
    <section 
      id="family" 
      className="py-24 px-6 relative overflow-hidden transition-colors duration-1000" 
      style={{ backgroundColor: 'var(--bg-color)' }}
      data-aos="fade-up"
    >
      
      {/* --- Dynamic Background Glows --- */}
      <div 
        className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] blur-[120px] rounded-full pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: 'var(--primary-color)', opacity: 0.1 }}
      ></div>
      <div 
        className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: 'var(--primary-color)', opacity: 0.1 }}
      ></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        <div className="mb-20">
          <span 
            className="font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block transition-colors duration-1000"
            style={{ color: 'var(--primary-color)' }}
          >
            Our Heritage
          </span>
          <h3 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter">
            परिवार के <span className="text-transparent bg-clip-text transition-all duration-1000" style={{ backgroundImage: `linear-gradient(to right, var(--primary-color), #fff)` }}>स्तंभ</span>
          </h3>
          <div 
            className="w-24 h-1.5 mx-auto rounded-full transition-all duration-1000"
            style={{ 
              backgroundColor: 'var(--primary-color)', 
              boxShadow: `0 0 20px var(--shadow-color)` 
            }}
          ></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {members.map((person) => (
            <div key={person.id} className="flip-card h-[400px] group cursor-pointer">
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                
                {/* --- FRONT SIDE --- */}
                <div className="flip-card-front absolute inset-0 backface-hidden bg-white/[0.02] border border-white/5 p-6 rounded-[2.5rem] flex flex-col items-center justify-center z-10">
                  <div className="relative w-48 h-48 mb-6 p-2">
                    <div 
                      className="absolute inset-0 squircle-mask opacity-40 group-hover:opacity-100 transition-all duration-1000"
                      style={{ backgroundImage: `linear-gradient(to tr, var(--primary-color), #fff)` }}
                    ></div>
                    
                    <div className="relative w-full h-full bg-[#0a0a0a] squircle-mask overflow-hidden flex items-center justify-center">
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-contain p-2 transition-all duration-700 group-hover:scale-110"
                        onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=" + person.name + "&background=random&color=fff"; }}
                      />
                    </div>
                  </div>
                  <h4 className="text-2xl font-black text-white tracking-tight">{person.name}</h4>
                  <p 
                    className="mt-2 px-3 py-1 rounded-full font-bold text-[9px] uppercase tracking-widest border transition-all duration-1000"
                    style={{ 
                      backgroundColor: `${themeData.primary}15`, 
                      color: 'var(--primary-color)',
                      borderColor: `${themeData.primary}30`
                    }}
                  >
                    {person.role}
                  </p>
                </div>

                {/* --- BACK SIDE --- */}
                <div 
                  className="flip-card-back absolute inset-0 backface-hidden rotate-y-180 border p-8 rounded-[2.5rem] flex flex-col items-center justify-center backdrop-blur-xl transition-all duration-1000"
                  style={{ 
                    backgroundImage: `linear-gradient(to bottom right, ${themeData.primary}20, transparent)`,
                    borderColor: `${themeData.primary}40`
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-1000"
                    style={{ backgroundColor: `${themeData.primary}30` }}
                  >
                    <span className="text-xl">✨</span>
                  </div>
                  <h4 className="text-xl font-bold mb-1 transition-colors duration-1000" style={{ color: 'var(--primary-color)' }}>
                    {person.name}
                  </h4>
                  <div className="w-10 h-0.5 my-4 opacity-30" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                  <p className="text-gray-200 text-sm leading-relaxed italic font-serif">
                    "{person.bio}"
                  </p>
                  <button 
                    className="mt-8 px-6 py-2 border rounded-full text-[10px] text-white transition-all uppercase tracking-widest hover:scale-105"
                    style={{ 
                      backgroundColor: `${themeData.primary}40`,
                      borderColor: 'var(--primary-color)'
                    }}
                  >
                    नमस्ते कहें 🙏
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .squircle-mask {
          mask-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0z" fill="black"/></svg>');
          mask-size: 100% 100%;
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0z" fill="black"/></svg>');
          -webkit-mask-size: 100% 100%;
        }
      `}</style>
    </section>
  );
};

export default FamilyMembers;