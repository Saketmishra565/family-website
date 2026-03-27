import React from "react";
import { events } from "./familyData"; // Events data import kiya

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0a0516] px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h3 className="relative inline-block text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            Family Guestbook & Events
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[60%] h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full -mb-2"></span>
          </h3>
          <p className="text-gray-400 mt-6">Aane wale programs aur parivaar ke liye sandesh.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT: Upcoming Events List */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-white mb-4">Upcoming Functions</h4>
            {events.map((event) => (
              <div key={event.id} className="bg-white/5 border border-white/10 p-5 rounded-xl border-l-4 border-l-purple-500">
                <p className="text-purple-400 font-bold text-sm uppercase">{event.date}</p>
                <h5 className="text-white text-lg font-semibold mt-1">{event.title}</h5>
                <p className="text-gray-400 text-sm mt-2">{event.description}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: Message Form */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-white mb-6">Leave a Message</h4>
            <form className="space-y-4 text-left">
              <div>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/10 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                  placeholder="Aapka Naam"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  className="w-full bg-white/10 border border-white/10 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
                  placeholder="Parivaar ke liye koi pyara sandesh..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition duration-300 shadow-lg shadow-purple-500/20"
              >
                Post Message
              </button>
            </form>
          </div>

        </div>

        {/* Footer info */}
        <div className="mt-16 text-center border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm">
            Created with ❤️ for the Mishra Family
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;