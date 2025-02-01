import React from "react";
import Image from "next/image";

const FinancialServices = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto space-y-6 md:space-y-0">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
          Customer Focused
        </p>
        <h2 className="text-3xl font-bold text-blue-900">
          Purpose-built Financial Services
        </h2>
        <p className="font-medium text-gray-700">
          Elevate customer experience and achieve agile financial product
          innovation with the world’s first, consumer-centric, real-time
          transaction account processing and credit limit system.
        </p>
        <p className="text-gray-600">
          Experience the advantages of integrated retail financial services
          technology, real-time analysis of transactional behaviour, and product
          marketing opportunities.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105">
          <Image
            src="/Assets/backgrounds/girl3.avif"
            alt="Financial Services"
            width={500}
            height={300}
            className="object-cover"
          />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default FinancialServices;
