import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { familyConfig } from "./familyData"; 

const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-24 md:pt-32 relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* --- BACKGROUND IMAGE (Mobile Responsive) --- */}
      <div 
        className="absolute inset-0 bg-no-repeat transition-transform duration-[10s] 
                   bg-cover md:bg-fixed bg-center
                   max-md:bg-contain max-md:bg-top" 
        /* max-md:bg-contain se mobile par photo kategi nahi */
        style={{ 
          backgroundImage: `url(${familyConfig.heroImage})`,
        }}
      >
        {/* Layered Overlays for better text visibility */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center text-center px-4">
        
        {/* Top Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
          <span className="text-[9px] md:text-[11px] text-white uppercase tracking-[0.3em] font-bold">
            OUR HAPPY PLACE
          </span>
        </div>

        {/* --- MAIN HINDI TEXT (Fixed Overlapping) --- */}
        <div className="space-y-2 md:space-y-6 mb-6">
          <h1 className="text-4xl sm:text-6xl md:text-[100px] font-black tracking-tighter text-white leading-[1.1] md:leading-none">
            <span className="block drop-shadow-2xl">गौतम परिवार</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-indigo-400 pb-2">
              में आपका स्वागत है
            </span>
          </h1>
        </div>
        
        {/* Typewriter Motto */}
        <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/5 inline-block">
          <div className="text-lg md:text-3xl font-medium text-gray-200 italic">
            <Typewriter
              words={["हमारा परिवार हमारी ताकत", "Sada Sahayate"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </div>

        {/* Action Buttons (Mobile Stacked) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 w-full sm:w-auto">
          <a 
            href="#family" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-black rounded-2xl text-sm md:text-base hover:scale-105 transition-all shadow-xl"
          >
            Meet the Family
          </a>
          
          <div className="w-full sm:w-auto px-8 py-4 border border-white/30 rounded-2xl font-black text-white backdrop-blur-md text-sm md:text-base">
             जय श्री राम
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator (Hidden on small mobile screens to save space) */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2">
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;