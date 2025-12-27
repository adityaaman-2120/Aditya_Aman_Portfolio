import { Code, Cpu, Database, Globe } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: <Code />, title: "Web Development", desc: "Building responsive web applications" },
    { icon: <Cpu />, title: "AI/ML", desc: "Exploring machine learning models" },
    { icon: <Database />, title: "Backend Systems", desc: "Scalable server architectures" },
    { icon: <Globe />, title: "Open Source", desc: "Contributing to community projects" },
  ];

  return (
    <section id="about" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Passionate developer with a focus on creating meaningful solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I’m currently pursuing my B.Tech in Computer Science (Artificial Intelligence & Machine Learning) and am deeply interested in working with startups, where I can build real-world, impact-driven software solutions using Artificial Intelligence, Machine Learning, and Full-Stack Development.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From developing end-to-end full-stack applications to applying AI/ML, data analytics, and computer vision for practical, user-focused use cases, I enjoy taking ownership across the entire software development lifecycle—from problem discovery and rapid prototyping to deployment and iteration.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I actively participate in hackathons, innovation programs, and technical communities, continuously strengthening my skills in Machine Learning, Data Structures & Algorithms, scalable backend systems, and open-source development. I am actively seeking startup internship opportunities where I can move fast, learn deeply, contribute meaningfully, and grow as an engineer in high-impact, product-driven teams.
              </p>
              <a href="#contact" className="btn-primary inline-block">
                Let's Connect
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {interests.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-500 mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-2 text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;