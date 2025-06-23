import React, { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Contact information for Monty Jha
  const contactInfo = {
    location: "Available Worldwide (Remote)",
    phone: "+91 63964319953",
    email: "jhamonty302@gmail.com",
    availability: "Available for new projects",
    linkedin:"https://www.linkedin.com/in/monty-jha-1b83712bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bq40Cii6cTJaI0fjU9k3Jbg%3D%3D",
    github: "https://github.com/Monty-jha",
  };

  // Portfolio showcase images
  const portfolioImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
  ];

  const portfolioTitles = [
    "E-commerce Solutions",
    "Business Websites",
    "Web Applications",
    "Mobile-First Designs",
  ];

  const portfolioDescriptions = [
    "Custom e-commerce platforms with secure payment integration and inventory management.",
    "Professional business websites that convert visitors into customers.",
    "Full-stack web applications with modern frameworks and databases.",
    "Responsive designs that look perfect on every device and screen size.",
  ];

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Option 1: Replace your handleSubmit function with this
  const handleWhatsAppRedirect = () => {
    // Replace with your actual WhatsApp number (include country code, no + sign)
    const phoneNumber = "916396431953"; // Example: "919876543210" for India

    // Optional: Pre-filled message
    const message = "Hi! I'm interested in launching my project with you.";

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  // Use dynamic backend URL based on environment
  const BACKEND_URL = import.meta.env.DEV 
    ? 'http://localhost:5001/api/contact' 
    : '/api/contact';

  // Handle form submission
  const handleSubmit = async () => {
    if (
      formData.name &&
      formData.email &&
      formData.projectType &&
      formData.budget &&
      formData.message
    ) {
      try {
        console.log('Sending request to:', BACKEND_URL);
        const response = await fetch(BACKEND_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          setFormSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            projectType: "",
            budget: "",
            message: "",
          });
        } else {
          console.error('Server error:', result);
          alert(`Failed to send message: ${result.error || 'Unknown error'}`);
        }
      } catch (error) {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please check your internet connection and try again.");
      }
    } else {
      alert("Please fill in all required fields");
    }
  };

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
                Let's{" "}
                <span className="text-blue-400 animate-pulse">Connect</span>
              </div>
              <div className="text-xl md:text-2xl text-gray-300">
                Ready to bring your web project to life?
              </div>
            </div>
          </div>

          {/* Animated geometric shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-400 rotate-45 animate-spin opacity-30" />
            <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-blue-300 animate-pulse opacity-40" />
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-500 rounded-full animate-bounce opacity-20" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl border border-blue-900/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
              <h2 className="text-4xl font-bold mb-8 text-blue-400">
                <span className="animate-pulse">👋</span> Hi, I'm Monty Jha
              </h2>

              <div className="mb-8 space-y-6">
                <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300">{contactInfo.location}</p>
                    <p className="text-sm text-blue-300">
                      Remote collaboration worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300">{contactInfo.phone}</p>
                    <p className="text-sm text-blue-300">Available for calls</p>
                  </div>
                </div>

                <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300">{contactInfo.email}</p>
                    <p className="text-sm text-blue-300">
                      Quick response guaranteed
                    </p>
                  </div>
                </div>

                <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-gray-300">{contactInfo.availability}</p>
                    <p className="text-sm text-green-300">
                      Let's build something amazing!
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8">
                <div className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/monty-jha-1b83712bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bq40Cii6cTJaI0fjU9k3Jbg%3D%3D"
                    aria-label="Visit Monty's LinkedIn profile"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <div className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer">
                  <a
                    href="https://github.com/Monty-jha"
                    aria-label="Visit Monty's GitHub profile"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl border border-blue-900/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
              <h2 className="text-4xl font-bold mb-8 text-blue-400">
                Start Your Project
              </h2>

              {formSubmitted ? (
                <div className="bg-gradient-to-r from-blue-900 to-green-900 text-white p-8 rounded-xl text-center transform scale-100 animate-bounce">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-lg">
                    Thanks for reaching out! I'll get back to you within 24
                    hours with ideas for your project.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white backdrop-blur-sm"
                      required
                      placeholder="Enter your name"
                      title="Your name"
                      aria-label="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white backdrop-blur-sm"
                      required
                      placeholder="Enter your email"
                      title="Your email address"
                      aria-label="Your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white backdrop-blur-sm"
                      placeholder="Enter your phone number"
                      title="Your phone number"
                      aria-label="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white backdrop-blur-sm"
                      required
                      title="Select project type"
                      aria-label="Select project type"
                    >
                      <option value="">Select Project Type</option>
                      <option value="website">Website Development</option>
                      <option value="webapp">Web Application</option>
                      <option value="ecommerce">E-commerce Solution</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Budget Range *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white backdrop-blur-sm"
                      required
                      title="Select budget range"
                      aria-label="Select budget range"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="10000-25000">₹10,000 - ₹25,000</option>
                      <option value="25000-50000">₹25,000 - ₹50,000</option>
                      <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                      <option value="100000-150000">₹1,00,000 - ₹1,50,000</option>
                      <option value="150000-200000">₹1,50,000 - ₹2,00,000</option>
                      <option value="custom">Custom Budget</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white backdrop-blur-sm resize-none"
                      required
                      placeholder="Tell us about your project requirements..."
                      title="Project message"
                      aria-label="Project message"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                      aria-label="Submit contact form"
                      title="Submit contact form"
                    >
                      🚀 Launch My Project
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Portfolio Showcase Slider */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
              Recent Work
            </h2>

            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border border-blue-900/50 bg-gradient-to-br from-gray-900 to-black">
              <div className="relative h-full w-full">
                {portfolioImages.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={img}
                      alt={portfolioTitles[index]}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {portfolioTitles[index]}
                      </h3>
                      <p className="text-gray-200 mb-4 text-lg">
                        {portfolioDescriptions[index]}
                      </p>
                      <div className="flex space-x-2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                          React
                        </span>
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                          Node.js
                        </span>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                          MongoDB
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Controls */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
                {portfolioImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                      index === currentSlide
                        ? "bg-blue-400 w-8 shadow-lg shadow-blue-400/50"
                        : "bg-gray-400 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-3xl backdrop-blur-sm border border-blue-500/20">
            <div className="text-6xl mb-6 animate-bounce">💻</div>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-10 max-w-4xl mx-auto text-gray-300 leading-relaxed">
              I specialize in creating high-performance websites and web
              applications that not only look stunning but also drive real
              business results. From concept to launch, I'll be your trusted
              development partner.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30">
                React & Next.js
              </span>
              <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full border border-green-500/30">
                Node.js & Express
              </span>
              <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30">
                MongoDB & PostgreSQL
              </span>
              <span className="bg-yellow-600/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30">
                Full-Stack Development
              </span>
            </div>

            <button
              onClick={handleWhatsAppRedirect}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl font-bold py-5 px-10 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-blue-500/25"
              aria-label="Contact via WhatsApp"
              title="Contact via WhatsApp"
            >
              💬 Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
