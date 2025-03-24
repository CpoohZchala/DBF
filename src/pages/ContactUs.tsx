import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactUs = () => (
  <>
    {/* Header Section with Image */}
    <section className="mt-15 w-full flex justify-center bg-white py-10">
      <img
        src="https://www.ivisitorlog.com/wp-content/uploads/2023/08/contactus-banner.jpg"
        alt="Contact Us Banner"
        className="w-full max-h-[300px] object-cover"
      />
    </section>

    {/* Contact Us Title */}
    <section className="w-full flex justify-center py-6">
      <h1 className="font-extrabold text-blue-950 text-3xl lg:text-5xl">Contact Us</h1>
    </section>

    {/* Contact Form & Office Info Section */}
    <section className="w-full max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 px-6 py-10">
      {/* Contact Form */}
      <Card className="border border-gray-300 shadow-md rounded-lg">
        <CardContent className="p-6 space-y-5">
          <p className="text-gray-700 text-sm">
            If you have any questions or feedback, please send us a message.
          </p>
          <Input type="text" placeholder="Name" className="bg-gray-100 text-sm" />
          <Input type="email" placeholder="Email" className="bg-gray-100 text-sm" />
          <label className="text-sm font-semibold">Type Your Message:</label>
          <Textarea placeholder="Type your message here..." className="bg-gray-100 text-sm" />
          <Button className="w-full bg-blue-950 hover:bg-blue-700 text-white">Send</Button>
        </CardContent>
      </Card>

      {/* Office Information & Map */}
      <div className="border border-gray-300 shadow-md rounded-lg p-6">
        <h1 className="text-blue-950 font-semibold text-2xl sm:text-3xl">DBF</h1>
        <h3 className="font-bold text-lg mt-2">Head Office</h3>
        <p className="text-gray-700 text-sm mt-2">
          No.402, 4th Floor,<br/> Paramount Tower, 9th Lane,<br/> Nawala,<br/> Sri Lanka
        </p>
        <p className="text-gray-700 text-sm mt-2">
          <strong>Tel:</strong> 
          <a href="tel:+94112370990" className="text-blue-600 hover:underline"> (+94) 11 2 370 990</a>,  
          <a href="tel:+94114393100" className="text-blue-600 hover:underline"> (+94) 11 4 393 100</a>
        </p>
        <p className="text-gray-700 text-sm mt-2">
          <strong>Email:</strong> 
          <a href="mailto:info@dearoagricapitalventure.com" className="text-blue-600 hover:underline">
          dbfinvestmentlimited@gmail.com
          </a>
          
        </p>
        <p className="text-gray-700 text-sm mt-2">
          <strong>Facebook:</strong> 
          <a href="https://www.facebook.com/dbfinvestmentlimited/" className="text-blue-600 hover:underline">
          DBF Investment Limited 
          </a>
          
        </p>

        {/* Google Map Embed */}
        <div className="mt-12">
          <iframe
            className="w-full h-48 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.928977231744!2d79.84620874130624!3d6.927078383954683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25928593a8e67%3A0x6b8d07ed1e8c16e2!2sNawala%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1644910173191!5m2!1sen!2sus"
            
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </>
);

export default ContactUs;
