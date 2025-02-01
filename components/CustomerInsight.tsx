'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CustomerInsight() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <p className="text-blue-600 font-semibold uppercase text-sm md:text-base tracking-wider">
          Powering the Future of Finance
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
          Uncovering New Ways to Delight Customers
        </h2>
        <p className="text-lg font-medium text-gray-800">
          AnyTech is revolutionizing financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.
        </p>
        <p className="text-lg text-gray-600">
          Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
        </p>
      </div>

      {/* Right Side - Image with Floating Icons */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
        <div className="relative w-[90%] md:w-full max-w-lg bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl shadow-2xl overflow-hidden">
          {/* Main Image */}
          <div className="relative">
            <Image 
              src="/Assets/backgrounds/girl2.avif" 
              alt="Woman using a tablet"
              width={450}
              height={500}
              className="rounded-2xl object-cover"
              priority
            />
            
            {/* Floating Animated Icons */}
            <motion.div 
              className="absolute top-8 left-10 bg-white p-2 rounded-full shadow-lg"
              animate={{ y: [0, 12, -12, 0] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Image 
                src="/Assets/backgrounds/transaction.svg" 
                alt="Transaction Icon" 
                width={40} 
                height={40} 
              />
            </motion.div>

            <motion.div 
              className="absolute bottom-12 left-16 bg-white p-2 rounded-full shadow-lg"
              animate={{ y: [8, -8, 8] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
            >
              <Image 
                src="/Assets/backgrounds/growth.svg" 
                alt="Growth Icon" 
                width={40} 
                height={40} 
              />
            </motion.div>

            <motion.div 
              className="absolute top-12 right-8 bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full shadow-lg"
              animate={{ y: [-8, 8, -8] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
            >
              <Image 
                src="/Assets/backgrounds/banking.svg" 
                alt="Banking Icon" 
                width={40} 
                height={40} 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
