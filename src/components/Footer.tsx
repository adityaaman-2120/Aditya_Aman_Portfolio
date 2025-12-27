import { Github, Linkedin, Mail, Heart, Code, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const techStack = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Python',
    'PostgreSQL'
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-white/10">
      {/* Top gradient accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
               <img 
                 src="/Screenshot 2025-12-27 161732.png" 
                 alt="Profile" 
                 className="w-full h-full object-cover"
               />
             </div>
              <div>
                <h3 className="text-xl font-bold text-white">Aditya Aman</h3>
                <p className="text-sm text-gray-400">AI & Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Creating intelligent solutions through code and innovation. 
              Passionate about building the future with technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ExternalLink size={12} />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">
                Open to collaborations, internship opportunities, and interesting projects.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="p-2 rounded-full bg-white/5 hover:bg-blue-600/30 text-gray-400 hover:text-white transition-all hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:aditya@example.com"
                  className="p-2 rounded-full bg-white/5 hover:bg-red-500/30 text-gray-400 hover:text-white transition-all hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Code size={16} />
            <span>
              © {currentYear} Aditya Aman. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Built with</span>
              <Heart size={12} className="text-red-500 animate-pulse" />
              <span>using React & Tailwind</span>
            </a>
          </div>
        </div>

        {/* Back to top */}
        <div className="text-center mt-8">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
          >
            <span>Back to top</span>
            <div className="w-4 h-4 rounded-full border border-gray-400 group-hover:border-white transition-colors flex items-center justify-center">
              <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;