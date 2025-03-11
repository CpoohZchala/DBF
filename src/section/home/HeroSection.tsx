import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-18 bg-white">
      {/* Left side: Images of women */}
      <div className="w-full flex justify-center lg:justify-start">
        <img
          src="/heroSection/women.png"
          alt="Businesswoman"
          className="max-w-full h-auto"
        />
      </div>

      {/* Right side: Text and logo */}
      <div className="text-center lg:text-center mt-8 lg:mt-0">
        <h1 className="text-5xl lg:text-6xl font-bold text-blue-950">
          "Empowering Women"
        </h1>
        <p className="text-3xl lg:text-3xl font-semibold text-gray-800 mt-4">
          Just for You!"
        </p>
        

        {/* Contact button */}
        <div className="mt-8 flex justify-center lg:justify-center">
          <button className="bg-blue-950 text-lg text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
