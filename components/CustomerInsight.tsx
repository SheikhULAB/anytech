'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CustomerInsight() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <p className="text-blue-600 font-semibold uppercase text-sm md:text-base">
          Powering the Future of Finance
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Uncovering New Ways to Delight Customers
        </h2>
        <p className="text-lg font-semibold text-gray-800">
          AnyTech is revolutionizing financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.
        </p>
        <p className="text-lg text-gray-600">
          Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
        </p>
      </div>

      {/* Right Side - Image with Floating Icons Inside */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
        <div className="relative w-[90%] md:w-full max-w-lg overflow-hidden">
          {/* Main Image */}
          <div className="relative">
            <Image 
              src="/Assets/backgrounds/girl2.avif" 
              alt="Woman using a tablet"
              width={450}
              height={500}
              className="rounded-lg shadow-2xl object-cover"
              priority
            />
            
            {/* Floating Animated Icons (Inside Image) */}
            <motion.div 
              className="absolute top-[10%] left-[15%] bg-white p-3 rounded-full shadow-lg"
              animate={{ y: [0, 15, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Image src="/Assets/backgrounds/transaction.svg" alt="Transaction Icon" width={40} height={40} />
            </motion.div>

            <motion.div 
              className="absolute bottom-[15%] left-[20%] bg-white p-3 rounded-full shadow-lg"
              animate={{ y: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
            >
              <Image src="/Assets/backgrounds/growth.svg" alt="Growth Icon" width={40} height={40} />
            </motion.div>

            <motion.div 
              className="absolute top-[20%] right-[10%] bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full shadow-lg"
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
            >
              <Image src="/Assets/backgrounds/banking.svg" alt="Banking Icon" width={40} height={40} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
