import React from "react";

const HumanCentredInnovation = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      <div className="text-center mb-12">
        <h2 className="text-xl font-semibold text-blue-600">OUR PHILOSOPHY</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
          Human-centred innovation
        </h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Core Tech Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-blue-500 text-sm font-semibold mb-2">CORE TECH</h3>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Artificial Intelligence</h2>
          <p className="text-gray-600 text-sm">
            Using AI/ML to upgrade legacy processes, reduce cost, and improve efficiency.
          </p>
        </div>

        {/* Mechanism Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-orange-500 text-sm font-semibold mb-2">MECHANISM</h3>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blockchain</h2>
          <p className="text-gray-600 text-sm">
            Enhanced security by eliminating intermediaries.
          </p>
        </div>

        {/* Infrastructure Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-green-500 text-sm font-semibold mb-2">INFRASTRUCTURE</h3>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cloud</h2>
          <p className="text-gray-600 text-sm">
            Scale resources easily on-demand.
          </p>
        </div>

        {/* Resource Section */}
        <div className="col-span-1 md:col-span-3 bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-teal-500 text-sm font-semibold mb-2">RESOURCE</h3>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Data</h2>
          <p className="text-gray-600 text-sm">
            Valuable, actionable insights from mass data sources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HumanCentredInnovation;
