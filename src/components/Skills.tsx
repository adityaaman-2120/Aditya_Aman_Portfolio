import { skills, experienceColors } from "../data/skills";
import { CheckCircle, Star } from 'lucide-react';

const Skills = () => {
  const categoryDescriptions = {
    "Programming Languages": "Core languages for development and data analysis",
    "Frontend Development": "Creating responsive and interactive user interfaces",
    "Backend Development": "Building server-side logic and databases",
    "Tools & Technologies": "Development tools and platforms",
    "Currently Learning & Exploring": "Active areas of growth and exploration"
  };

  return (
    <section id="skills" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Capabilities</h2>
          <p className="text-gray-600 text-lg">A comprehensive toolkit for modern development</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div 
              key={category}
              className="lg:col-span-1 md:col-span-2 first:lg:col-span-1 first:md:col-span-2"
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{category}</h3>
                  <p className="text-sm text-gray-600">
                    {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                  </p>
                </div>

                {/* Skills Cloud */}
                <div className="space-y-3">
                  {skillList.map((skill: any, index: number) => (
                    <div 
                      key={index}
                      className="group relative"
                    >
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{skill.icon}</span>
                          <div>
                            <h4 className="font-medium text-gray-800">{skill.name}</h4>
                            {'experience' in skill && (
                              <div className="flex items-center gap-1 mt-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star 
                                    key={i}
                                    size={12}
                                    className={
                                      i < (
                                        skill.experience === 'Expert' ? 5 :
                                        skill.experience === 'Advanced' ? 4 :
                                        skill.experience === 'Intermediate' ? 3 : 2
                                      )
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Status Badge */}
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          'status' in skill 
                            ? experienceColors[skill.status as keyof typeof experienceColors]
                            : experienceColors[skill.experience as keyof typeof experienceColors]
                        }`}>
                          {'experience' in skill ? skill.experience.charAt(0) : skill.status.charAt(0)}
                        </div>
                      </div>
                      
                      {/* Hover Info */}
                      <div className="absolute z-10 hidden group-hover:block bg-white p-3 rounded-lg shadow-lg border border-gray-200 mt-1 left-0 right-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          {'projects' in skill && (
                            <span className="text-sm text-blue-600 font-medium">
                              {skill.projects} projects
                            </span>
                          )}
                        </div>
                        {'focus' in skill && (
                          <p className="text-xs text-gray-600">{skill.focus}</p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <CheckCircle size={12} className="text-green-500" />
                          <span className="text-xs text-gray-500">
                            {'experience' in skill ? `${skill.experience} level` : `${skill.status}`}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Progress Timeline */}
        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">Development Journey</h3>
          
          <div className="relative">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 ml-6" />
            
            <div className="space-y-8">
              {/* Phase 1 */}
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Foundation Phase</h4>
                  <p className="text-gray-600 mb-3">Mastering core programming and web fundamentals</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML/CSS</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Git</span>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Specialization Phase</h4>
                  <p className="text-gray-600 mb-3">Advanced frameworks and full-stack development</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Tailwind</span>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">AI/ML Focus Phase</h4>
                  <p className="text-gray-600 mb-3">Current focus on artificial intelligence and data science</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Machine Learning</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Data Science</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">R Programming</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;