import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaUsers, FaComments, FaUserTie } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", level: 70 },
        { name: "CSS", level: 70 },
        { name: "JavaScript", level: 65 },
        { name: "React.js", level: 60 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "SQL", level: 60 }
      ]
    }
  ];

  const softSkills = [
    "Teamwork",
    "Communication",
    "Leadership"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight drop-shadow-lg">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            A comprehensive overview of my technical skills and professional competencies.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technical Skills</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
                <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium flex items-center gap-2">
                          {skill.name === 'HTML' && <FaHtml5 className="text-orange-500" />}
                          {skill.name === 'CSS' && <FaCss3Alt className="text-blue-500" />}
                          {skill.name === 'JavaScript' && <FaJs className="text-yellow-500" />}
                          {skill.name === 'React.js' && <FaReact className="text-blue-400" />}
                          {skill.name === 'Node.js' && <FaNodeJs className="text-green-600" />}
                          {skill.name === 'SQL' && <FaDatabase className="text-indigo-500" />}
                          {skill.name}
                        </span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Professional Skills</h3>
          <div className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                  {skill === 'Teamwork' && <FaUsers className="text-blue-500" />}
                  {skill === 'Communication' && <FaComments className="text-green-500" />}
                  {skill === 'Leadership' && <FaUserTie className="text-purple-500" />}
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Additional Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Years Experience</h4>
              <p className="text-gray-600">Full Stack Development</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Projects Completed</h4>
              <p className="text-gray-600">Web & Mobile Applications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Technologies</h4>
              <p className="text-gray-600">Programming Languages & Tools</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Client Satisfaction</h4>
              <p className="text-gray-600">Project Delivery Success</p>
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Currently Learning
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-semibold text-gray-800 mb-2">Machine Learning</h4>
              <p className="text-gray-600 text-sm">TensorFlow & Python</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-800 mb-2">GraphQL</h4>
              <p className="text-gray-600 text-sm">Apollo & Prisma</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <div className="text-2xl mb-2">🎨</div>
              <h4 className="font-semibold text-gray-800 mb-2">Three.js</h4>
              <p className="text-gray-600 text-sm">3D Web Graphics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 