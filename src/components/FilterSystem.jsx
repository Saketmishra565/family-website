import React from 'react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';

const FilterSystem = () => {
  const { setCurrentTheme } = useTheme();

  const applyFilter = (type) => {
    setCurrentTheme(type);
    
    const colors = {
      haldi: ['#fbbf24', '#f59e0b', '#ffffff'],
      mehendi: ['#059669', '#10b981', '#ffffff'],
      shadi: ['#dc2626', '#fca5a5', '#ffd700'],
      default: ['#a855f7']
    };

    confetti({
      particleCount: 100,
      spread: 50,
      origin: { y: 0.8 },
      colors: colors[type],
      zIndex: 1000
    });
  };

  return (
    // Container ko thoda chhota aur right side mein chipka diya hai
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-[999] flex flex-col gap-3 bg-black/60 p-2.5 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl">
      
      {/* Haldi Button */}
      <button 
        onClick={() => applyFilter('haldi')} 
        title="Haldi"
        className="w-9 h-9 rounded-full bg-yellow-500 border border-white/20 hover:scale-110 transition-all shadow-[0_0_10px_rgba(251,191,36,0.3)] flex items-center justify-center text-sm"
      >
        ✨
      </button>

      {/* Mehendi Button */}
      <button 
        onClick={() => applyFilter('mehendi')} 
        title="Mehendi"
        className="w-9 h-9 rounded-full bg-green-600 border border-white/20 hover:scale-110 transition-all shadow-[0_0_10px_rgba(22,163,74,0.3)] flex items-center justify-center text-sm"
      >
        🌿
      </button>

      {/* Shadi Button */}
      <button 
        onClick={() => applyFilter('shadi')} 
        title="Shadi"
        className="w-9 h-9 rounded-full bg-red-600 border border-white/20 hover:scale-110 transition-all shadow-[0_0_10px_rgba(220,38,38,0.3)] flex items-center justify-center text-sm"
      >
        🌹
      </button>

      {/* Separator Line */}
      <div className="w-full h-[1px] bg-white/10 my-1"></div>

      {/* Reset Button */}
      <button 
        onClick={() => applyFilter('default')} 
        title="Reset"
        className="w-9 h-9 rounded-full bg-slate-800 border border-white/20 hover:rotate-180 transition-all duration-500 flex items-center justify-center text-xs"
      >
        🔄
      </button>
    </div>
  );
};

export default FilterSystem;