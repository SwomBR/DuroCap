import React from 'react';

const StatsBanner = () => {
  const stats = [
    { number: '10', label: 'Years of Experience' },
    { number: '100+', label: 'Happy Customers' },
    { number: '100+', label: 'Products' },
  ];

  return (
    <div className="bg-cyan-500 text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-5">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="text-4xl font-bold mb-2">{stat.number}</h2>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;
