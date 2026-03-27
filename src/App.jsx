import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// import Skills from "./components/Skills"; // Family site mein zaroorat nahi
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
// import WorkExperience from "./components/WorkExperience"; // Hata diya
// import PracticeProjects from "./components/PracticeProjects"; // Hata diya

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    // Yahan background ko Dark (#05010d) kar diya hai
    <div className="bg-[#05010d] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Home Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Members Section (ID matching with Navbar) */}
      <div id="family">
        <About />
      </div>

      {/* Memories Gallery */}
      <div id="projects">
        <Projects />
      </div>

      {/* Events & Guestbook */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;