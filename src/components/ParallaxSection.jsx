import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background image thoda dheere move hogi (Y-axis)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Text thoda upar ki taraf bhagega
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <div 
      ref={ref} 
      className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center"
    >
      {/* --- BACKGROUND IMAGE --- */}
      <motion.div
        style={{ 
          y: backgroundY,
          backgroundImage: "url('/family.jpg')", // Aapki public folder wali family photo
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="absolute inset-0 z-0"
      >
        {/* Overlay taaki text saaf dikhe */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </motion.div>

      {/* --- FLOATING TEXT --- */}
      <motion.div style={{ y: textY }} className="relative z-10 text-center">
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
          गौतम <span className="text-purple-500">परिवार</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mt-4 font-light tracking-[0.5em] uppercase">
          एक अटूट बंधन
        </p>
      </motion.div>
    </div>
  );
};

export default ParallaxSection;