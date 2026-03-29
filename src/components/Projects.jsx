import React, { useState } from "react";
import { memories } from "./familyData";

const Projects = () => {
  // Video Popup ke liye state
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 bg-[#030014] relative" data-aos="fade-up">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter">
            अनमोल <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">यादें</span>
          </h3>
          <div className="w-24 h-1.5 mx-auto bg-purple-600 rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory) => (
            <div 
              key={memory.id} 
              onClick={() => memory.type === "video" && setSelectedVideo(memory.videoUrl)}
              className={`relative group bg-white/5 p-4 rounded-[2rem] transition-all duration-500 overflow-hidden border border-white/10 ${memory.type === "video" ? "cursor-pointer" : ""}`}
            >
              {/* --- IMAGE/VIDEO CONTAINER --- */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-black/20">
                <img 
                  src={memory.image} 
                  alt={memory.title} 
                  /* Yahan Check hai: Agar Wedding Card hai toh object-contain 
                     lagega taki card kote nahi 
                  */
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 
                    ${memory.category === "Wedding Card" ? "object-contain p-2" : "object-cover"}
                  `}
                />
                
                {/* Play Button Overlay for Videos */}
                {memory.type === "video" && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-purple-600/20 transition-all">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                      <span className="text-white text-2xl ml-1">▶</span>
                    </div>
                  </div>
                )}
              </div>

              {/* --- TEXT CONTENT --- */}
              <div className="flex justify-between items-center px-2">
                <h4 className="text-xl font-bold text-white tracking-tight">{memory.title}</h4>
                <span className="text-[10px] uppercase font-black px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md border border-purple-500/30">
                  {memory.category}
                </span>
              </div>
              <p className="text-gray-400 text-xs mt-3 px-2 italic opacity-70">"{memory.description}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- VIDEO MODAL (POPUP) --- */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10">
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-10 right-10 text-white text-4xl font-light hover:text-purple-400 transition-colors z-[1010]"
          >
            &times;
          </button>

          <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)] border border-white/10">
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