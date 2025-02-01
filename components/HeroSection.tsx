'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  // Variants for the left text container with staggered children
  const textContainer = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  // Individual text items will fade up
  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Variant for the right side image animation
  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-20 md:py-28 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Side - Text Content */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left space-y-6"
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            variants={textItem}
          >
            Embrace the Future of Finance
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-blue-100"
            variants={textItem}
          >
            Reimagine financial services with AnyTech’s open platform—a distributed banking solution that powers transformation.
          </motion.p>
          <motion.div variants={textItem}>
            <Link 
              href="#contact" 
              className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 transition-all px-8 py-4 rounded-md text-lg font-semibold shadow-lg"
            >
              Reach Out to Us →
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center relative"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-lg transform hover:scale-105 transition duration-500 ease-in-out">
            <Image 
              src="/Assets/backgrounds/girl1.avif" 
              alt="Businesswoman holding a phone"
              width={600}
              height={600}
              className="rounded-3xl shadow-2xl object-cover border-4 border-white"
              priority
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black via-transparent to-transparent opacity-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
