import React from 'react';
import MontyImage from '../assets/Montyjha.jpeg'; 
import { Link } from 'react-router-dom';
import { Code, Briefcase, GraduationCap, MapPin, User, Rocket, Award, Building, Mail, Phone } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center animate-fade-in-up">
              <div className="relative inline-block mb-8">
                <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full mx-auto overflow-hidden shadow-2xl border-4 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300">
                  <img 
                    src={MontyImage}
                    alt="Monty Jha - Web Developer" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
                      if (sibling && sibling.style) sibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                    <User className="w-20 h-20 lg:w-24 lg:h-24 text-white" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-ping"></div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Monty Jha
              </h1>
              <p className="text-xl lg:text-2xl text-blue-200 mb-4 font-medium">Full Stack Web Developer</p>
              <div className="flex items-center justify-center text-gray-300 mb-8">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">Rampur, Uttar Pradesh, India</span>
              </div>
              
              {/* Quick Contact */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">jhamonty302@gmail.com</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">+91 6396431953</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Full Width Cards */}
        <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
          
          {/* Professional Summary */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/20 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 flex items-center justify-center">
                  <Rocket className="w-8 lg:w-10 h-8 lg:h-10 mr-4 text-blue-400" />
                  Professional Summary
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">Who I Am</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    I'm <span className="text-cyan-300 font-semibold">Monty Jha</span>, a passionate and dedicated Full Stack Web Developer from Rampur, Uttar Pradesh. 
                    Currently pursuing my Bachelor's degree in Computer Science from Teerthanker Mahaveer University, graduating in 2025.
                  </p>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-green-300 mb-4">My Expertise</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    With solid foundation in <span className="text-yellow-300 font-semibold">MERN stack development</span> and 
                    hands-on experience through multiple internships, I specialize in creating scalable web applications and 
                    user-centric digital experiences.
                  </p>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-purple-300 mb-4">My Mission</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Driven by <span className="text-yellow-300 font-semibold">innovation</span> and 
                    <span className="text-yellow-300 font-semibold"> quality</span>, I aim to build 
                    impactful solutions that solve real-world problems and create meaningful user experiences.
                  </p>
                </div>
              </div>

              {/* Professional Stats */}
              <div className="mt-12 pt-8 border-t border-blue-500/20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center bg-blue-900/30 rounded-2xl p-6 border border-blue-400/20 hover:bg-blue-900/40 transition-all duration-300">
                    <div className="text-3xl lg:text-4xl font-bold text-blue-300 mb-2">3+</div>
                    <div className="text-gray-400 font-medium">Websites Delivered</div>
                  </div>
                  <div className="text-center bg-green-900/30 rounded-2xl p-6 border border-green-400/20 hover:bg-green-900/40 transition-all duration-300">
                    <div className="text-3xl lg:text-4xl font-bold text-green-300 mb-2">4+</div>
                    <div className="text-gray-400 font-medium">Internships</div>
                  </div>
                  <div className="text-center bg-purple-900/30 rounded-2xl p-6 border border-purple-400/20 hover:bg-purple-900/40 transition-all duration-300">
                    <div className="text-3xl lg:text-4xl font-bold text-purple-300 mb-2">2024</div>
                    <div className="text-gray-400 font-medium">Graduate</div>
                  </div>
                  <div className="text-center bg-cyan-900/30 rounded-2xl p-6 border border-cyan-400/20 hover:bg-cyan-900/40 transition-all duration-300">
                    <div className="text-3xl lg:text-4xl font-bold text-cyan-300 mb-2">100%</div>
                    <div className="text-gray-400 font-medium">Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Position */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/20 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-green-500/20 hover:border-green-400/40 transition-all duration-500 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 flex items-center justify-center">
                  <Building className="w-8 lg:w-10 h-8 lg:h-10 mr-4 text-green-400" />
                  Current Position
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-8 border border-green-400/30">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-green-300 mb-2">Web Developer</h3>
                    <p className="text-xl text-gray-200 mb-2">MICRODIGITALL</p>
                    <p className="text-gray-400 mb-6">Current Position • 3+ months</p>
                    <div className="inline-flex items-center bg-green-500/20 rounded-full px-4 py-2 text-green-300 font-medium">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Currently Active
                    </div>
                  </div>
                  <div className="bg-green-800/20 rounded-2xl p-6 border border-green-400/20">
                    <h4 className="text-xl font-bold text-green-200 mb-4">Key Achievements</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Developed and delivered 3 full-fledged websites</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Built comprehensive Attendance Management System</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Maintained 100% on-time project delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/20 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 flex items-center justify-center">
                  <GraduationCap className="w-8 lg:w-10 h-8 lg:h-10 mr-4 text-cyan-400" />
                  Education & Training
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-8 border border-blue-400/20 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-blue-300 mb-2">Bachelor's Degree</h3>
                    <p className="text-lg text-gray-200 mb-1">Computer Science</p>
                    <p className="text-gray-400">Teerthanker Mahaveer University, Moradabad</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-2 text-blue-300 font-medium">
                      Graduating 2024
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-400/20 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-purple-300 mb-2">Specialization</h3>
                    <p className="text-lg text-gray-200 mb-1">Full Stack MERN Development</p>
                    <p className="text-gray-400">CETPA Infotech</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center bg-purple-500/20 rounded-full px-4 py-2 text-purple-300 font-medium">
                      Professional Training
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/20 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 flex items-center justify-center">
                  <Briefcase className="w-8 lg:w-10 h-8 lg:h-10 mr-4 text-purple-400" />
                  Professional Experience
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-400/20 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Code className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-purple-300 mb-1">Web Development Intern</h3>
                    <p className="text-gray-300">Eduaxs Solution, Noida</p>
                    <p className="text-sm text-gray-400 mt-2">3-month internship</p>
                  </div>
                  <div className="bg-purple-800/20 rounded-lg p-4 border border-purple-400/30 text-center">
                    <p className="text-purple-200 text-sm">WordPress development & React.js projects</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-400/20 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Rocket className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold text-orange-300 mb-1">Web Development Intern</h3>
                    <p className="text-gray-300">Jakson Pvt. Ltd.</p>
                    <p className="text-sm text-gray-400 mt-2">UniversitySuggest Project</p>
                  </div>
                  <div className="bg-orange-800/20 rounded-lg p-4 border border-orange-400/30 text-center">
                    <p className="text-orange-200 text-sm">React-based university comparison platform</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-900/30 to-green-900/30 rounded-2xl p-6 border border-yellow-400/20 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Building className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-bold text-yellow-300 mb-1">Python Development Intern</h3>
                    <p className="text-gray-300">CETPA Infotech Pvt. Ltd.</p>
                    <p className="text-sm text-gray-400 mt-2">Backend specialization</p>
                  </div>
                  <div className="bg-yellow-800/20 rounded-lg p-4 border border-yellow-400/30 text-center">
                    <p className="text-yellow-200 text-sm">Backend logic & scripting expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/20 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-500 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 flex items-center justify-center">
                  <Code className="w-8 lg:w-10 h-8 lg:h-10 mr-4 text-pink-400" />
                  Featured Projects
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-2xl p-8 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <User className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-300 mb-3">Student Management System</h3>
                    <p className="text-gray-300 mb-6">Comprehensive academic project showcasing full-stack development capabilities with advanced student data management features</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-blue-800/30 text-blue-200 text-sm rounded-full border border-blue-400/20">Full-Stack</span>
                    <span className="px-3 py-1 bg-blue-800/30 text-blue-200 text-sm rounded-full border border-blue-400/20">CRUD Operations</span>
                    <span className="px-3 py-1 bg-blue-800/30 text-blue-200 text-sm rounded-full border border-blue-400/20">Database Design</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-300 mb-3">E-Commerce Platform</h3>
                    <p className="text-gray-300 mb-6">Fully functional online store featuring payment integration, inventory management, and modern user experience design</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-purple-800/30 text-purple-200 text-sm rounded-full border border-purple-400/20">E-Commerce</span>
                    <span className="px-3 py-1 bg-purple-800/30 text-purple-200 text-sm rounded-full border border-purple-400/20">Payment Gateway</span>
                    <span className="px-3 py-1 bg-purple-800/30 text-purple-200 text-sm rounded-full border border-purple-400/20">Responsive Design</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-900/40 to-teal-900/40 rounded-2xl p-8 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-green-300 mb-3">Attendance Management</h3>
                    <p className="text-gray-300 mb-6">Enterprise-level system for employee tracking, reporting, and analytics with real-time data processing</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-green-800/30 text-green-200 text-sm rounded-full border border-green-400/20">Enterprise</span>
                    <span className="px-3 py-1 bg-green-800/30 text-green-200 text-sm rounded-full border border-green-400/20">Real-time</span>
                    <span className="px-3 py-1 bg-green-800/30 text-green-200 text-sm rounded-full border border-green-400/20">Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/20 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 flex items-center justify-center">
                  <Award className="w-8 lg:w-10 h-8 lg:h-10 mr-4 text-yellow-400" />
                  Technical Expertise
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-6">
                {[
                  { name: 'React.js', color: 'from-blue-600/30 to-cyan-600/30', border: 'border-blue-400/30', text: 'text-blue-300' },
                  { name: 'Node.js', color: 'from-green-600/30 to-emerald-600/30', border: 'border-green-400/30', text: 'text-green-300' },
                  { name: 'Python', color: 'from-yellow-600/30 to-orange-600/30', border: 'border-yellow-400/30', text: 'text-yellow-300' },
                  { name: 'MongoDB', color: 'from-green-600/30 to-teal-600/30', border: 'border-teal-400/30', text: 'text-teal-300' },
                  { name: 'Express.js', color: 'from-gray-600/30 to-slate-600/30', border: 'border-gray-400/30', text: 'text-gray-300' },
                  { name: 'WordPress', color: 'from-blue-600/30 to-indigo-600/30', border: 'border-indigo-400/30', text: 'text-indigo-300' },
                  { name: 'JavaScript', color: 'from-yellow-600/30 to-amber-600/30', border: 'border-amber-400/30', text: 'text-amber-300' },
                  { name: 'TypeScript', color: 'from-blue-600/30 to-purple-600/30', border: 'border-purple-400/30', text: 'text-purple-300' }
                ].map((skill, index) => (
                  <div 
                    key={skill.name}
                    className={`bg-gradient-to-r ${skill.color} rounded-2xl p-6 text-center ${skill.text} font-semibold hover:scale-110 transition-all duration-300 transform border ${skill.border} hover:shadow-lg`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-lg">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-500 shadow-2xl text-center">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Collaborate?</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Let's create something extraordinary together! I'm passionate about turning innovative ideas into 
                  powerful digital solutions that make a real impact.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">What I Offer</h3>
                  <ul className="text-blue-100 space-y-2 text-left">
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>Full-stack web development</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Responsive design & UX</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>Custom solutions & integrations</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Ongoing support & maintenance</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">Why Choose Me</h3>
                  <ul className="text-blue-100 space-y-2 text-left">
                    <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>100% project delivery rate</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Modern tech stack expertise</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>Continuous learning mindset</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Dedicated & reliable</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 shadow-lg text-lg">
                  <Mail className="w-5 h-5 inline mr-2" />
                  Get In Touch
                </button>
                </Link>
                <Link to="/">
                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 text-lg">
                 
                  View Portfolio
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;