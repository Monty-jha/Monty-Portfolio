import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Upload, ExternalLink, Github, Calendar, Tag, Award, Building, Users, Zap, Globe, ShoppingCart, Pill, Briefcase, User } from 'lucide-react';

const ProjectsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [projectList, setProjectList] = useState<ProjectType[]>([]);
  const videoRef = useRef(null);

  // Helper functions for Google Drive URLs
  const isGoogleDriveUrl = (url: string) => {
    return url && url.includes('drive.google.com');
  };

  const getGoogleDriveEmbedUrl = (url: string) => {
    if (!url || !url.includes('drive.google.com')) return url;
    
    let fileId = '';
    
    // Extract file ID from various Google Drive URL formats
    if (url.includes('/file/d/')) {
      fileId = url.split('/file/d/')[1].split('/')[0];
    } else if (url.includes('id=')) {
      fileId = url.split('id=')[1].split('&')[0];
    }
    
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
  };

  const getGoogleDriveThumbnail = (url: string) => {
    if (!url || !url.includes('drive.google.com')) return null;
    
    let fileId = '';
    
    if (url.includes('/file/d/')) {
      fileId = url.split('/file/d/')[1].split('/')[0];
    } else if (url.includes('id=')) {
      fileId = url.split('id=')[1].split('&')[0];
    }
    
    return fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w800-h400` : null;
  };

  const projects = [
    {
      id: 1,
      title: "Metaarth - Corporate Hub",
      description: "Developed the flagship corporate website for Metaarth, the parent company overseeing multiple business verticals. Features a sophisticated design with interactive elements, comprehensive company information, and seamless navigation across all subsidiary companies.",
      detailedDescription: "This enterprise-level website serves as the central hub for Metaarth's diverse business portfolio. Built with modern web technologies, it includes dynamic content management, responsive design, and advanced SEO optimization to enhance corporate presence and stakeholder engagement.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB"],
      category: "Corporate Website",
      date: "2024",
      githubUrl: "https://github.com/Monty-jha/METAARTH-FINSERVE.git",
      liveUrl: "#",
      // Replace this with your Google Drive link
      videoUrl: "https://drive.google.com/file/d/1YJOt6FP3stefpMb_sixyXbHWH4lc27LM/view?usp=sharing",
      posterUrl: "/src/assets/Metaarthss.png",
      icon: Building,
      color: "from-blue-600 to-indigo-600",
      achievements: ["100% Responsive Design", "Lightning Fast Performance", "SEO Optimized"],
      clientImpact: "Enhanced corporate visibility and streamlined communication across all business units"
    },
    {
      id: 2,
      title: "Metaarth Pharma - Healthcare Solutions",
      description: "Engineered a comprehensive pharmaceutical platform for Metaarth Pharma, featuring product catalogs, medical information systems, and healthcare professional resources. Includes compliance features and secure data handling for pharmaceutical industry standards.",
      detailedDescription: "A specialized healthcare platform designed to serve pharmaceutical needs with regulatory compliance, secure patient data management, and comprehensive drug information systems. The platform includes inventory management, prescription tracking, and healthcare provider collaboration tools.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Redux Toolkit", "Material-UI"],
      category: "Healthcare Platform",
      date: "2024",
      githubUrl: "https://github.com/Monty-jha/Metaarth-Pharma.git",
      liveUrl: "#",
      // Your existing Google Drive link
      videoUrl: "https://drive.google.com/file/d/1NaN7VbqgnN9HYalBZ0amb5gKPGXeg7sM/view?usp=sharing",
      posterUrl: "/src/assets/Metaarth-Pharmass.png",
      icon: Pill,
      color: "from-green-600 to-emerald-600",
      achievements: ["HIPAA Compliant", "99.9% Uptime", "Secure Data Encryption"],
      clientImpact: "Streamlined pharmaceutical operations and improved healthcare service delivery"
    },
    {
      id: 3,
      title: "Microdigitall - IT Services Platform",
      description: "Created a comprehensive IT services website for Microdigitall, showcasing the company's full range of digital solutions. Features service portfolios, client testimonials, project showcases, and an integrated contact system for lead generation.",
      detailedDescription: "A cutting-edge IT services platform that demonstrates Microdigitall's capabilities in web development, mobile apps, digital marketing, and enterprise solutions. The website includes dynamic service pages, case studies, team profiles, and advanced lead capture mechanisms.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Vercel", "Stripe API"],
      category: "IT Services",
      date: "2024",
      githubUrl: "https://github.com/Monty-jha/Microdigitall.com.git",
      liveUrl: "#",
      // Replace this with your Google Drive link
      videoUrl: "https://drive.google.com/file/d/1XDNlu-zKjXfovDFOBJw-07QCFdqGmg1a/view?usp=sharing",
      posterUrl: "/Src/assets/Microdigitallss.png",
      icon: Zap,
      color: "from-purple-600 to-pink-600",
      achievements: ["45% Increase in Leads", "Mobile-First Design", "Advanced Analytics"],
      clientImpact: "Significantly boosted online presence and client acquisition for IT services"
    },
    {
      id: 4,
      title: "Professional Portfolio - Personal Branding",
      description: "Designed and developed a sophisticated personal portfolio website showcasing professional skills, projects, and achievements. Features interactive animations, project galleries, skill demonstrations, and comprehensive contact integration.",
      detailedDescription: "A modern, interactive portfolio that serves as a digital resume and project showcase. Built with attention to user experience, it includes smooth animations, project case studies, downloadable resume, and integrated blog for sharing insights and experiences.",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS", "Vite", "EmailJS"],
      category: "Portfolio Website",
      date: "2024",
      githubUrl: "https://github.com/Monty-jha/Microdigitall.git",
      liveUrl: "#",
      // Replace this with your Google Drive link
      videoUrl: "https://drive.google.com/file/d/1avaUuVlAhi7ruQd9MZqEQVHiJdpxYjOx/view?usp=sharing",
      posterUrl: "/Src/assets/Portss.png",
      icon: User,
      color: "from-orange-600 to-red-600",
      achievements: ["Interactive 3D Elements", "Optimized Performance", "Professional Design"],
      clientImpact: "Enhanced personal branding and professional online presence"
    }
  ];

  useEffect(() => {
    setProjectList(projects);
  }, []);

  const categories = ['All', 'Corporate Website', 'Healthcare Platform', 'IT Services', 'Portfolio Website'];

  // Function to update video path for a specific project
  const updateVideoPath = (projectId, newVideoPath) => {
    setProjectList(prev => 
      prev.map(project => 
        project.id === projectId 
          ? { ...project, videoUrl: newVideoPath }
          : project
      )
    );
  };

  const handleVideoUpload = (projectId, event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      const videoUrl = URL.createObjectURL(file);
      updateVideoPath(projectId, videoUrl);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (projectId, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('video/')) {
        const videoUrl = URL.createObjectURL(file);
        updateVideoPath(projectId, videoUrl);
      }
    }
  };

  const handleVideoPlay = (videoUrl) => {
    const embedUrl = isGoogleDriveUrl(videoUrl) ? getGoogleDriveEmbedUrl(videoUrl) : videoUrl;
    setSelectedVideo(embedUrl);
    setIsPlaying(true);
  };

  const handleVideoError = (e) => {
    console.error('Video failed to load:', e.target.src);
  };

  const filteredProjects = activeFilter === 'All' 
    ? projectList 
    : projectList.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm border border-purple-500/20 animate-fade-in">
                Developed at Microdigitall
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">
              Monty Jha
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-300 animate-fade-in-up animation-delay-200">
              Professional Projects Portfolio
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Showcasing innovative web solutions and cutting-edge applications crafted during my tenure at 
              <span className="text-purple-400 font-semibold"> Microdigitall</span>. Each project represents a unique challenge solved with modern technology and creative problem-solving.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center animate-fade-in-up animation-delay-600">
                <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-800">
                <div className="text-3xl font-bold text-pink-400 mb-2">2025</div>
                <div className="text-gray-400 text-sm">Development Year</div>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-900">
                <div className="text-3xl font-bold text-indigo-400 mb-2">∞</div>
                <div className="text-gray-400 text-sm">Innovation Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-500 transform hover:scale-110 animate-fade-in-up ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/50 scale-105'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white backdrop-blur-sm border border-gray-700/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            const embedUrl = isGoogleDriveUrl(project.videoUrl) ? getGoogleDriveEmbedUrl(project.videoUrl) : project.videoUrl;
            const thumbnailUrl = isGoogleDriveUrl(project.videoUrl) ? getGoogleDriveThumbnail(project.videoUrl) : project.posterUrl;
            
            return (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] animate-fade-in-up backdrop-blur-sm border border-gray-700/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Icon & Category */}
                <div className="absolute top-6 left-6 z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} p-3 shadow-lg`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                </div>

                <div className="absolute top-6 right-6 z-10">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300 font-medium">{project.category}</span>
                  </div>
                </div>

                {/* Video Section */}
                <div 
                  className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(project.id, e)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
                  
                  {project.videoUrl ? (
                    <div className="relative w-full h-full">
                      {isGoogleDriveUrl(project.videoUrl) ? (
                        // Google Drive Preview with Play Button Overlay
                        <div className="relative w-full h-full">
                          {thumbnailUrl ? (
                            <img
                              src={thumbnailUrl}
                              alt={`${project.title} Preview`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback to default image if thumbnail fails
                                e.target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop";
                              }}
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                              <div className={`w-24 h-24 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center`}>
                                <Play className="w-12 h-12 text-white ml-1" />
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <button
                              onClick={() => handleVideoPlay(project.videoUrl)}
                              className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 hover:shadow-purple-500/50"
                            >
                              <Play className="w-10 h-10 text-white ml-1" />
                            </button>
                          </div>
                          {/* Google Drive Badge */}
                          <div className="absolute bottom-4 left-4 bg-blue-600/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium">
                            📁 Google Drive
                          </div>
                        </div>
                      ) : (
                        // Regular video element for local/direct URLs
                        <div className="relative w-full h-full">
                          <video
                            className="w-full h-full object-cover"
                            poster={project.posterUrl || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"}
                            onError={handleVideoError}
                            preload="metadata"
                          >
                            <source src={project.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <button
                            onClick={() => handleVideoPlay(project.videoUrl)}
                            className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-all duration-300 backdrop-blur-sm group"
                          >
                            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 group-hover:shadow-purple-500/50">
                              <Play className="w-10 h-10 text-white ml-1" />
                            </div>
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center p-8">
                      <div className="mb-6">
                        <div className={`w-32 h-32 mx-auto bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center mb-6 animate-pulse shadow-2xl`}>
                          <Play className="w-16 h-16 text-white ml-2" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">Demo Video Available</h3>
                      <p className="text-gray-400 mb-4">Drag & drop video here or click to upload</p>
                      <label className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-3 transform hover:scale-105 shadow-lg">
                        <Upload className="w-5 h-5" />
                        Upload New Video
                        <input
                          type="file"
                          accept="video/*"
                          onChange={(e) => handleVideoUpload(project.id, e)}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-purple-400">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">{project.date}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full px-4 py-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-yellow-400 font-medium">Professional</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Client Impact */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/20">
                    <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Client Impact
                    </h4>
                    <p className="text-gray-300 text-sm">{project.clientImpact}</p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="px-3 py-1 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/20"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-4 py-2 bg-gradient-to-r ${project.color}/20 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 border border-white/10`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800/50 hover:bg-gray-700/50 px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 backdrop-blur-sm border border-gray-600/50"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => {
                setSelectedVideo(null);
                setIsPlaying(false);
              }}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 text-3xl font-bold w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              ✕
            </button>
            
            {isGoogleDriveUrl(selectedVideo) ? (
              <iframe
                src={selectedVideo}
                className="w-full h-[80vh] rounded-2xl shadow-2xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Project Demo Video"
              />
            ) : (
              <video
                ref={videoRef}
                className="w-full rounded-2xl shadow-2xl"
                controls
                autoPlay
                src={selectedVideo}
                onError={handleVideoError}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <div className="relative z-10 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border-t border-purple-500/20">
        <div className="container mx-auto px-6 py-16 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Next Project?</h3>
          <p className="text-gray-300 mb-8 text-lg">Let's collaborate and create something amazing together.</p>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out both;
        }
        
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default ProjectsPage;