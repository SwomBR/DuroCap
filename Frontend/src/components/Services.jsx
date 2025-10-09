import React from 'react';

const servicesData = [
  {
    title: 'Roofings',
    description:
      'A roof is the top covering of a building and a part of the building envelope.',
    icon: '🏠',
    link: '#', // replace with actual link
  },
  {
    title: 'Fabrications',
    description:
      'Fabrication is the creation of metal structure. Metal is more durable and can last a long time.',
    icon: '🛠️',
    link: '#', // replace with actual link
  },
  {
    title: 'Interiors',
    description:
      'The design of the decorative elements of the interior of a house or apartments.',
    icon: '🏡',
    link: '#', // replace with actual link
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold mb-4">Services We Provide</h2>
        <p className="text-gray-600 mb-12">
          Roofing Company in Trivandrum, AJ Roofings started off as a roofing company offering
          all Commercial and Residential roofing installation and repair, or roof replacement
          and coating services. As we grew and gained more experience, we added more services
          to our portfolio.
          <br />
          <strong className="mt-2 block">
            Today, we offer 3 core services – Roofing, Metal Fabrication and Interiors.
          </strong>
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 text-center flex-1 hover:scale-105 transition-transform"
            >
              <div className="text-red-500 text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-500 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-red-500 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
