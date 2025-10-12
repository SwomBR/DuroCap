import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import authImage from '../assets/authImage.png';

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat text-white animate-fadeIn"
      style={{
        backgroundImage: `url(${authImage})`,
      }}
    >

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center text-center flex-1 px-6 mt-24">
        <h3 className="text-sm md:text-lg font-medium uppercase mb-3 tracking-wide text-black">
          Roofing Services in Your City
        </h3>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-black">
          DuroCap Roofing Solutions
        </h1>
        <p className="max-w-2xl text-black font-extrabold text-base md:text-lg mb-8">
          We are DuroCap — offering trusted, durable, and affordable roofing
          solutions for commercial and residential projects across the region.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg font-semibold transition">
            View Our Services
          </button>
          <button className="bg-blue-600 hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition">
            View Our Projects
          </button>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
