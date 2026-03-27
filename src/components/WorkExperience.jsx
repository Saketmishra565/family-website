import React from 'react';

const experiences = [
  {
    role: "Python Django Developer",
    company: "UltraCreation IT Solutions",
    duration: "2024 – 2025",
    description: [
      "Worked on portal.ultraxpert.in, an online consultation platform.",
      "Developed modules for expert skills management and test connections with the OpenAI Turbo model.",
      "Built backend features using Python, Django, and Django REST Framework.",
      "Integrated OpenAI APIs for real-time AI responses.",
      "Collaborated with cross-functional teams to enhance platform performance and user experience."
    ],
  },
  {
    role: "Software Engineer",
    company: "Ultraxpert Pvt. Ltd.",
    duration: "Jan 2025 – Present",
    description: [
      "Built FastAPI backend for users, reminders, mood tracking, and journaling features.",
      "Integrated GPT-4 via LangChain for an AI therapy chatbot.",
      "Developed RAG pipelines using local PDF content for contextual AI responses.",
      "Implemented async APIs, background tasks, and WebSocket communication.",
      "Monitored and logged LLM usage and handled error tracking for better reliability."
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className="px-4 py-8 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Work Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {exp.role}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {exp.company} • {exp.duration}
            </p>
            <ul className="mt-2 text-gray-700 dark:text-gray-200 list-disc pl-5 space-y-1">
              {exp.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
