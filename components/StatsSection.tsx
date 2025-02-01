"use client";

import React from "react";
import { motion } from "framer-motion";

const StatsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-sm font-semibold text-blue-600 tracking-widest mb-8 uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          TRUSTED BY THE BEST
        </motion.h2>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { value: ">20", label: "Years of Experience" },
            { value: "40+", label: "Financial Institutions" },
            { value: ">200m", label: "Customers Served" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <p className="text-5xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-gray-700 text-lg mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
