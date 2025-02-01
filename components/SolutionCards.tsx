"use client"
import React from "react";
import { Lightbulb, Share, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    icon: <Share className="text-blue-500 w-10 h-10" />,
  },
  {
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    icon: <Lightbulb className="text-teal-500 w-10 h-10" />,
  },
  {
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    icon: <Cpu className="text-orange-500 w-10 h-10" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SolutionCards = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-16">
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105 border border-transparent hover:border-blue-300"
            variants={cardVariants}
          >
            <div className="flex justify-center items-center mb-5">
              {card.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {card.title}
            </h2>
            <p className="text-gray-600 text-md leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SolutionCards;
