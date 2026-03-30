import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { familyConfig } from "./familyData"; 
import { useTheme } from "../context/ThemeContext"; // Context Import kiya

const Hero = () => {
  const { themeData } = useTheme(); // Theme ka data access kiya

  return (
    <section 
      id="home" 
      className="pt-24 md:pt-32 relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-1000"
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      {/* --- BACKGROUND IMAGE --- */}
      <div 
        className="absolute inset-0 bg-no-repeat transition-all duration-[10s] 
                   bg-cover md:bg-fixed bg-center
                   max-md:bg-contain max-md:bg-top" 
        style={{ 
          backgroundImage: `url(${familyConfig.heroImage})`,
        }}
      >
        {/* Layered Overlays - Dynamic based on theme */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
        <div 
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ 
            background: `linear-gradient(to b, rgba(0,0,0,0.7), transparent, var(--bg-color))` 
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center text-center px-4">
        
        {/* Top Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <span 
            className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-black transition-colors duration-1000"
            style={{ color: 'var(--primary-color)' }}
          >
            OUR HAPPY PLACE
          </span>
        </div>

        {/* --- MAIN HINDI TEXT (Dynamic Gradient) --- */}
        <div className="space-y-2 md:space-y-6 mb-8">
          <h1 className="text-5xl sm:text-7xl md:text-[110px] font-black tracking-tighter text-white leading-[1.1] md:leading-none">
            <span className="block drop-shadow-2xl">गौतम परिवार</span>
            <span 
              className="block text-transparent bg-clip-text transition-all duration-1000 pb-2"
              style={{ 
                backgroundImage: `linear-gradient(to right, var(--primary-color), #fff, var(--primary-color))` 
              }}
            >
              में आपका स्वागत है
            </span>
          </h1>
        </div>
        
        {/* Typewriter Motto */}
        <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 inline-block shadow-2xl">
          <div className="text-xl md:text-4xl font-medium text-gray-200 italic font-serif">
            <Typewriter
              words={["हमारा परिवार हमारी ताकत", "Sada Sahayate", "इंदौर की शान"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-14 w-full sm:w-auto px-6">
          <a 
            href="#family" 
            className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black rounded-2xl text-sm md:text-lg hover:scale-110 transition-all shadow-[0_10px_40px_rgba(255,255,255,0.2)] active:scale-95"
          >
            Meet the Family
          </a>
          
          <div 
            className="w-full sm:w-auto px-10 py-5 border rounded-2xl font-black backdrop-blur-xl text-sm md:text-lg transition-all duration-1000"
            style={{ 
              borderColor: 'rgba(255,255,255,0.2)', 
              color: 'var(--primary-color)',
              boxShadow: `0 0 20px ${themeData.primary}20` 
            }}
          >
              जय श्री राम
          </div>
        </div>

      </div>

      {/* Dynamic Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <div 
          className="w-[2px] h-14 rounded-full transition-all duration-1000"
          style={{ 
            background: `linear-gradient(to bottom, var(--primary-color), transparent)` 
          }}
        ></div>
      </div>

      {/* Decorative Glows for Hero */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: 'var(--primary-color)', opacity: 0.15 }}
      ></div>
    </section>
  );
};

export default Hero;