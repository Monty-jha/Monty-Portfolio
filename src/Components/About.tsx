import React, { useState, useEffect } from "react";

const AboutPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Skills data
  const skills = [
    { name: "React", level: 90, color: "from-blue-500 to-blue-600" },
    { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
    { name: "Node.js", level: 88, color: "from-green-500 to-green-600" },
    { name: "Express.js", level: 85, color: "from-gray-500 to-gray-600" },
    { name: "MongoDB", level: 80, color: "from-green-600 to-green-700" },
    { name: "PostgreSQL", level: 75, color: "from-blue-700 to-blue-800" },
    { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-cyan-600" },
    { name: "Git & GitHub", level: 85, color: "from-orange-500 to-orange-600" },
  ];

  // Experience data
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Building modern web applications with React, Node.js, and various databases. Specializing in responsive design and user experience.",
      technologies: ["React", "Node.js", "MongoDB", "TypeScript"]
    },
    {
      title: "Frontend Developer",
      company: "Personal Projects",
      period: "2022 - 2023",
      description: "Developed multiple portfolio websites and web applications focusing on modern UI/UX design principles.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    }
  ];

  // Floating particles animation
  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <FloatingParticles />

      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-800/10 animate-pulse" />

      {/* Interactive cursor glow */}
      <div
        className="fixed w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="relative h-80 w-full overflow-hidden bg-gradient-to-r from-blue-900 to-black">
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-white mb-4 animate-bounce">
                About <span className="text-blue-400 animate-pulse">Me</span>
              </div>
              <div className="text-xl md:text-2xl text-gray-300">
                Passionate Full Stack Developer
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* About Me Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl border border-blue-900/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
              <h2 className="text-4xl font-bold mb-8 text-blue-400">
                <span className="animate-pulse">👨‍💻</span> Who I Am
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Hi! I'm Monty Jha, a passionate Full Stack Developer with a love for creating 
                  beautiful, functional, and user-friendly web applications. I specialize in 
                  modern web technologies and always strive to write clean, maintainable code.
                </p>
                <p>
                  With expertise in React, TypeScript, Node.js, and various databases, I bring 
                  ideas to life through innovative solutions. I believe in continuous learning 
                  and staying updated with the latest industry trends.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl border border-blue-900/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
              <h2 className="text-4xl font-bold mb-8 text-blue-400">
                <span className="animate-pulse">🎯</span> My Mission
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  My mission is to create exceptional digital experiences that not only meet 
                  but exceed client expectations. I focus on delivering high-quality, scalable 
                  solutions that drive real business value.
                </p>
                <p>
                  I believe in the power of collaboration and always work closely with clients 
                  to understand their unique needs and vision. Every project is an opportunity 
                  to innovate and push the boundaries of what's possible.
                </p>
                <p>
                  Whether it's a simple website or a complex web application, I approach each 
                  project with the same level of dedication and attention to detail.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
              <span className="animate-pulse">🛠️</span> Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow-xl border border-blue-900/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-500"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                    <span className="text-blue-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
              <span className="animate-pulse">💼</span> Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl border border-blue-900/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-3xl backdrop-blur-sm border border-blue-500/20">
            <div className="text-6xl mb-6 animate-bounce">🚀</div>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-10 max-w-4xl mx-auto text-gray-300 leading-relaxed">
              I'm always excited to take on new challenges and bring innovative ideas to life. 
              Let's discuss how we can create something amazing together.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl font-bold py-5 px-10 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-blue-500/25 inline-block"
            >
              Let's Start a Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;