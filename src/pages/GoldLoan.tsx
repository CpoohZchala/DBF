import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Gold = () => (
  <>
    {/* Header Section with Image */}
    <section className="mt-20 w-full flex justify-center bg-white py-10">
      <img
        src="https://bankofmaharashtra.in/writereaddata/blogs/f5277864-3180-4a71-9a50-53bef2d633fd.jpg"
        alt="Gold Loan Banner"
        className="w-full max-h-auto object-cover"
      />
    </section>

    {/* Contact Us Title */}
    <section className="w-full flex justify-center">
      <h1 className="font-extrabold text-blue-950 text-5xl lg:text-5xl">
        <span className="text-yellow-600">Gold</span> Loans
      </h1>
      
    </section>

    {/* About Section */}
    <section className="px-6 md:px-16 lg:px-24 py-8 bg-white text-center">
      <p className="mt-2 font-normal text-lg  text-gray-700">
        At DBF Investment Limited, we provide you with the funds you need, exactly when you need them, through our Gold Loan services. Pledge your gold and receive a higher loan
        amount at the lowest interest rates, ensuring financial stability for your future. For your convenience, our Gold Loan services are available at selected branches with complete confidentiality and secure handling of your valuable gold items. Trust DBF Investment Limited for a hassle-free and reliable financial solution.
      </p>

      <h1 className="mt-10 text-start font-extrabold text-black text-2xl lg:text-2xl">Why Choose Us?</h1>

      <ul className="mt-7 space-y-5 text-lg text-start">
        <li className="flex items-center gap-2">
          <FaAngleDoubleRight className="text-blue-500" />
          Easy repayment schemes with lowest interest rates
        </li>
        <li className="flex items-center gap-2">
          <FaAngleDoubleRight className="text-blue-500" />
          A free insurance cover for your gold
        </li>
        <li className="flex items-center gap-2">
          <FaAngleDoubleRight className="text-blue-500" />
          Your gold jewellery will receive maximum security until you redeem
        </li>
        <li className="flex items-center gap-2">
          <FaAngleDoubleRight className="text-blue-500" />
          Highest loan amount for your gold jewellery
        </li>
      </ul>
      <h1 className="mt-10 text-start font-extrabold text-black text-2xl lg:text-2xl">Call us for more details</h1>
      <h1 className="mt-10 text-start font-normal text-blue-500 text-xl lg:text-2xl">+94743908274 | +94702896932</h1>
    </section>
  </>
);

export default Gold;
