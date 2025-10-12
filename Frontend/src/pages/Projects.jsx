import React from "react";
import images01 from "../assets/images01.png";
import images02 from "../assets/images02.png";
import images03 from "../assets/images03.png";
import images04 from "../assets/images04.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 px-6 md:px-12 py-10">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
          Our Projects
        </h1>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[images01, images02, images03, images04].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md relative group cursor-pointer"
            >
              <img
                src={img}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
