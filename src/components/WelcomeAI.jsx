import React, { useState, useEffect } from "react";
import { getAIWelcome } from "../utils/geminiApi";

const WelcomeAI = () => {
  const [aiMessage, setAiMessage] = useState("AI is generating a royal welcome...");

  useEffect(() => {
    const fetchMessage = async () => {
      const msg = await getAIWelcome();
      setAiMessage(msg);
    };
    fetchMessage();
  }, []);

  return (
    <div className="w-full text-center py-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent border-y border-white/5 my-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="h-px w-8 bg-purple-500/50"></span>
          <span className="text-[10px] text-purple-400 font-black tracking-[0.3em] uppercase">
            ✨ AI GREETING
          </span>
          <span className="h-px w-8 bg-purple-500/50"></span>
        </div>
        <h2 className="text-xl md:text-3xl font-medium text-white italic tracking-wide leading-relaxed font-serif">
          {aiMessage}
        </h2>
      </div>
    </div>
  );
};

export default WelcomeAI;