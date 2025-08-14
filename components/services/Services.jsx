import React from "react";
import ServiceBlock from "./serviceblock";

export default function Services() {
  const webDevelopmentServices = [
    "Custom Website Design",
    "WordPress & Shopify Development", 
    "CMS Integration",
    "Performance & SEO Optimization"
  ];

  const brandingServices = [
    "Brand Identity Design",
    "Logo & Visual Assets",
    "Marketing Materials",
    "Brand Guidelines"
  ];

  const digitalProductsServices = [
    "Mobile App Development",
    "SaaS Platform Design",
    "User Experience Design",
    "Product Strategy"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #000 1px, transparent 1px), radial-gradient(circle at 75% 75%, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">What We Do</span>
          </div>
          
          <h2 className="text-6xl font-bold text-black mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in creating digital experiences that drive results and elevate your brand. 
            From concept to execution, we bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-0">
          <ServiceBlock
            number={1}
            title="Web Development"
            description="Crafting fast, responsive, and scalable websites that align with your brand and business goals. We use cutting-edge technologies to ensure your site performs flawlessly across all devices."
            services={webDevelopmentServices}
            backgroundText="WEB DEVELOPMENT"
            backgroundColor="bg-gradient-to-br from-gray-900 to-gray-800"
            imageUrl="https://picsum.photos/400/300?random=1"
          />
          
          <ServiceBlock
            number={2}
            title="Branding & Design"
            description="Building memorable brand identities that connect with your audience and stand out in the market. We create cohesive visual systems that tell your story and drive engagement."
            services={brandingServices}
            backgroundText="BRANDING DESIGN"
            backgroundColor="bg-gradient-to-br from-blue-900 to-blue-800"
            imageUrl="https://picsum.photos/400/300?random=2"
          />

          <ServiceBlock
            number={3}
            title="Digital Products"
            description="Creating innovative digital products and platforms that solve real user problems and drive business growth. We focus on user-centered design and scalable architecture."
            services={digitalProductsServices}
            backgroundText="DIGITAL PRODUCTS"
            backgroundColor="bg-gradient-to-br from-green-900 to-green-800"
            imageUrl="https://picsum.photos/400/300?random=3"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl shadow-xl px-8 py-6 border border-gray-100">
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-medium text-gray-800">
              Ready to start your project?
            </span>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 