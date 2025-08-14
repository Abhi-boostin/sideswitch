"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatedBeam } from "@/src/components/magicui/animated-beam";

const ServiceBlock = ({ number, title, description, services, backgroundText, backgroundColor = "bg-gray-900", imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const blockRef = useRef(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blockRef.current) {
        const rect = blockRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const block = blockRef.current;
    if (block) {
      block.addEventListener('mousemove', handleMouseMove);
      return () => block.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div 
      ref={blockRef}
      className={`relative overflow-hidden transition-all duration-700 ease-out ${
        isHovered ? 'h-96' : 'h-32'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern with AnimatedBeam */}
      <div className={`absolute inset-0 ${backgroundColor} opacity-5`}>
        <div className="absolute inset-0 grid grid-cols-1 gap-2 p-8">
          {Array.from({ length: 8 }, (_, i) => (
            <div 
              key={i}
              className={`text-4xl font-bold text-white/30 transition-all duration-500 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                transform: `translateY(${isHovered ? '0' : '20px'})`,
                transitionDelay: `${i * 100}ms`
              }}
            >
              {backgroundText}
            </div>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Top Section: Points and Image */}
        <div className="flex items-start justify-between">
          {/* Left: Points List with AnimatedBeam */}
          <div className="flex-1 max-w-md">
            <div ref={fromRef} className="relative">
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li 
                    key={index}
                    className="flex items-center space-x-3 transition-all duration-300 group"
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-sm group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-800 text-sm group-hover:text-black transition-colors duration-200">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Image with enhanced styling */}
          <div className={`ml-8 transition-all duration-700 ease-out ${
            isHovered ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-8'
          }`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src={imageUrl} 
                alt={`${title} illustration`}
                className="w-48 h-36 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
              />
              {/* Enhanced Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
              <div className="absolute top-2 left-2 text-white text-xs font-mono bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                {title === "Web Development" ? "index.jsx" : title === "Branding & Design" ? "brand.ai" : "app.tsx"}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Heading and Cursor */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-sm font-medium text-gray-500 mb-2 block tracking-wider">
              {number.toString().padStart(2, '0')}
            </span>
            <h3 className="text-4xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300">
              {title}
            </h3>
          </div>
          
          {/* Enhanced Cursor */}
          {isHovered && (
            <div 
              className="w-8 h-8 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              style={{
                left: mousePosition.x - 16,
                top: mousePosition.y - 16,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          )}
        </div>

        {/* Description with enhanced animation */}
        <div className={`transition-all duration-700 ease-out ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-gray-700 max-w-md leading-relaxed">
            {description}
          </p>
        </div>

        {/* AnimatedBeam connection */}
        {isHovered && (
          <AnimatedBeam 
            containerRef={blockRef} 
            fromRef={fromRef} 
            toRef={toRef} 
            curvature={60}
            pathColor="#10b981"
            gradientStartColor="#10b981"
            gradientStopColor="#3b82f6"
          />
        )}
      </div>

      {/* Enhanced Divider Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </div>
  );
};

export default ServiceBlock;
