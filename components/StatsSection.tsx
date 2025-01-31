"use client";

import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-blue-600 tracking-wider mb-6">
          TRUSTED BY THE BEST
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Stat 1 */}
          <div>
            <p className="text-4xl font-bold text-blue-600"> &gt;20 </p>
            <p className="text-gray-700 text-sm mt-2">Years of Experience</p>
          </div>

          {/* Stat 2 */}
          <div>
            <p className="text-4xl font-bold text-blue-600">40+</p>
            <p className="text-gray-700 text-sm mt-2">Financial Institutions</p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="text-4xl font-bold text-blue-600">&gt;200m</p>
            <p className="text-gray-700 text-sm mt-2">Customers Each</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
