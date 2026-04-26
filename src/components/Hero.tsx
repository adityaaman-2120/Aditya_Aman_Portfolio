import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code, Cpu, Database } from 'lucide-react';

const Hero = () => {
  const floatingElements = [
    { icon: <Code />, text: "Full-Stack", color: "from-blue-500 to-cyan-500", delay: "0s", position: { left: "10%", top: "20%" }  },
    { icon: <Cpu />, text: "AI/ML", color: "from-purple-500 to-pink-500", delay: "1s", position: { left: "70%", top: "30%" } },
    { icon: <Database />, text: "Data Science", color: "from-green-500 to-teal-500", delay: "2s", position: { left: "40%", top: "70%" } },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating AI + Code Circle in Bottom Right Corner */}
      <div className="absolute bottom-10 right-10 hidden lg:block z-20">
        <div className="relative w-64 h-64">
          <div className="absolute inset-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <div className="text-6xl mb-4">👨‍💻</div>
              <div className="text-white font-semibold">AI + Code</div>
              <div className="text-gray-400 text-sm">Innovating Solutions</div>
            </div>
          </div>
          
          {/* Optional decorative rings */}
          <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-spin-slow" style={{ animationDuration: '15s' }} />
          <div className="absolute inset-8 border border-purple-500/20 rounded-full animate-spin-slow-reverse" style={{ animationDuration: '20s' }} />
        </div>
      </div>

      {/* Floating tech badges */}
      {floatingElements.map((item, index) => (
        <div
          key={index}
          className={`absolute hidden lg:block animate-float bg-gradient-to-r ${item.color} p-4 rounded-2xl shadow-xl`}
          style={{
            left: `${40 + index * 25}%`,
            top: `${18 + index * 15}%`,
            animationDelay: item.delay,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="text-white">{item.icon}</div>
            <span className="text-white font-medium">{item.text}</span>
          </div>
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Floating profile photo in corner - Add this */}
          <div className="absolute top-20 right-1 hidden lg:block z-20">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              
              {/* Profile image */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
                <img 
                  src="/image_6782e25c-Photoroom.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Tooltip */}
              <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-gray-800 rounded-lg text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Aditya Aman
              </div>
            </div>
          </div>

          {/* Left Column - Content */}
          <div className="text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-12 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
              <div>
                <span className="text-sm text-blue-400 font-medium tracking-wider">
                  AI & FULL-STACK DEVELOPER
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Aditya</span>{' '}
              <span className="gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Aman
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
              Building the Future with{' '}
              <span className="relative inline-block">
                <span className="gradient-text font-bold">AI & Code</span>
                <Sparkles className="absolute -top-2 -right-4 text-yellow-400 w-5 h-5" />
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
              B.Tech CSE (AI/ML) student specializing in creating intelligent, scalable solutions. 
              Passionate about merging cutting-edge artificial intelligence with elegant software 
              engineering to solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#projects" 
                className="group btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 text-lg"
              >
                <span>Explore Projects</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              {/* UPDATED RESUME BUTTON */}
              <a 
                href="/Aditya_Aman_Resume_v2.pdf" 
                download="Aditya_Aman_Resume.pdf"
                className="group btn-secondary border-2 border-gray-700 hover:border-white inline-flex items-center justify-center gap-3 px-8 py-4 text-lg"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">10+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                <div className="text-sm text-gray-400">Passionate</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-gray-400">Connect with me:</span>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/adityaaman-2120" 
                  className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all hover:scale-110 hover:shadow-lg"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/aditya-aman-61aa56320/" 
                  className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 text-white transition-all hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:adityaaman2120@gmail.com" 
                  className="p-3 rounded-full bg-gray-800 hover:bg-red-500 text-white transition-all hover:scale-110 hover:shadow-lg"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Outer ring */}
              <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-spin-slow" />
              
              {/* Middle ring */}
              <div className="absolute inset-12 border-2 border-purple-500/30 rounded-full animate-spin-slow-reverse" />
              
              {/* Inner element */}
              <div className="absolute inset-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden">
                <div className="text-center">
                  <div className="w-30 h-30 mb-4 mx-auto rounded-full overflow-hidden">
                    <img 
                      src="/Screenshot 2025-12-27 161732.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating elements around */}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center"
                  style={{
                    transform: `rotate(${i * 90}deg) translateX(180px) rotate(-${i * 90}deg)`,
                  }}
                >
                  <div className="text-2xl">
                    {['⚛️', '🧠', '🚀', '💻'][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white transition-colors">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;