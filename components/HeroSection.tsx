'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-blue-600 text-white px-6 py-16 md:py-24 flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Embrace the future of finance
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation
        </p>
        <Link href="#contact" className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-semibold">
          Reach Out to Us →
        </Link>
      </div>
      
      {/* Right Side - Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
        <Image 
          src="/finance-woman.jpg" 
          alt="Businesswoman holding a phone"
          width={500}
          height={500}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
