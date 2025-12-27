import { Award, Calendar, Trophy } from 'lucide-react';

const experiences = [
  {
    icon: <Calendar />,
    title: "Google Developer Groups on Campus HIT",
    role: "Student Member",
    period: "2024-present",
    description: "student member participating in discussion and events.",
    tech: ["Python", "React", "FastAPI", "Computer Vision"]
  },
  {
    icon: <Calendar />,
    title: "ACM HITK - Association for Computing Machinery at HITK",
    role: "Student Member",
    period: "2025-present",
    description: "Student member participating in discussions and events",
    tech: ["Network Security", "Cryptography", "Risk Assessment"]
  },
  {
    icon: <Trophy />,
    title: "Best Pitching Award – Zero’s Arena Hackathon",
    role: "Core Member",
    period: "2025",
    description: "Organized multiple tech workshops and coding competitions, mentored 50+ junior students in web development.",
    tech: ["Communication", "Mentoring", "Public Speaking", "Pitching Ideas", "Open Innovation"]
  },
  {
    icon: <Trophy />,
    title: "UXcelerate.ai VibeHack 2025",
    role: "Hackathon Winner | Project Developer",
    period: "2025",
    description: "Won the UXcelerate.ai VibeHack 2025 by developing UnityCure, a healthcare platform focused on improving access to medical support through digital coordination of patients, healthcare providers, and support services. Recognized for problem-driven design, usability, scalability, and real-world healthcare impact.",
    tech: ["Healthcare Tech", "Product Design", "Problem Solving", "UX Thinking", "Hackathon Development"]
  },
  {
    icon: <Award />,
    title: "HackHeritage Hackathon",
    role: "Full-Stack Developer",
    period: "2025",
    description: "Built UnityCure, a healthcare platform focused on digital health access, patient support, and smart service coordination. Selected for the 36-hour college-level hackathon round based on innovation, real-world impact, and technical feasibility.",
    tech: ["Healthcare Tech", "Full-Stack Development", "System Design", "Problem Solving", "Team Collaboration"]
  },
  {
    icon: <Calendar />,
    title: "Institution’s Innovation Council (IIC) | Heritage Institute of Technology",
    role: "Innovation Ambassador (Foundation & Advanced Level)",
    period: "2025-present",
    description: "Completed Innovation Ambassador training at both Foundation and Advanced levels under the Institution’s Innovation Council (IIC), an initiative by MoE’s Innovation Cell and AICTE. Actively contributed to multiple IIC-led activities and initiatives, supporting innovation-focused programs while gaining hands-on exposure to entrepreneurship, design thinking, the startup ecosystem, and institutional innovation practices.",
    tech: ["Innovation & Entrepreneurship", "Design Thinking", "Startup Ecosystem", "Problem Identification", "Innovation Management"]
  },
  {
    icon: <Award />,
    title: "Smart India Hackathon (SIH)",
    role: "Team Lead | Full-Stack Developer",
    period: "2025",
    description: "Led the development of CivicFix, an AI-powered civic issue reporting and governance platform designed to improve public service transparency and citizen–authority coordination. Selected at the college level for solution quality, problem relevance, and practical feasibility.",
    tech: ["Civic Tech", "Full-Stack Development", "AI/ML Concepts", "System Design", "Team Leadership"]
  },
  {
    icon: <Calendar />,
    title: "EDIC Club | Heritage Institute of Technology",
    role: "Organizer & Student Lead",
    period: "2025",
    description: "Actively contributed as an organizer in technical and entrepreneurial club activities, supporting event planning, coordination, and execution in collaboration with the core team. Assisted in creating event collaterals such as posters, banners, and certificates, and contributed to ensuring smooth on-ground operations during multiple college events.",
    tech: ["Event Management", "Leadership", "Design Tools", "Team Coordination", "Technical Operations"]
  },
];


const Experience = () => {
  return (
    <section id="experience" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Experience & Achievements</h2>
          <p className="text-gray-600 text-lg">My journey so far</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 hidden lg:block" />
                
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="glass-card p-6 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        {exp.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{exp.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;