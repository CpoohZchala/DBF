import ContactPop from "@/components/dialog/contact";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  "/heroSection/image1.jpg",
  "/heroSection/image2.jpg",
  "/heroSection/image3.jpg",
  "/heroSection/image4.jpg"
];

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-18 bg-white">
      {/* Left side: Images of women */}
      <div className=" mt-10 w-full flex justify-center lg:justify-start rounded-xl">
        <Swiper
          modules={[ Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          loop={true}
          className="w-full md:w-[900px] border-amber-300"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover mt-2 mb-2 border-4 rounded-lg border-blue-600" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right side: Text and logo */}
      <div className="text-center mt-6 lg:mt-0">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-blue-950">
          ජාතියේ හදගැස්ම
        </h1>

        <img
          src="/navBar/logo.png"
          alt="DBF Investment Limited"
          className="mt-6 h-20 w-auto mx-auto"
        />

        <p className="text-3xl font-semibold text-gray-800 mt-4">
          "කාන්තා ඔබ වෙනුවෙන්මයි"
        </p>

        <div className="mt-8 flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-blue-700 text-lg text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
                Contact Us
              </button>
            </DialogTrigger>
            <ContactPop />
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
