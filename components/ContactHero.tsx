"use client";

import React from "react";

const ContactHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 overflow-hidden">
      {/* Slanted Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/background-pattern.png')] bg-cover opacity-30"></div>
      
      <div className="relative max-w-5xl mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Legacy no longer</h1>
        <p className="text-lg md:text-xl mb-6">
          Talk to us to find out how we can transform your organisation for the future
        </p>
        
        {/* CTA Button */}
        <a 
          href="#contact" 
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 inline-block"
        >
          Contact Us &rsaquo;
        </a>
      </div>
    </section>
  );
};

export default ContactHero;
