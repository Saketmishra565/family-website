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
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors[type]
    });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[999] flex flex-col gap-5 bg-black/40 p-4 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl">
      <button onClick={() => applyFilter('haldi')} title="Haldi Filter" className="w-12 h-12 rounded-full bg-yellow-500 border-2 border-white/20 hover:scale-125 transition-all shadow-[0_0_15px_rgba(251,191,36,0.5)] flex items-center justify-center text-xl">✨</button>
      <button onClick={() => applyFilter('mehendi')} title="Mehendi Filter" className="w-12 h-12 rounded-full bg-green-600 border-2 border-white/20 hover:scale-125 transition-all shadow-[0_0_15px_rgba(22,163,74,0.5)] flex items-center justify-center text-xl">🌿</button>
      <button onClick={() => applyFilter('shadi')} title="Shadi Filter" className="w-12 h-12 rounded-full bg-red-600 border-2 border-white/20 hover:scale-125 transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)] flex items-center justify-center text-xl">🌹</button>
      <button onClick={() => applyFilter('default')} title="Reset" className="w-12 h-12 rounded-full bg-slate-800 border-2 border-white/20 hover:scale-125 transition-all flex items-center justify-center text-xl">🔄</button>
    </div>
  );
};

export default FilterSystem;