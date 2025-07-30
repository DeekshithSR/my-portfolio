import React from 'react';
import { FaProjectDiagram, FaAward, FaTools, FaSmile } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight drop-shadow-lg">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            I'm a passionate developer who loves creating beautiful and functional web applications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="text-center">
            <div className="w-80 h-80 mx-auto mb-6">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Deekshith Avatar" className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2 tracking-wide">Deekshith</h3>
            <p className="text-purple-600 font-semibold text-lg">Full Stack Developer</p>
          </div>
          {/* About Content */}
          <div className="space-y-8">
            <div className="bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><FaAward className="text-yellow-500" /> Who I Am</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                I'm a dedicated full-stack developer with a passion for creating innovative web solutions. With expertise in modern technologies like React, Node.js, and cloud platforms, I bring ideas to life through clean, efficient code and intuitive user experiences.
              </p>
            </div>
            <div className="bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><FaTools className="text-blue-500" /> What I Do</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                I specialize in building responsive web applications, RESTful APIs, and scalable solutions. My approach combines technical excellence with creative problem-solving to deliver projects that exceed expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/40 backdrop-blur-lg p-6 rounded-xl flex flex-col items-center shadow-lg border border-white/20">
                <FaAward className="text-3xl text-yellow-500 mb-2" />
                <h4 className="font-semibold text-gray-800 mb-1">Experience</h4>
                <p className="text-2xl font-bold text-purple-700 animate-pulse">0</p>
                <span className="text-gray-600 text-sm">Years</span>
              </div>
              <div className="bg-white/40 backdrop-blur-lg p-6 rounded-xl flex flex-col items-center shadow-lg border border-white/20">
                <FaProjectDiagram className="text-3xl text-blue-500 mb-2" />
                <h4 className="font-semibold text-gray-800 mb-1">Projects</h4>
                <p className="text-2xl font-bold text-purple-700 animate-bounce">5</p>
                <span className="text-gray-600 text-sm">Completed</span>
              </div>
              <div className="bg-white/40 backdrop-blur-lg p-6 rounded-xl flex flex-col items-center shadow-lg border border-white/20">
                <FaTools className="text-3xl text-green-500 mb-2" />
                <h4 className="font-semibold text-gray-800 mb-1">Technologies</h4>
                <p className="text-2xl font-bold text-purple-700">6+</p>
                <span className="text-gray-600 text-sm">Mastered</span>
              </div>
              <div className="bg-white/40 backdrop-blur-lg p-6 rounded-xl flex flex-col items-center shadow-lg border border-white/20">
                <FaSmile className="text-3xl text-pink-500 mb-2" />
                <h4 className="font-semibold text-gray-800 mb-1">Client Satisfaction</h4>
                <p className="text-2xl font-bold text-purple-700">100%</p>
                <span className="text-gray-600 text-sm">Positive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 