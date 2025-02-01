'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-blue-600 text-white px-6 py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fadeInUp">
            Embrace the Future of Finance
          </h1>
          <p className="text-lg md:text-xl text-gray-200 animate-fadeInUp delay-100">
            Reimagine financial services with AnyTech’s open platform, a distributed banking solution that powers transformation.
          </p>
          <Link 
            href="#contact" 
            className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 transition-all px-6 py-3 rounded-md text-lg font-semibold shadow-lg animate-fadeInUp delay-200"
          >
            Reach Out to Us →
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center relative animate-fadeInRight">
          <div className="relative w-[90%] md:w-full max-w-lg">
            <Image 
              src="/assets/backgrounds/girl1.avif" 
              alt="Businesswoman holding a phone"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl object-cover"
              priority
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700 via-transparent to-transparent opacity-40 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
