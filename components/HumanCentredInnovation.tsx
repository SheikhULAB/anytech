"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};

const HumanCentredInnovation = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          className="text-xl font-semibold text-blue-600"
          variants={itemVariants}
        >
          OUR PHILOSOPHY
        </motion.h2>
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-gray-800 mt-2"
          variants={itemVariants}
        >
          Human-centred innovation
        </motion.h1>
      </motion.div>
      
      {/* Image Section */}
      <motion.div 
        className="max-w-6xl mx-auto flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image 
          src="/Assets/backgrounds/human-center.avif" 
          alt="Innovation and technology concept"
          width={900}
          height={500}
          className="rounded-2xl shadow-lg object-cover w-full"
          priority
        />
      </motion.div>
    </div>
  );
};

export default HumanCentredInnovation;
