"use client";

import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "web-development"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const containerRef = useRef(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  // Scroll-based theme switching
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;
        
        if (isInView && !isDarkTheme) {
          setIsDarkTheme(true);
          document.body.classList.add('dark-theme');
        } else if (!isInView && isDarkTheme) {
          setIsDarkTheme(false);
          document.body.classList.remove('dark-theme');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('dark-theme');
    };
  }, [isDarkTheme]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        service: "web-development"
      });
    }, 3000);
  };

  return (
    <section 
      ref={containerRef}
      className={`min-h-screen py-20 relative overflow-hidden transition-all duration-1000 ${
        isDarkTheme 
          ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' 
          : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'
      }`}
    >
      {/* Background Pattern */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        isDarkTheme ? 'opacity-20' : 'opacity-5'
      }`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${isDarkTheme ? '#60a5fa' : '#3b82f6'} 1px, transparent 1px), radial-gradient(circle at 75% 75%, ${isDarkTheme ? '#34d399' : '#10b981'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 transition-all duration-500 ${
            isDarkTheme 
              ? 'bg-gradient-to-r from-blue-900/50 to-green-900/50 border border-blue-700/30' 
              : 'bg-gradient-to-r from-blue-100 to-green-100'
          }`}>
            <div className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-500 ${
              isDarkTheme ? 'bg-blue-400' : 'bg-blue-500'
            }`}></div>
            <span className={`text-sm font-medium transition-colors duration-500 ${
              isDarkTheme ? 'text-blue-200' : 'text-gray-700'
            }`}>Get In Touch</span>
          </div>
          
          <h2 className={`text-6xl font-bold mb-6 leading-tight transition-colors duration-500 ${
            isDarkTheme ? 'text-white' : 'text-gray-900'
          }`}>
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
            isDarkTheme ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to bring your vision to life? We'd love to hear about your project and discuss how we can help you achieve your goals.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Form */}
          <div className={`rounded-3xl shadow-2xl p-8 border transition-all duration-500 ${
            isDarkTheme 
              ? 'bg-gray-800 border-gray-700 shadow-gray-900/50' 
              : 'bg-white border-gray-100'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 transition-colors duration-500 ${
              isDarkTheme ? 'text-white' : 'text-gray-900'
            }`}>Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                    isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                      isDarkTheme 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600' 
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:bg-white'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                    isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                      isDarkTheme 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600' 
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:bg-white'
                    }`}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                    isDarkTheme 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600' 
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:bg-white'
                  }`}
                  placeholder="Your Company"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    isDarkTheme 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-gray-50 border-gray-200 text-gray-900'
                  }`}
                >
                  <option value="web-development">Web Development</option>
                  <option value="branding-design">Branding & Design</option>
                  <option value="digital-products">Digital Products</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                    isDarkTheme 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600' 
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:bg-white'
                  }`}
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                  submitSuccess 
                    ? 'bg-gradient-to-r from-green-500 to-green-600' 
                    : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : submitSuccess ? (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Message Sent!</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Right: Contact Information & Visual Elements */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`rounded-2xl p-6 shadow-lg border transition-all duration-500 hover:shadow-xl ${
                isDarkTheme 
                  ? 'bg-gray-800 border-gray-700 shadow-gray-900/50 hover:shadow-gray-900/70' 
                  : 'bg-white border-gray-100'
              }`}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className={`text-lg font-semibold mb-2 transition-colors duration-500 ${
                  isDarkTheme ? 'text-white' : 'text-gray-900'
                }`}>Email Us</h4>
                <p className={`transition-colors duration-500 ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                }`}>hello@sideswitch.com</p>
                <p className={`transition-colors duration-500 ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                }`}>projects@sideswitch.com</p>
              </div>

              <div className={`rounded-2xl p-6 shadow-lg border transition-all duration-500 hover:shadow-xl ${
                isDarkTheme 
                  ? 'bg-gray-800 border-gray-700 shadow-gray-900/50 hover:shadow-gray-900/70' 
                  : 'bg-white border-gray-100'
              }`}>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className={`text-lg font-semibold mb-2 transition-colors duration-500 ${
                  isDarkTheme ? 'text-white' : 'text-gray-900'
                }`}>Location</h4>
                <p className={`transition-colors duration-500 ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                }`}>London, UK</p>
                <p className={`transition-colors duration-500 ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                }`}>Remote Worldwide</p>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium opacity-90">Quick Response</span>
              </div>
              <h4 className="text-2xl font-bold mb-2">24-48 Hours</h4>
              <p className="opacity-90">We typically respond to all inquiries within 24-48 hours during business days.</p>
            </div>

            {/* Process Steps */}
            <div className={`rounded-2xl p-6 shadow-lg border transition-all duration-500 ${
              isDarkTheme 
                ? 'bg-gray-800 border-gray-700 shadow-gray-900/50' 
                : 'bg-white border-gray-100'
            }`}>
              <h4 className={`text-lg font-semibold mb-4 transition-colors duration-500 ${
                isDarkTheme ? 'text-white' : 'text-gray-900'
              }`}>Our Process</h4>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Discovery Call", desc: "We discuss your project and requirements" },
                  { step: "02", title: "Proposal", desc: "We create a detailed project proposal" },
                  { step: "03", title: "Collaboration", desc: "We work together to bring your vision to life" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h5 className={`font-medium transition-colors duration-500 ${
                        isDarkTheme ? 'text-white' : 'text-gray-900'
                      }`}>{item.title}</h5>
                      <p className={`text-sm transition-colors duration-500 ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                      }`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 