import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/navBar/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the mobile menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="z-50 shadow-md w-full fixed top-0 left-0 border-b-4 border-gray-200 bg-white">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between py-4 px-6 lg:px-10 h-[80px]">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-auto h-12" />
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-4 text-white font-semibold 
          lg:static absolute top-[80px] left-0 w-full bg-gray-200 lg:bg-transparent 
          lg:w-auto shadow-md lg:shadow-none transition-all duration-500 ease-in 
          ${menuOpen ? "block" : "hidden lg:flex"}`}
        >
          {[ 
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/products", label: "Our Services" },
            { to: "/team", label: "Team" },
            { to: "/branches", label: "Branches" },
            { to: "/financial-reports", label: "Financial Reports" },
            { to: "/news", label: "News" },
            { to: "/contact", label: "Contact" }


          ].map((item) => (
            <li key={item.to} className="border-b lg:border-none my-4 lg:my-0">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `block px-6 py-2 hover:text-blue-800 transition-all ${
                    isActive ? "text-blue-800 font-bold text-xl" : "text-black"
                  }`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
