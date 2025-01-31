import React from "react";

const FinanceFuture = () => {
  return (
    <section className="flex flex-col items-center text-center px-4 py-12">
      <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
        Technology built for you
      </p>
      <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mt-2">
        The future of finance
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm font-semibold text-blue-600">
        <span>Customer focused</span>
        <span className="px-4 py-2 bg-blue-200 text-blue-900 rounded-full">
          Agile and adaptable
        </span>
        <span>Compliance ready</span>
        <span>Secure and safe</span>
      </div>
    </section>
  );
};

export default FinanceFuture;
