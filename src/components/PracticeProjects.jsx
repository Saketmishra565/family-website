import React from "react";

const practiceProjects = [
  {
    title: "Blog App",
    description: "A simple blog application with CRUD functionality.",
    tech: ["Python", "Flask", "SQLite"],
    link: "#",
  },
  {
    title: "Calculator App",
    description: "A basic calculator app built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Personal Notes Manager",
    description: "Manage your personal notes with search and filter options.",
    tech: ["Python", "FastAPI", "MongoDB"],
    link: "#",
  },
  {
    title: "Quote Generator",
    description: "Generates random motivational quotes from an API.",
    tech: ["JavaScript", "React"],
    link: "#",
  },
  {
    title: "Todo App (FastAPI)",
    description: "Task management app built with FastAPI and React.",
    tech: ["FastAPI", "React", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Weather App",
    description: "Check current weather data using OpenWeather API.",
    tech: ["React", "API Integration"],
    link: "#",
  },
];

const colorClasses = [
  "bg-sky-200 text-sky-900",
  "bg-green-200 text-green-900",
  "bg-yellow-200 text-yellow-900",
  "bg-orange-200 text-orange-900",
  "bg-teal-200 text-teal-900",
  "bg-gray-200 text-gray-900",
  "bg-pink-200 text-pink-900",
];

const PracticeProjects = () => {
  return (
    <section className="py-16 bg-gray-50" id="practice-projects">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <h2 className="relative text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black mb-10">
            Practice & Learning Projects
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-[60%] h-1 bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 rounded-full"></span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {practiceProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      colorClasses[i % colorClasses.length]
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-indigo-600 hover:underline font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeProjects;
