import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectData = {
  "Full Stack Projects": [
    {
      title: "Spotlight",
      description: "Dynamic platform built to Showcase Students' Projects.",
      techStack: ["Next.js", "Typescript", "Sanity", "Sentry"],
      image: "/images/Spotlight.png",
      link: "https://spotlight-wheat.vercel.app/",
    },
    {
      title: "Planorama",
      description: "Dynamic travel itinerary builder and blog.",
      techStack: ["React", "Firebase", "Express", "Framer Motion","Gemini API"],
      image: "/images/Planorama.png",
      link: "https://frontend-pam3.onrender.com/",
    },
  ],
  // "ML / AI Projects": [
  //   {
  //     title: "Fitness Assistant",
  //     description: "AI workout classifier with personalized suggestions.",
  //     techStack: ["Python", "Scikit-learn", "NLP"],
  //     image: "https://via.placeholder.com/300x300?text=Fitness+AI",
  //     link: "#",
  //   },
  //   {
  //     title: "FirstAidNet",
  //     description: "AI-based health advice & emergency locator.",
  //     techStack: ["React", "Flask", "OpenAI"],
  //     image: "https://via.placeholder.com/300x300?text=FirstAidNet",
  //     link: "#",
  //   },
  // ],
  "Other Projects": [
    {
      title: "Portfolio",
      description: "Portfolio website showcasing my projects and skills.",
      techStack: ["React", "Framer Motion" , "MongoDb"],
      image: "/images/Portfolio.png",
      link: "#",
    },
  ],
};

const ProjectsPage = () => {
  const [activeGroup, setActiveGroup] = useState("Full Stack Projects");
  const projectGroups = Object.keys(projectData);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 flex flex-col md:flex-row h-[75vh]">
      {/* Left: Project Display */}
      <div className="flex-1 pr-8 overflow-y-auto mb-40 no-scrollbar">
        <h1 className="text-4xl font-bold mb-6 text-purple-300">My Projects</h1>

        {/* Show all project groups on small screens */}
        <div className="space-y-12 md:hidden">
          {Object.keys(projectData).map((group) => (
            <div key={group}>
              <h2 className="text-2xl font-semibold mb-4">{group}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projectData[group].map((project, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col justify-between group hover:shadow-xl transition duration-300"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Only show selected category on md+ */}
        <div className="hidden md:block space-y-6">
          <h2 className="text-2xl font-semibold mb-4">{activeGroup}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projectData[activeGroup].map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col justify-between group hover:shadow-xl transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Category Selector */}
      <div className="hidden md:block md:w-64  mt-0 md:border-l md:border-gray-700 pl-8 flex-shrink-0">
        <h3 className="text-xl font-semibold mb-4 text-purple-300">
          Project Categories
        </h3>
        <div className="flex flex-col space-y-3">
          {projectGroups.map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`text-left px-4 py-2 rounded-xl transition font-medium ${
                activeGroup === group
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 hover:bg-purple-500 hover:text-white"
              }`}
            >
              {group}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
