import React from "react";
import { events } from "./familyData";

const Ticker = () => {
  if (!events || events.length === 0) return null;

  return (
    /* fixed top-0 add kiya hai taki ye hamesha upar rahe */
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-red-800 via-purple-900 to-red-800 overflow-hidden py-3 border-b border-yellow-500/30 z-[100] shadow-2xl">
      <div className="flex whitespace-nowrap animate-marquee">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center">
            {events.map((event) => (
              <span key={event.id} className="text-white font-bold text-sm md:text-base mx-12 flex items-center">
                <span className="bg-yellow-500 text-black px-2 py-0.5 rounded-md mr-3 text-[10px] font-black">
                  MANGAL UTSAV
                </span>
                <span className="text-yellow-100">{event.description}:</span> 
                <span className="ml-2 text-white">{event.date}</span>
                <span className="mx-6 opacity-30">|</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;