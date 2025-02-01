'use client';  // Add this at the very top!

import React from "react";
import { motion } from "framer-motion";

const FinanceFuture = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
          Technology built for you
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mt-3 leading-tight">
          The Future of Finance
        </h1>

        {/* Animated Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["Customer Focused", "Agile and Adaptable", "Compliance Ready", "Secure and Safe"].map(
            (item, index) => (
              <motion.div
                key={index}
                className="px-5 py-2 text-blue-900 bg-white shadow-md rounded-full text-sm font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FinanceFuture;
