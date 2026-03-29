import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { familyConfig } from "./familyData"; 

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* --- BACKGROUND IMAGE --- */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] scale-110 animate-subtle-zoom"
        style={{ 
          backgroundImage: `url(${familyConfig.heroImage})`,
        }}
      >
        {/* Modern Multi-Layer Overlay */}
        <div className="absolute inset-0 bg-black/40"></div> {/* Basic Darken */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div> {/* Vertical Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]"></div> {/* Center Focus */}
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center text-center px-6">
        
        {/* Top Badge: Legacy */}
        <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-10 backdrop-blur-xl shadow-2xl">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          <span className="text-[12px] text-white uppercase tracking-[0.5em] font-black">
            The Legacy Continues
          </span>
        </div>

        {/* --- MAIN CINEMATIC TEXT --- */}
        <div className="space-y-4 mb-8">
          <h1 className="text-6xl md:text-[120px] font-black leading-none tracking-tighter text-white">
            <span className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">गौतम परिवार</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-indigo-400 drop-shadow-lg">
              में आपका स्वागत है
            </span>
          </h1>
        </div>
        
        {/* Motto with Background Blur */}
        <div className="bg-black/20 backdrop-blur-sm px-6 py-2 rounded-lg border border-white/5 inline-block">
          <div className="text-xl lg:text-4xl font-medium text-gray-200 tracking-tight italic">
            <Typewriter
              words={["हमारा परिवार हमारी ताकत", "Sada Sahayate", "Unity is Strength"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </div>

        {/* Action Buttons: Premium Look */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-16">
          <a 
            href="#family" 
            className="group relative px-12 py-5 bg-white text-black font-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(124,58,237,0.4)]"
          >
            <span className="relative z-10">Meet the Family</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
               Explore Now
            </span>
          </a>
          
          <div className="px-12 py-5 border-2 border-white/30 rounded-full font-black text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500 cursor-pointer text-xl shadow-xl">
             जय श्री राम
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;