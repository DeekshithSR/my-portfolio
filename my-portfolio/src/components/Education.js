import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor's Degree in Computer Science and Engineering",
      institution: "Dr AIT",
      year: "2022 - 2026",
      description: "Pursuing Bachelor's in CSE.",
      gpa: "-"
    },
    {
      id: 2,
      degree: "PUC",
      institution: "VSPUC",
      year: "2019 - 2021",
      description: "Pre-University Course.",
      gpa: "-"
    },
    {
      id: 3,
      degree: "SSLC",
      institution: "APS",
      year: "2008 - 2019",
      description: "Secondary School Leaving Certificate.",
      gpa: "-"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Python for Data Science",
      issuer: "NPTEL",
      year: "-",
      credential: "-"
    },
    {
      id: 2,
      name: "Machine Learning in Python",
      issuer: "Simplilearn",
      year: "-",
      credential: "-"
    },
    {
      id: 3,
      name: "Data Analytics with Python",
      issuer: "IBM",
      year: "-",
      credential: "-"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education & Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center lg:text-left">
              Academic Background
            </h3>
            <div className="space-y-6">
              {educationData.map((education) => (
                <div key={education.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {education.degree}
                    </h4>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {education.gpa}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-primary mb-2">
                    {education.institution}
                  </p>
                  <p className="text-gray-600 mb-2">{education.year}</p>
                  <p className="text-gray-700">{education.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center lg:text-left">
              Professional Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {cert.name}
                    </h4>
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-primary mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Credential ID: {cert.credential}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Achievements */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Additional Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Academic Awards</h4>
              <p className="text-gray-600">Dean's List, Merit Scholarships</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Research Papers</h4>
              <p className="text-gray-600">Published in International Conferences</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Leadership Roles</h4>
              <p className="text-gray-600">Student Organizations & Clubs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 