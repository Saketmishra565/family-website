import React, { useState } from "react";
import { memories } from "./familyData";
import { useTheme } from "../context/ThemeContext"; // Theme connect kiya

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { themeData } = useTheme(); // Current theme colors nikaale

  return (
    <section 
      id="projects" 
      className="py-24 px-6 relative transition-colors duration-1000" 
      style={{ backgroundColor: 'var(--bg-color)' }}
      data-aos="fade-up"
    >
      
      {/* Background Glows jo Theme ke saath badlenge */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none opacity-10 transition-all duration-1000"
        style={{ backgroundColor: 'var(--primary-color)' }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter">
            अनमोल <span 
              className="text-transparent bg-clip-text transition-all duration-1000"
              style={{ backgroundImage: `linear-gradient(to right, var(--primary-color), #fff)` }}
            >यादें</span>
          </h3>
          <div 
            className="w-24 h-1.5 mx-auto rounded-full transition-all duration-1000"
            style={{ 
              backgroundColor: 'var(--primary-color)',
              boxShadow: `0 0 15px var(--shadow-color)`
            }}
          ></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory) => (
            <div 
              key={memory.id} 
              onClick={() => memory.type === "video" && setSelectedVideo(memory.videoUrl)}
              className={`relative group bg-white/[0.03] p-4 rounded-[2.5rem] transition-all duration-500 overflow-hidden border border-white/10 hover:border-white/20 shadow-2xl ${memory.type === "video" ? "cursor-pointer" : ""}`}
            >
              {/* --- IMAGE/VIDEO CONTAINER --- */}
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-5 bg-black/40">
                <img 
                  src={memory.image} 
                  alt={memory.title} 
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-110 
                    ${memory.category === "Wedding Card" ? "object-contain p-4" : "object-cover"}
                  `}
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x225?text=Gautam+Family"; }}
                />
                
                {/* Play Button Overlay (Theme Dynamic) */}
                {memory.type === "video" && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/20 transition-all">
                    <div 
                      className="w-16 h-16 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 shadow-2xl transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${themeData.primary}30` }}
                    >
                      <span className="text-white text-2xl ml-1">▶</span>
                    </div>
                  </div>
                )}
              </div>

              {/* --- TEXT CONTENT --- */}
              <div className="flex justify-between items-center px-2">
                <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors">{memory.title}</h4>
                <span 
                  className="text-[9px] uppercase font-black px-3 py-1 rounded-full border transition-all duration-1000"
                  style={{ 
                    backgroundColor: `${themeData.primary}15`,
                    color: 'var(--primary-color)',
                    borderColor: `${themeData.primary}30`
                  }}
                >
                  {memory.category}
                </span>
              </div>
              <p className="text-gray-400 text-[13px] mt-3 px-2 leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                "{memory.description}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- PREMIUM VIDEO MODAL (POPUP) --- */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 transition-all duration-500">
          {/* Close Button */}
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl transition-all z-[1010]"
          >
            &times;
          </button>

          <div 
            className="relative w-full max-w-5xl aspect-video rounded-[2rem] overflow-hidden border transition-all duration-1000"
            style={{ 
              borderColor: `${themeData.primary}40`,
              boxShadow: `0 0 60px ${themeData.primary}20` 
            }}
          >
            <video 
              src={selectedVideo} 
              controls 
              autoPlay 
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;