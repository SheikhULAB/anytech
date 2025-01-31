import React from "react";
import { Lightbulb, Share, Cpu } from "lucide-react";

const SolutionCards = () => {
  const cards = [
    {
      title: "Full-suite solutions",
      description:
        "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
      icon: <Share className="text-blue-500 w-8 h-8" />,
    },
    {
      title: "Simplify the complex",
      description:
        "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
      icon: <Lightbulb className="text-teal-500 w-8 h-8" />,
    },
    {
      title: "Cutting-edge tech",
      description:
        "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
      icon: <Cpu className="text-orange-500 w-8 h-8" />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center items-center mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h2>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionCards;
