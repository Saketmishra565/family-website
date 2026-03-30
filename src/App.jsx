import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Theme & Global Components
import { ThemeProvider } from "./context/ThemeContext";
import FilterSystem from "./components/FilterSystem";

// Components Import
import Ticker from "./components/Ticker";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WelcomeAI from "./components/WelcomeAI";
import ParallaxSection from "./components/ParallaxSection";
import About from "./components/About"; 
import Projects from "./components/Projects"; 
import Contact from "./components/Contact"; 
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true 
    });
  }, []);

  return (
    <ThemeProvider>
      {/* Container jo ThemeContext se background color lega */}
      <div 
        className="text-white min-h-screen overflow-x-hidden transition-colors duration-1000"
        style={{ backgroundColor: 'var(--bg-color, #05010d)' }}
      >
        {/* --- Floating Filter Buttons --- */}
        <FilterSystem />

        {/* 1. News Headline Ticker */}
        <Ticker /> 

        {/* 2. Navigation Bar */}
        <Navbar />
        
        {/* 3. Hero & AI Sections */}
        <div id="home">
          <Hero />
          <WelcomeAI />
          <ParallaxSection />
        </div>

        {/* 4. Family Members Section */}
        <div id="family">
          <About />
        </div>

        {/* 5. Memories Gallery Section */}
        <div id="projects">
          <Projects />
        </div>

        {/* 6. Events & Contact Section */}
        <div id="contact">
          <Contact />
        </div>

        {/* 7. Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;