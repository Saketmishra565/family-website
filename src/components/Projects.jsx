import React from "react";
import { memories } from "./familyData"; // Data import kiya

const Projects = () => {
  // 🎨 Category tag color mapping (Aapke purane logic ki tarah)
  const categoryColors = {
    "Wedding": "bg-pink-900/30 text-pink-300 border-pink-500/30",
    "Trip": "bg-blue-900/30 text-blue-300 border-blue-500/30",
    "Birthday": "bg-yellow-900/30 text-yellow-300 border-yellow-500/30",
    "Festival": "bg-orange-900/30 text-orange-300 border-orange-500/30",
    "General": "bg-purple-900/30 text-purple-300 border-purple-500/30",
  };

  return (
    <section id="projects" className="py-20 px-4 bg-[#05010d]">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title Section */}
        <h3 className="text-4xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
          Family Memories
        </h3>
        <p className="text-gray-500 mb-12 italic">Yaadein jo hamesha dil ke paas rahengi.</p>

        {/* Memories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {memories.map((m, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
            >
              {/* Image Section */}
              <div className="overflow-hidden h-60">
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {m.title}
                  </h4>
                </div>

                {/* Category Badge */}
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  categoryColors[m.category] || categoryColors["General"]
                }`}>
                  {m.category}
                </span>

                <p className="mt-4 text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {m.description || "Is sunehre mauke ki ek khubsurat yaad."}
                </p>
                
                {/* Date/Footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-gray-500">
                  <span>Mishra Family Album</span>
                  <span className="text-purple-500/60 font-mono italic">#{m.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;