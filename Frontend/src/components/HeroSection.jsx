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

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-40 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-xl">DuroCap Roofings</span>
          </div>

          <ul className="hidden md:flex space-x-6 text-sm uppercase font-semibold tracking-wide">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer">Services</li>
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
            <li className="hover:text-blue-400 cursor-pointer">Gallery</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>

          <button className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-5 py-2 text-sm font-semibold transition">
            Get a Free Estimate
          </button>
        </div>
      </nav>

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
