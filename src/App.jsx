import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components Import
import Ticker from "./components/Ticker";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; // Ye aapka Family Members section hai
import Projects from "./components/Projects"; // Ye Memories Gallery hai
import Contact from "./components/Contact"; // Ye Guestbook/Events hai
import Footer from "./components/Footer";

function App() {
  // AOS Animation ko initialize karne ke liye
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true // Animation sirf ek baar chalegi scroll karne par
    });
  }, []);

  return (
    <div className="bg-[#05010d] text-white min-h-screen overflow-x-hidden">
      {/* 1. Sabse upar News Headline Ticker */}
      <Ticker /> 

      {/* 2. Navigation Bar */}
      <Navbar />
      
      {/* 3. Hero Section (Welcome screen) */}
      <div id="home">
        <Hero />
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
  );
}

export default App;