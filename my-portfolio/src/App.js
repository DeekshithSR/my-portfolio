import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Full Stack Developer | UI/UX Designer | Tech Enthusiast
            </p>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Learn More About Me
            </button>
          </div>
        </section>

        <About />
        <Education />
        <Projects />
        <Skills />
        <Blogs />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 