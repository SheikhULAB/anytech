'use client';

import Image from 'next/image';

export default function CustomerInsight() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-blue-600 font-semibold uppercase text-sm md:text-base">
          Powering the Future of Finance
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Uncovering new ways to delight customers
        </h2>
        <p className="mt-4 text-lg font-semibold text-gray-800">
          AnyTech is revolutionizing financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.
        </p>
        <p className="mt-4 text-gray-600 text-lg">
          Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
        </p>
      </div>
      
      {/* Right Side - Image with Floating Icons */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
        <div className="relative">
          <Image 
            src="/businesswoman-tablet.jpg" 
            alt="Woman using a tablet"
            width={450}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          
          {/* Floating Icons */}
          <div className="absolute top-4 -left-6 bg-white p-3 rounded-full shadow-lg">
            <Image src="/icon-transaction.png" alt="Transaction Icon" width={40} height={40} />
          </div>
          <div className="absolute bottom-10 left-4 bg-white p-3 rounded-full shadow-lg">
            <Image src="/icon-growth.png" alt="Growth Icon" width={40} height={40} />
          </div>
          <div className="absolute top-6 right-0 bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full shadow-lg">
            <Image src="/icon-banking.png" alt="Banking Icon" width={40} height={40} />
          </div>
        </div>
      </div>
    </section>
  );
}
