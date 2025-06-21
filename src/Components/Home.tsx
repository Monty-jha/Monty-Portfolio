import React, { useState, useEffect, MouseEvent } from "react";
import { Link } from "react-router-dom";
import MontyImage from "../assets/Montyjha.jpeg";
import {
  Code,
  Palette,
  Zap,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Instagram,
} from "lucide-react";

const PortfolioHomepage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const loadingTimer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingTimer);
          setTimeout(() => {
            setIsLoading(false);
            setIsVisible(true);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(loadingTimer);
    };
  }, []);

  const skills = [
    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Tailwindcss",
    "PostgreSQL",
  ];

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = (item: { name: string; path: string }) => {
    const element = document.getElementById(item.path.substring(1));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.href = item.path;
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50 animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  height: `${20 + Math.random() * 40}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random()}s`,
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-8">
            <div className="text-center">
              <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-pulse">
                MJ
              </h1>
              <p className="text-xl text-gray-300 mt-4 animate-pulse delay-500">
                Monty Jha
              </p>
            </div>

            <div className="relative w-32 h-32">
              <svg
                className="w-32 h-32 transform -rotate-90"
                viewBox="0 0 120 120"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 50}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 50 * (1 - loadingProgress / 100)
                  }`}
                  className="transition-all duration-300 ease-out"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {Math.round(loadingProgress)}%
                </span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-lg text-gray-300 animate-pulse">
                Initializing Portfolio...
              </p>
              <div className="flex space-x-1 justify-center">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex space-x-8 opacity-50">
              <div className="p-3 border border-blue-400/30 rounded-lg animate-pulse">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <div className="p-3 border border-cyan-400/30 rounded-lg animate-pulse delay-300">
                <Palette className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="p-3 border border-purple-400/30 rounded-lg animate-pulse delay-700">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Portfolio Content */}
      <div
        className={`min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden relative transition-all duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transform -skew-y-12 animate-pulse"></div>

          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Mouse Follower Effect - Hidden on mobile */}
        <div
          className="fixed w-6 h-6 bg-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out hidden md:block"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: "scale(0.8)",
          }}
        ></div>

        {/* Navigation */}
        <nav className="relative z-20 flex justify-between items-center p-4 md:p-6 backdrop-blur-sm">
          <div
            className={`text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            Monty Jha
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex space-x-4 transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-400/20 hover:border-blue-400/80 text-white hover:text-cyan-300 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/40 backdrop-blur-sm overflow-hidden active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-cyan-400/0 to-blue-600/0 group-hover:from-blue-600/20 group-hover:via-cyan-400/20 group-hover:to-blue-600/20 transition-all duration-700 animate-pulse group-hover:animate-none"></div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out"></div>
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400 to-cyan-400 blur-sm -z-10 transition-opacity duration-500 animate-pulse"></div>
                <span className="relative z-10 font-medium tracking-wide group-hover:tracking-wider transition-all duration-300">
                  {item.name}
                </span>
                <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 hover:border-blue-400/80 transition-all duration-300 backdrop-blur-sm ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-blue-300" />
            ) : (
              <Menu className="w-6 h-6 text-blue-300" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-30 bg-gray-900/95 backdrop-blur-lg md:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/40 hover:to-cyan-500/40 border border-blue-400/30 hover:border-blue-400/80 text-white hover:text-cyan-300 transition-all duration-500 transform hover:scale-110 backdrop-blur-sm text-lg font-medium w-64 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-cyan-400/0 to-blue-600/0 group-hover:from-blue-600/20 group-hover:via-cyan-400/20 group-hover:to-blue-600/20 transition-all duration-700"></div>
                  <span className="relative z-10">{item.name}</span>
                </button>
              ))}

              {/* Close button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 p-4 rounded-full bg-red-500/20 border border-red-400/30 hover:border-red-400/80 transition-all duration-300"
              >
                <X className="w-6 h-6 text-red-300" />
              </button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 md:px-6 lg:px-20 py-8">
          {/* Profile Image Section */}
          <div
            className={`w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0 order-1 lg:order-2 transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-20 opacity-0"
            }`}
          >
            <div className="lg:-translate-y-32">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-400/20 to-cyan-400/20 backdrop-blur-sm border border-blue-400/30">
                  <img
                    src={MontyImage}
                    alt="Monty Jha - Web Developer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>

                  <div className="absolute -top-2 -right-2 p-2 md:p-3 bg-blue-500/30 rounded-lg backdrop-blur-sm animate-pulse border border-blue-400/50">
                    <Code className="w-4 h-4 md:w-5 md:h-5 text-blue-300" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 p-2 md:p-3 bg-cyan-500/30 rounded-lg backdrop-blur-sm animate-pulse delay-1000 border border-cyan-400/50">
                    <Palette className="w-4 h-4 md:w-5 md:h-5 text-cyan-300" />
                  </div>
                  <div className="absolute top-1/4 -left-3 p-2 md:p-3 bg-purple-500/30 rounded-lg backdrop-blur-sm animate-pulse delay-500 border border-purple-400/50">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-purple-300" />
                  </div>

                  <div className="absolute top-0 left-1/2 w-px h-6 md:h-8 bg-gradient-to-b from-blue-400 to-transparent opacity-60"></div>
                  <div className="absolute right-0 top-1/2 h-px w-6 md:w-8 bg-gradient-to-r from-blue-400 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-1/4 w-px h-4 md:h-6 bg-gradient-to-t from-cyan-400 to-transparent opacity-60"></div>
                </div>

                <div className="absolute -top-4 left-1/4 px-2 py-1 bg-black/60 rounded border border-blue-400/50 backdrop-blur-sm text-xs text-blue-300 animate-pulse">
                  React Expert
                </div>
                <div className="absolute -right-8 top-1/3 px-2 py-1 bg-black/60 rounded border border-cyan-400/50 backdrop-blur-sm text-xs text-cyan-300 animate-pulse delay-700">
                  1+ Years
                </div>
                <div className="absolute -bottom-6 right-1/4 px-2 py-1 bg-black/60 rounded border border-purple-400/50 backdrop-blur-sm text-xs text-purple-300 animate-pulse delay-1400">
                  Full Stack
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-pulse">
                  Creative
                </span>
                <span className="block text-white">Developer</span>
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Crafting digital experiences through innovative web development
                and stunning user interfaces.
              </p>
            </div>

            {/* Skills Tags */}
            <div
              className={`flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start transition-all duration-1000 delay-900 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 md:px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-1100 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <button className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
               <Link to="/products">
                <span className="flex items-center justify-center gap-2">
                  View My Work
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                </Link>
              </button>
              <a
                href="https://drive.google.com/file/d/1abWjO1l9gsRcOj6jY_mCVB3znR5h8pia/view?usp=drive_link"
                download="Monty_Jha_Resume.pdf"
                className="inline-block"
              >
                <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Download CV
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div
              className={`flex gap-4 md:gap-6 justify-center lg:justify-start transition-all duration-1000 delay-1300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              {[
                { icon: Github, href: "https://github.com/Monty-jha" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/monty-jha-1b83712bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bq40Cii6cTJaI0fjU9k3Jbg%3D%3D",
                },
                { icon: Mail, href: "mailto:jhamonty302@gmail.com" },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/jhamonty77?igsh=bDRkemxzNml0MDEy",
                },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-3 border border-blue-400/30 rounded-full hover:bg-orange-400/20 hover:border-orange-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-500 rounded-full animate-ping delay-1500"></div>
        </div>

        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse delay-1000"></div>

        <div className="absolute top-1/4 right-10 w-px h-16 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-px h-20 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent animate-pulse delay-1000"></div>

        <div className="absolute top-10 right-10 w-4 h-4 border-t-2 border-r-2 border-blue-400/50 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-6 w-3 h-3 border border-purple-400/50 rotate-45 animate-pulse delay-1000"></div>
      </div>
    </>
  );
};

export default PortfolioHomepage;
