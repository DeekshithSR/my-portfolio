import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      alert('Thank you for your message! I will get back to you soon.');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "deekshithsr03@gmail.com",
      link: "mailto:deekshithsr03@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "6363955939",
      link: "tel:6363955939"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Bengaluru, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourname",
      icon: "🐙"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourname",
      icon: "🐦"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourname",
      icon: "💼"
    },
    {
      name: "Portfolio",
      url: "https://yourportfolio.com",
      icon: "🌐"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{info.title}</h4>
                      <a 
                        href={info.link}
                        className="text-primary hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="text-xl">{social.icon}</div>
                    <span className="font-medium text-gray-800">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-green-800">Available for Opportunities</span>
              </div>
              <p className="text-green-700">
                I'm currently available for freelance projects, full-time positions, and collaborations. 
                Let's discuss how we can work together!
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm excited to hear about your ideas and help bring them to life. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start a Project
              </a>
              <a 
                href="#projects"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 