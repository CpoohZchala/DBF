import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck, CheckCircle, PiggyBank } from "lucide-react";
import React from "react";
import featuresData from "../data/feature.json";

const iconMap = {
  CalendarCheck: <CalendarCheck className="w-8 h-8 text-blue-950" />, 
  PiggyBank: <PiggyBank className="w-8 h-8 text-blue-950" />, 
  CheckCircle: <CheckCircle className="w-8 h-8 text-blue-950" />
};

const About = () => (
  <>
    {/* Header Section with Image */}
    <section className="mt-15 w-full flex justify-center bg-gray-100 py-10">
      <img
        src="https://www.kotak.com/content/dam/Kotak/herosliderbanner/Investment.png"
        alt="About Background"
        className="w-full h-full object-cover"
      />
    </section>

    {/* About Section */}
    <section className="px-6 md:px-16 lg:px-24 py-8 bg-white text-center">
      <h1 className="text-3xl font-bold text-black">About Our Company</h1>
      <p className="mt-4 text-gray-700">
        At <span className="font-semibold text-blue-900">DBF Investment Limited</span>, we are committed to empowering women by providing financial solutions tailored to their needs. Our mission is to create opportunities for women to achieve financial independence through strategic investments and customized loan options.
        <br /><br />
        With a strong foundation in financial growth, we help individuals and small businesses secure stable, long-term profits. Whether you're looking for <span className="font-semibold">Micro Loans, Personal Loans,</span> or <span className="font-semibold">Small Business Loans</span>, our services are designed to support your journey toward success.
      </p>
    </section>

    {/* Vision & Mission Sections */}
    <section className="px-6 md:px-16 lg:px-24 py-8 bg-gray-100 text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black">Our Vision</h1>
        <p className="mt-4 text-gray-700">
          To be a leading financial institution that empowers women through accessible and innovative financial solutions, fostering economic growth and long-term stability.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-black">Our Mission</h1>
        <p className="mt-4 text-gray-700">
          At <span className="font-semibold text-blue-900">DBF Investment Limited</span>, our mission is to provide women with financial opportunities that enable them to achieve independence, grow their businesses, and secure a prosperous future. We are committed to offering tailored financial products, expert guidance, and long-term investment solutions to help women succeed in their personal and professional lives.
        </p>
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="px-6 md:px-16 lg:px-24 py-12 bg-white text-center">
      <h1 className="text-3xl font-bold text-black">Why Choose Us?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
        {featuresData.map((feature, index) => (
          <Card
            key={index}
            className="rounded-lg  border-yellow-600 border-4 p-6 text-center shadow-md transition-transform transform hover:scale-105 bg-blue-950 flex flex-col items-center"
          >
            <div className="flex flex-col items-center gap-3 text-xl font-semibold text-blue-950 bg-white p-4 rounded-lg w-full">
              {iconMap[feature.icon]}
              <span>{feature.title}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  </>
);

export default About;
