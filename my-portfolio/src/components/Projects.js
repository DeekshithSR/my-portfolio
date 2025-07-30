import React from 'react';
import { FaMicrophone, FaGlobe } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Text to Speech Converter",
      description: "A web application that converts user-inputted text into speech using browser APIs.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Employee Management System",
      description: "A system to manage employee records, attendance, and payroll, built with Node.js and SQL.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
      technologies: ["Node.js", "SQL", "Express"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Face Mask Detection",
      description: "A machine learning project to detect whether a person is wearing a face mask using image processing.",
      image: "https://images.unsplash.com/photo-1588776814546-ec7e93716c5b?auto=format&fit=crop&w=400&q=80",
      technologies: ["Python", "OpenCV", "Machine Learning"],
      category: "ai",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Rock vs Mine Prediction",
      description: "A data science project that predicts whether a sonar signal is a rock or a mine using classification algorithms.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      technologies: ["Python", "Scikit-learn", "Data Science"],
      category: "ai",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React.js and Tailwind CSS to showcase my skills, education, and projects.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  // Filtering is not used, so we just show all projects
  const filteredProjects = projects;

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight drop-shadow-lg">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden hover:scale-105 hover:shadow-pink-200 transition-all duration-300 border border-white/20 group">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition duration-300"
                />
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  {project.category === 'web' && <FaGlobe className="text-blue-500 text-xl" />}
                  {project.category === 'ai' && <FaMicrophone className="text-purple-500 text-xl" />}
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-base">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-blue-200 to-purple-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 rounded-lg hover:scale-105 hover:bg-blue-600 transition-all font-semibold shadow"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 bg-gradient-to-r from-gray-200 to-gray-400 text-gray-700 text-center py-2 rounded-lg hover:scale-105 hover:bg-gray-300 transition-all font-semibold shadow"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <a 
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 