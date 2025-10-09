import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import image1 from "../assets/image1.png";

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat text-white animate-fadeIn"
      style={{
        backgroundImage: `url(${image1})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center text-center flex-1 px-6 mt-24">
        <h3 className="text-sm md:text-lg font-medium uppercase mb-3 tracking-wide text-gray-300">
          Roofing Services in Your City
        </h3>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          DuroCap Roofing Solutions
        </h1>
        <p className="max-w-2xl text-gray-300 text-base md:text-lg mb-8">
          We are DuroCap — offering trusted, durable, and affordable roofing
          solutions for commercial and residential projects across the region.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            View Our Services
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition">
            View Our Projects
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-30"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default HeroSection;
