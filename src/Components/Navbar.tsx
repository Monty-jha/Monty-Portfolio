import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide navbar on mobile for non-home pages
  useEffect(() => {
    if (isMobile && location.pathname !== '/') {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [isMobile, location.pathname]);

  if (!isVisible) return null;

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-blue-500/20 shadow-xl shadow-blue-500/10' 
          : 'bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm'
      }`}
      style={{
        background: scrolled 
          ? 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(15,23,42,0.95) 50%, rgba(0,0,0,0.95) 100%)'
          : 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(15,23,42,0.8) 50%, rgba(0,0,0,0.8) 100%)'
      }}
    >
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="group relative text-2xl md:text-3xl font-bold transition-all duration-300 hover:scale-105"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Monty Jha
              </span>
              {/* Hover glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 group overflow-hidden ${
                  isActive(item.path)
                    ? 'text-blue-300 bg-blue-500/20 border border-blue-500/30'
                    : 'text-gray-300 hover:text-blue-300'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Text content */}
                <span className="relative z-10">{item.name}</span>
                
                {/* Underline animation */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform transition-transform duration-300 ${
                  isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></div>
                
                {/* Hover border glow */}
                <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/50 rounded-lg transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-3 text-gray-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg transition-all duration-300 group overflow-hidden"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              aria-label="Toggle menu"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
              
              <div className="relative z-10 transition-transform duration-300">
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 transform rotate-0 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 transform rotate-0 transition-transform duration-300" />
                )}
              </div>
              
              {/* Pulsing border */}
              <div className="absolute inset-0 border border-blue-500/30 rounded-lg animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with enhanced animations */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="absolute inset-x-0 bg-gradient-to-b from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl border-t border-blue-500/20">
          {/* Mobile menu glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
          
          <div className="relative px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-6 py-4 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-2 group relative overflow-hidden ${
                  isActive(item.path)
                    ? 'text-blue-300 bg-blue-500/20 border border-blue-500/30'
                    : 'text-gray-300 hover:text-blue-300 hover:bg-blue-500/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isMobileMenuOpen ? 'slideInRight 0.5s ease-out forwards' : 'none'
                }}
              >
                {/* Background gradient animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                
                {/* Content */}
                <span className="relative z-10 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {item.name}
                </span>
                
                {/* Border animation */}
                <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/30 rounded-xl transition-all duration-300"></div>
              </Link>
            ))}
          </div>
          
          {/* Bottom border gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .bg-size-200 {
          background-size: 200% auto;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;