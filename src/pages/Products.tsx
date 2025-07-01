import React, { useState } from "react";
import { FaAngleDoubleRight, FaMobile, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

function Products() {
    const [activeTab, setActiveTab] = useState("loan");

    return (
        <>
            {/* Header Section */}
            <section className="mt-15 w-full flex justify-center bg-white py-10">
                <img
                    src="https://www.pnbmetlife.com/content/dam/pnb-metlife/images/articles/savings/importance-of-investment.jpg"
                    alt="Investment Banner"
                    className="w-full max-h-[300px] sm:max-h-[400px] object-cover"
                />
            </section>

            {/* Title Section */}
            <section className="text-center py-6">
                <h1 className="font-extrabold text-blue-950 text-4xl sm:text-5xl">
                    Our Products And Services
                </h1>
            </section>

            {/* Navigation Tabs */}
            <div className="w-full">
                <div className="flex justify-center border-b">
                    {["loan", "investment"].map((tab) => (
                        <button
                            key={tab}
                            className={`w-full sm:w-auto px-6 sm:px-10 py-3 text-lg sm:text-xl transition-all duration-200 ${activeTab === tab
                                ? "border-b-4 border-blue-500 font-semibold text-blue-600"
                                : "text-gray-500 hover:text-blue-600"
                                }`}
                            onClick={() => setActiveTab(tab)}
                            aria-selected={activeTab === tab}
                        >
                            {tab === "loan" ? "Loan Services" : "Investment Plans"}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <section className="w-full max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 px-6 py-10">
                    {activeTab === "loan" ? (
                        <>
                            <div className="flex justify-center">
                                <img
                                    src="/products/girl.png"
                                    alt="Businesswoman"
                                    className="max-w-full h-auto border-2 border-yellow-400 rounded-lg shadow-md"
                                />
                            </div>
                            <div className="border border-gray-300 shadow-md rounded-lg p-6">
                                <h2 className="text-lg font-bold text-gray-800">About Our Products And Services</h2>
                                <p className="text-blue-700 font-bold mt-2 text-xl sm:text-3xl">Our Loan Services</p>
                                <ul className=" text-center mt-7 space-y-5 text-lg">
                                    <li>
                                        <Link to="/gold" className="hover:text-blue-600 flex items-center gap-2">
                                            <FaAngleDoubleRight className="text-blue-500" />
                                            Gold Loans
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/educational" className="hover:text-blue-600 flex items-center gap-2">
                                            <FaAngleDoubleRight className="text-blue-500" />
                                            Educational Loans
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/micro" className="hover:text-blue-600 flex items-center gap-2">
                                            <FaAngleDoubleRight className="text-blue-500" />
                                            Micro Loans
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/msmk" className="hover:text-blue-600 flex items-center gap-2">
                                            <FaAngleDoubleRight className="text-blue-500" />
                                            MSMK Loans
                                        </Link>
                                    </li>
                                </ul>

                                <div className="mt-6 text-blue-700 font-semibold ">
                                    <FaMobile className="inline-block mr-2 " />
                                    Call For Help: +94743908274
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex justify-center">
                                <img
                                    src="/products/girl2.png"
                                    alt="Businesswoman"
                                    className="max-w-full h-auto border-2 border-yellow-400 rounded-lg shadow-md"
                                />
                            </div>
                            <div className="border border-gray-300 shadow-md rounded-lg p-6">
                                <h2 className="text-lg font-bold text-gray-800">About Our Products And Services</h2>
                                <p className="text-blue-700 font-bold mt-2 text-xl sm:text-3xl">Our Investments Plans</p>
                                <ul className=" text-center mt-7 space-y-5 text-lg">
                                    
                                    <li className="flex items-center gap-2">
                                        <FaAngleDoubleRight className="text-blue-500" />
                                        Diriya Diyani
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaAngleDoubleRight className="text-blue-500" />
                                        Senehasa Saviya
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaAngleDoubleRight className="text-blue-500" />
                                        Pragathi Saviya
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaAngleDoubleRight className="text-blue-500" />
                                        Uthsaha Saviya
                                    </li>


                                </ul>

                                <div className="mt-6 text-blue-700 font-semibold ">
                                    <FaMobile className="inline-block mr-2 " />
                                    Call For Help: +94743908274
                                </div>
                            </div>
                        </>
                    )}
                </section>
            </div>
        </>
    );
}

export default Products;
