import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

type IconStyle = {
    position: "absolute";
    fontSize: string;
    color: string;
};

const Footer: React.FC = () => {
    const iconStyle: IconStyle = {
        position: "absolute",
        fontSize: "clamp(40px, 5vw, 70px)",
        color: "rgba(255, 255, 255, 0.05)",
    };

    return (
        <footer className="relative max-w-[1600px] mx-auto w-full text-white overflow-hidden"
  style={{ backgroundColor: "#080840" }}>
  <div className="container mx-auto px-8 py-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h5 className="font-bold text-lg mb-4 text-white">About DBF</h5>
        <img src="/navBar/logo.png" alt="DBF Investment Limited" className="h-11 w-auto" />
        <p className="text-sm leading-relaxed">
          Secure your future by investing in our <br /> company and enjoy consistent long-term profits <br />with trusted growth.
        </p>
      </div>
      <div>
        <h5 className="font-bold text-lg mb-4 text-white">Quick Links</h5>
        <ul className="space-y-2 text-sm">
          <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
          <li><Link to="/branches" className="hover:text-white">Branches</Link></li>
          <li><Link to="/products#loans" className="hover:text-white">Loans</Link></li>
          <li><Link to="/products#investments" className="hover:text-white">Investments</Link></li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold text-lg mb-4 text-white">Get In Touch</h5>
        <ul className="space-y-3">
          <li className="flex items-center gap-2"><FaMapMarkerAlt /> No. 402, 4th Floor, Paramount Tower, 9th Lane, Nawala</li>
          <li className="flex items-center gap-2"><FaPhone /> +94743908274 / +94702896932</li>
          <li className="flex items-center gap-2"><FaEnvelope /> info@dearoagricapitalventure.com</li>
          <li className="flex items-center gap-2"><FaClock /> 8:30 AM - 5:30 PM</li>
        </ul>
      </div>
    </div>
    <hr className="border-gray-700 my-6" />
    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
      <p>&copy; 2025 DBF. All Rights Reserved.</p>
      <div className="flex space-x-6">
        <a href="https://web.facebook.com/search/top?q=dearo%20investment%20limited" target="_blank" className="hover:text-yellow-500"><i className="fab fa-facebook-f text-xl"></i></a>
        <a href="https://twitter.com" target="_blank" className="hover:text-yellow-500"><i className="fab fa-twitter text-xl"></i></a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-yellow-500"><i className="fab fa-linkedin-in text-xl"></i></a>
        <a href="https://instagram.com" target="_blank" className="hover:text-yellow-500"><i className="fab fa-instagram text-xl"></i></a>
      </div>
    </div>
  </div>
</footer>

    );
};

export default Footer;
