import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Micro = () => (
    <>
        {/* Header Section with Image */}
        <section className="mt-20 w-full flex justify-center bg-white py-10">
            <img
                src="https://www.developmentaid.org/api/frontend/cms/file/2024/08/Micro-loan-industry-post-Covid-recovery-and-future-trends.jpg"
                alt="Gold Loan Banner"
                className="w-full max-h-auto object-cover"
            />
        </section>

        {/* Contact Us Title */}
        <section className="w-full flex justify-center">
            <h1 className="font-extrabold text-blue-950 text-5xl lg:text-5xl">
                <span className="text-blue-600">Micro</span> Loans
            </h1>
        </section>

        {/* About Section */}
        <section className="px-6 md:px-16 lg:px-24 py-8 bg-white text-center">
            <p className="mt-2 font-normal text-lg  text-gray-700">
                At DBF Investment Limited, we offer Micro Loans to help individuals and small businesses access quick and reliable funding. Whether you need capital for a startup, business expansion, or personal emergencies, our Micro Loans provide flexible and affordable financial solutions tailored to your needs.      </p>

            <h1 className="mt-10 text-start font-extrabold text-black text-2xl lg:text-2xl">Why Choose Us?</h1>

            <ul className="mt-7 space-y-5 text-lg text-start">
                <li className="flex items-center gap-2">
                    <FaAngleDoubleRight className="text-blue-500" />
                    Easy repayment schemes with lowest interest rates
                </li>
                <li className="flex items-center gap-2">
                    <FaAngleDoubleRight className="text-blue-500" />
                    Fast approval process with minimal documentation
                </li>
                <li className="flex items-center gap-2">
                    <FaAngleDoubleRight className="text-blue-500" />
                    Flexible loan amounts for business and personal use
                </li>
                <li className="flex items-center gap-2">
                    <FaAngleDoubleRight className="text-blue-500" />
                    Designed for small business owners and entrepreneurs
                </li>
            </ul>
            <h1 className="mt-10 text-start font-extrabold text-black text-2xl lg:text-2xl">Call us for more details</h1>
            <h1 className="mt-10 text-start font-normal text-blue-500 text-xl lg:text-2xl">+94743908274 | +94702896932</h1>
        </section>
    </>
);

export default Micro;
