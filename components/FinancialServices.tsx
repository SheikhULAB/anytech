import React from "react";
import Image from "next/image";

const FinancialServices = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6 md:p-10 max-w-5xl mx-auto">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <p className="text-blue-600 text-sm font-semibold uppercase">
          Customer Focused
        </p>
        <h2 className="text-3xl font-bold text-blue-900">
          Purpose-built financial services
        </h2>
        <p className="font-semibold text-gray-700">
          Elevate customer experience and achieve agile financial product
          innovation with the world’s first, consumer-centric, real-time
          transaction account processing and credit limit system.
        </p>
        <p className="text-gray-600">
          Experience the advantages of integrated retail financial services
          technology, real-time analysis of transactional behaviour and product
          marketing opportunities.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src="/Assets/backgrounds/girl3.avif" // Replace with the correct path
          alt="Financial Services"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default FinancialServices;
