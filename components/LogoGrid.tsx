"use client";

import React from "react";

const logos = [
  "/logos/bank-of-chengde.png",
  "/logos/bank-of-china.png",
  "/logos/bank-of-shanghai.png",
  "/logos/cgb.png",
  "/logos/china-citic-bank.png",
  "/logos/one-bank.png",
  "/logos/pingan-bank.png",
  "/logos/postal-savings-bank.png",
  "/logos/sea.png",
  "/logos/shandong-commercial-bank.png",
  "/logos/vipfubon.png",
  "/logos/xiamen-bank.png",
  "/logos/xw-bank.png",
  "/logos/spd-bank.png",
  "/logos/card-centre.png",
];

const LogoGrid: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Bank Logo ${index + 1}`}
                className="h-16 sm:h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
