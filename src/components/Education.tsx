const Education = () => {
  const educationData = [
    {
      degree: "Professional Certification in Artificial Intelligence and Machine Learning",
      specialization: "Artificial Intelligence, Machine Learning, and Data Science",
      institution: "IIT Patna Vishlesan I-Hub Foundation, Patna (Online)",
      year: "2025 - 2026",
      details: "Enrolled in a 9-month AI and ML program offered by IIT Patna Vishlesan I-Hub Foundation in collaboration with Masai School. The course focuses on hands-on learning in Python, Data Science, Machine Learning, Deep Learning, NLP, and AI applications with industry-level mentorship and projects."
    },
    {
      degree: "B.Tech in Computer Science & Engineering",
      specialization: "Artificial Intelligence & Machine Learning",
      institution: "Heritage Institute Of Technology, Kolkata",
      year: "2024 - 2028",
      details: "Pursuing specialization in AI/ML with focus on practical applications and research projects."
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      specialization: "Science Stream (Physics, Chemistry, Mathematics, Computer Science)",
      institution: "Shivam International, Patna",
      year: "2024",
      details: "Secured 85% aggregate with distinction in Computer Science and Mathematics."
    },
    {
      degree: "Secondary Education (10th Grade)",
      specialization: "General Studies",
      institution: "Saraswati Vidya Mandir, Patna",
      year: "2021 - 2022",
      details: "Percentage: 92.6% with honors in Mathematics and Science subjects."
    }
  ];

  return (
    <section id="education" className="bg-white section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Education</h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6 py-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium">{edu.specialization}</p>
                </div>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full mt-2 md:mt-0">
                  {edu.year}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{edu.institution}</p>
              <p className="text-gray-500">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;