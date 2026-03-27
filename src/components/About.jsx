import React from "react";
import { members } from "./familyData"; // Data import kiya

const FamilyMembers = () => {
  return (
    <section id="family" className="py-20 px-6 bg-[#05010d]" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
          Our Family Members
        </h3>
        {/* Gradient underline */}
        <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded"></div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((person) => (
            <div 
              key={person.id} 
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-2 border-purple-500/50 group-hover:border-purple-400">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{person.name}</h4>
              <p className="text-purple-400 font-medium mb-3">{person.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyMembers;