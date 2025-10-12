import React from "react";
import { Hammer, Droplets, Home, Ruler, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Ruler className="w-8 h-8 text-blue-600" />,
      title: "Roof Design and Visualization",
      description:
        "We create custom 3D roof designs to help you visualize your dream roof before installation begins.",
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-600" />,
      title: "Roofing Material Supply",
      description:
        "We provide high-quality roofing materials including tiles, shingles, and sheets from trusted brands.",
    },
    {
      icon: <Hammer className="w-8 h-8 text-blue-600" />,
      title: "Roofing Installations",
      description:
        "Our expert team ensures safe, durable, and precise roof installation using modern techniques.",
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Roof Maintenance",
      description:
        "We offer regular inspection, repair, and cleaning services to extend your roof’s lifespan.",
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: "Rain Gutter Installation",
      description:
        "We install durable rain gutters to protect your building from water damage and foundation issues.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Our <span className="text-blue-600">Services</span>
        </h2>

        {/* Grid with last row centered */}
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-md rounded-3xl p-6 hover:shadow-xl hover:border-blue-500 transition-all w-full sm:w-[90%] md:w-[90%] lg:w-[85%]"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
