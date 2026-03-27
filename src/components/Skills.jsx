import React from "react";
import { FaReact, FaJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiFastapi, SiMongodb, SiTailwindcss, SiVercel } from "react-icons/si";

// Work Experience Data (UPDATED)
const experiences = [
  {
    role: "Python Django Developer",
    company: "UltraCreation IT Solutions",
    duration: "2024 – 2025",
    description: `Worked on portal.ultraxpert.in, an online consultation platform.
Developed modules for expert skills management and test connections with the OpenAI Turbo model.
Built backend features using Python, Django, and Django REST Framework.
Integrated OpenAI APIs for real-time AI responses.
Collaborated with cross-functional teams to enhance platform performance and user experience.`,
  },
  {
    role: "Software Engineer",
    company: "Ultraxpert Pvt. Ltd.",
    duration: "Jan 2025 – Present",
    description: `Built FastAPI backend for users, reminders, mood tracking, and journaling features.
Integrated GPT-4 via LangChain for an AI therapy chatbot.
Developed RAG pipelines using local PDF content for contextual AI responses.
Implemented async APIs, background tasks, and WebSocket communication.
Monitored and logged LLM usage and handled error tracking for better reliability.`,
  },
];

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Vercel", icon: <SiVercel className="text-black" /> },
];

const Skills = () => {
  return (
    <>
      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
            My Skills
          </h3>
          <div className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-red-600 to-black rounded-full"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <p className="font-semibold text-gray-800">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
            Work Experience
          </h2>
          <div className="w-28 h-1 mx-auto my-4 bg-gradient-to-r from-red-600 to-black rounded-full"></div>

          <div className="space-y-6 mt-10 text-left">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-black">{exp.role}</h3>
                <p className="text-sm text-gray-700">
                  {exp.company} • {exp.duration}
                </p>
                <ul className="mt-2 text-gray-800 list-disc pl-5 space-y-1">
                  {exp.description.split("\n").map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
