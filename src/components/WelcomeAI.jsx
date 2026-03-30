import React, { useState, useEffect } from "react";
import { getAIWelcome } from "../utils/geminiApi";

const WelcomeAI = () => {
  const [aiMessage, setAiMessage] = useState("AI is generating a royal welcome...");

  // --- Voice Function ---
  const speakMessage = (text) => {
    // Check agar browser speech support karta hai
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "hi-IN"; // Hindi language set ki hai
      utterance.rate = 0.9;     // Thoda dheere aur saaf bolega
      utterance.pitch = 1.1;    // Awaaz ko thoda mitha (sweet) rakhega
      
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    const fetchMessage = async () => {
      const msg = await getAIWelcome();
      setAiMessage(msg);
      
      // Message milne ke baad AI bolega
      // Note: Kuch browsers bina user click ke audio play nahi karte
      // Isliye hum ise thode delay ke baad chala rahe hain
      setTimeout(() => {
        speakMessage(msg);
      }, 1000);
    };
    fetchMessage();
  }, []);

  return (
    <div className="w-full text-center py-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent border-y border-white/5 my-10 group cursor-pointer" 
         onClick={() => speakMessage(aiMessage)}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="h-px w-8 bg-purple-500/50"></span>
          <span className="text-[10px] text-purple-400 font-black tracking-[0.3em] uppercase">
            ✨ AI GREETING (Click to Listen)
          </span>
          <span className="h-px w-8 bg-purple-500/50"></span>
        </div>
        <h2 className="text-xl md:text-3xl font-medium text-white italic tracking-wide leading-relaxed font-serif group-hover:text-purple-300 transition-colors">
          {aiMessage}
        </h2>
      </div>
    </div>
  );
};

export default WelcomeAI;