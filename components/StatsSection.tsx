"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  duration?: number; // in seconds
  prefix?: string;
  suffix?: string;
};

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
}) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const [currentValue, setCurrentValue] = useState(0);

  // Create a ref and check if the component is in view.
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    // Only start the animation when in view.
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      // Adjust rounding as needed.
      setCurrentValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}
      {currentValue}
      {suffix}
    </span>
  );
};

const StatsSection: React.FC = () => {
  // Stats data with optional prefix/suffix
  const stats = [
    { target: 20, label: "Years of Experience", prefix: ">" },
    { target: 40, label: "Financial Institutions", suffix: "+" },
    { target: 200, label: "Customers Served", prefix: ">", suffix: "m" },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-sm font-semibold text-blue-600 tracking-widest mb-8 uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          TRUSTED BY THE BEST
        </motion.h2>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-5xl font-bold text-blue-600">
                <AnimatedNumber
                  value={stat.target}
                  duration={2}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              </p>
              <p className="text-gray-700 text-lg mt-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
