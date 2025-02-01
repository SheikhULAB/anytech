"use client";

import React from "react";

const ContactHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 animate-gradient-x"></div>
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/background-pattern.png')] bg-cover opacity-30" />

      <div className="relative max-w-5xl mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Legacy no longer
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-sm">
          Talk to us to find out how we can transform your organisation for the future
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:scale-105 focus:outline-none"
        >
          Contact Us &rsaquo;
        </a>
      </div>
      <style jsx>{`
        /* Optional: Custom keyframes for gradient animation */
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactHero;
