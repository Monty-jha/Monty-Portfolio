import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Laptop, Globe, Rocket, Users, CheckCircle, Zap, Shield, Clock, Smartphone } from 'lucide-react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: <Code className="w-8 h-8" />,
      title: "Custom Website Development",
      description: "Every business has a unique identity, and your website should reflect that. I specialize in crafting custom websites from scratch—fully responsive, visually appealing, and tailored to your brand's goals.",
      features: ["Responsive Design", "Custom UI/UX", "Brand-Focused", "Scalable Architecture"],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "Professional Portfolio Websites",
      description: "Create personalized portfolio websites that help you showcase your skills, work, and achievements in the most professional way possible with eye-catching design and smooth animations.",
      features: ["Personal Branding", "Smooth Animations", "Professional Design", "Mobile Optimized"],
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      icon: <Globe className="w-8 h-8" />,
      title: "WordPress Development",
      description: "Flexible and easy-to-manage WordPress solutions including blogs, eCommerce sites, business websites, and landing pages with custom themes and plugin integrations.",
      features: ["Custom Themes", "Plugin Integration", "Easy Management", "SEO Optimized"],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: 4,
      icon: <Rocket className="w-8 h-8" />,
      title: "React.js + Node.js Applications",
      description: "Full-stack web applications using React.js for frontend and Node.js with Express for backend. Scalable, secure, and high-performance solutions for any complexity.",
      features: ["Full-Stack Development", "REST APIs", "Database Integration", "Real-time Features"],
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  const whyChooseMe = [
    { icon: <Zap className="w-6 h-6" />, title: "Custom-tailored Solutions", desc: "Unique solutions designed specifically for your needs" },
    { icon: <Code className="w-6 h-6" />, title: "Clean & Scalable Code", desc: "Well-structured, maintainable, and future-proof code" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Fully Responsive Design", desc: "Perfect experience across all devices and screen sizes" },
    { icon: <Clock className="w-6 h-6" />, title: "On-Time Delivery", desc: "Committed to meeting deadlines without compromising quality" },
    { icon: <Shield className="w-6 h-6" />, title: "Secure & SEO-Optimized", desc: "Built with security best practices and search engine optimization" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Ongoing Support", desc: "Continuous maintenance and support for your projects" }
  ];

  const handleServiceHover = (id: number) => setActiveService(id);
  const handleServiceLeave = () => setActiveService(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At <span className="font-bold text-blue-400">Monty Jha Web Solutions</span>, I offer a wide range of web development services tailored to meet the unique needs of individuals, startups, and growing businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => handleServiceHover(service.id)}
              onMouseLeave={handleServiceLeave}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center space-x-2 transform transition-all duration-300 ${
                        activeService === service.id ? 'translate-x-2' : ''
                      }`}
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-y border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Complete Web Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple websites to complex applications, I provide end-to-end development solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Laptop className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Freelance Services</h3>
              <p className="text-gray-300">Complete project flexibility with commitment to timelines and quality delivery</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Simple to Complex</h3>
              <p className="text-gray-300">From basic informational websites to complex data-driven platforms with admin panels</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Technologies</h3>
              <p className="text-gray-300">Built with performance, SEO optimization, and user experience in mind</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Me Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose Me?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseMe.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 hover:transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-blue-400">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's turn your ideas into reality. Whether you're starting from scratch or upgrading your current website, I'm here to help you build something great.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started Today
            </button>
            </Link>
              <Link to="/">
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              View Portfolio
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;