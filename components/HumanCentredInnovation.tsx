import React from "react";
import Image from "next/image";

const HumanCentredInnovation = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      <div className="text-center mb-12">
        <h2 className="text-xl font-semibold text-blue-600">OUR PHILOSOPHY</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
          Human-centred innovation
        </h1>
      </div>
      
      {/* Image Section */}
      <div className="max-w-6xl mx-auto flex justify-center">
        <Image 
          src="/Assets/backgrounds/human-center.avif" 
          alt="Innovation and technology concept"
          width={900}
          height={500}
          className="rounded-2xl shadow-lg object-cover w-full"
          priority
        />
      </div>
    </div>
  );
};

export default HumanCentredInnovation;
