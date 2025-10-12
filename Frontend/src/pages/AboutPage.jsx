import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import images01 from '../assets/images01.png';
import images02 from '../assets/images02.png'
import images03 from '../assets/images03.png'
import images09 from '../assets/images09.png'

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-grey-100 text-gray-800 px-6 md:px-12 py-10">

{/* Page Title */}
<h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center ml-[400px] md:text-left">
  About Us
</h1>

<div className="flex flex-col md:flex-row items-center gap-10">
  {/* Left Section - Image Gallery */}
  <div className="md:w-1/2 grid grid-cols-2 gap-4">
    <img
      src={images01}
      alt="Roof installation"
      className="rounded-lg shadow-md object-cover w-full h-48 md:h-64"
    />
    <img
      src={images02}
      alt="Roof tiles"
      className="rounded-lg shadow-md object-cover w-full h-48 md:h-64"
    />
    <img
      src={images03}
      alt="Modern roofing"
      className="rounded-lg shadow-md object-cover w-full h-48 md:h-64"
    />
    <img
      src={images09}
      alt="Roof design"
      className="rounded-lg shadow-md object-cover w-full h-48 md:h-64"
    />
  </div>

  {/* Right Section - About Content */}
  <div className="md:w-1/2 space-y-6 leading-relaxed">
    <p>
      Welcome to{" "}
      <span className="font-semibold text-blue-800">
        Durocap Roofing India Pvt. Ltd.
      </span>
      , a name synonymous with excellence in roofing products. Our journey
      began with a vision to provide unparalleled roofing solutions, and
      today, our products are trusted and acclaimed globally.
    </p>

    <p>
      At <span className="font-semibold">DUROCAP</span>, we take immense
      pride in our comprehensive range of roofing solutions catering to
      commercial, residential, and industrial needs. Our commitment to
      quality has propelled us to the forefront of the industry, and our
      products are revered for their exceptional durability and superior
      performance.
    </p>

    <p>
      Our flagship DUROCAP tiles exemplify the pinnacle of quality and
      reliability. Crafted to outlast and outshine, they offer a level of
      durability that surpasses industry standards. With built-in
      anti-fungal properties, we ensure not just a roof but a shield
      against the elements.
    </p>

    <p>
      Your safety is our priority, and our tiles are engineered to provide
      unparalleled protection. Under the shelter of DUROCAP tiles, you'll
      find more than just a roof – you'll find peace of mind.
    </p>

    <p>
      Our DUROCAP interlocking roof tiles stand as a testament to our
      commitment to innovation. These exceptional quality tiles come in a
      spectrum of shades, thoughtfully designed to cater to the unique
      preferences of each customer.
    </p>
  </div>
</div>
</div>
   <Footer/>
    </>
  );
};

export default AboutPage;
