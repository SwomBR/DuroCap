import React from "react";
import r1 from "../assets/r1.jpg";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.jpg";
import r5 from "../assets/r5.jpeg";
import rs from "../assets/rs.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicePage = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 md:px-12 py-10">

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center md:text-left">
        Our Services
      </h1>

      {/* Service 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="md:w-1/2">
          <img
            src={r1}
            alt="Roof Design and Visualization"
            className="rounded-2xl w-full h-80 object-cover shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
            Roof Design and Visualization
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            We bring your roofing ideas to life with advanced 3D roof design and
            visualization tools. Our design experts work closely with you to
            create accurate visual mockups, ensuring your chosen materials,
            colors, and patterns perfectly complement your property’s
            architecture. This process helps eliminate guesswork and ensures
            satisfaction before installation begins.
          </p>
        </div>
      </div>

      {/* Service 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20">
        <div className="md:w-1/2">
          <img
            src={r5}
            alt="Roofing Material Supply"
            className="rounded-2xl w-full h-80 object-cover shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
            Roofing Material Supply
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            We provide a wide range of roofing materials that combine strength,
            style, and sustainability. From high-performance metal sheets to
            weather-resistant tiles and shingles, every product we offer is
            sourced from trusted manufacturers. Our materials are rigorously
            tested for durability and performance under extreme weather
            conditions, ensuring you receive nothing but the best.
          </p>
        </div>
      </div>

      {/* Service 3 */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="md:w-1/2">
          <img
            src={r3}
            alt="Roofing Installations"
            className="rounded-2xl w-full h-80 object-cover shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
            Roofing Installations
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Our experienced roofing professionals handle installation with
            precision and care. We follow industry best practices to ensure
            every tile, sheet, and seal is perfectly aligned and secure.
            Whether it’s a residential home, commercial complex, or industrial
            facility, our installations are known for their superior finish and
            long-term durability.
          </p>
        </div>
      </div>

      {/* Service 4 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20">
        <div className="md:w-1/2">
          <img
            src={r4}
            alt="Roof Maintenance"
            className="rounded-2xl w-full h-80 object-cover shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
            Roof Maintenance
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Proper maintenance is vital to protect your roofing investment. Our
            maintenance service includes regular inspections, debris cleaning,
            damage assessment, and leak repair. We detect potential issues
            before they become costly problems, ensuring your roof remains
            strong and reliable year after year.
          </p>
        </div>
      </div>

      {/* Service 5 */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="md:w-1/2">
          <img
            src={rs}
            alt="Rain Gutter Installation"
            className="rounded-2xl w-full h-80 object-cover shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
            Rain Gutter Installation
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            A strong roofing system requires an efficient water drainage
            solution. Our rain gutter installation service ensures proper water
            flow to protect your walls, foundation, and landscaping from damage.
            We use seamless aluminum and PVC gutters designed for longevity and
            minimal maintenance.
          </p>
        </div>
      </div>

      {/* Contact Button */}
      <div className="flex justify-center mt-16">
        <button className="bg-blue-800 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-700 transition">
          Contact Now
        </button>
      </div>
    </div>
    <Footer/>
    
    </>
  );
};

export default ServicePage;
