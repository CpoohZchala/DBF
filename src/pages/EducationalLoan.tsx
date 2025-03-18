import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Educational = () => (
  <>
    {/* Header Section with Image */}
    <section className="mt-20 w-full flex justify-center bg-white py-10">
      <img
        src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/personal-banking/loans/education-loan/spotlight/education-loan-spotlight.jpg?h=400&iar=0&w=1080&hash=3CA16BBC2753DE4E5F871F37A91CC188"
        alt="Gold Loan Banner"
        className="w-full max-h-auto object-cover"
      />
    </section>

    {/* Contact Us Title */}
    <section className="w-full flex justify-center text-center">
      <h1 className="font-extrabold text-blue-950 text-5xl lg:text-5xl">
        <span className="text-blue-600">Educational</span> Loans
      </h1>
    </section>

    {/* About Section */}
    <section className="px-6 md:px-16 lg:px-24 py-8 bg-white text-center">
      <p className="mt-2 font-normal text-lg  text-gray-700">
      At DBF Investment Limited, we believe that education is the key to a brighter future. Our Educational Loans are designed to help students and parents finance tuition fees, study materials, and other academic expenses, making higher education more accessible.
      </p>

      <h1 className="mt-10 text-start font-extrabold text-black text-2xl lg:text-2xl">Why Choose Us?</h1>

      <ul className="mt-7 space-y-5 text-lg text-start">
        <li className="flex items-center gap-2">
          <FaAngleDoubleRight className="text-blue-500" />
          Lowest interest rates with flexible repayment options
        </li>
        <li className="flex items-center gap-2">
          <FaAngleDoubleRight className="text-blue-500" />
          Covers tuition fees, study materials, and living costs
        </li>
        <li className="flex items-center gap-2">
          <FaAngleDoubleRight className="text-blue-500" />
          Available for both local and international education
        </li>
        <li className="flex items-center gap-2">
          <FaAngleDoubleRight className="text-blue-500" />
          Quick approval process for a smooth academic journey
        </li>
      </ul>
      <h1 className="mt-10 text-start font-extrabold text-black text-2xl lg:text-2xl">Call us for more details</h1>
      <h1 className="mt-10 text-start font-normal text-blue-500 text-xl lg:text-2xl">+94743908274 | +94702896932</h1>
    </section>
  </>
);

export default Educational;
