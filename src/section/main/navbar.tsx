import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white z-50 shadow-md w-full fixed top-0 left-0 border-b-4 border-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center lg:mr-auto">
          <img src="/navBar/logo.png" alt="DBF Investment Limited" className="h-12 max-w-[150px] w-auto" />
        </NavLink>


        {/* Mobile Menu Button */}
        <button
          className="mb-6 lg:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-3 text-black font-medium absolute lg:static top-10 left-0 w-full bg-white lg:w-auto shadow-md lg:shadow-none transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden lg:flex"
            }`}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/products", label: "Our Services" },
            { to: "/team", label: "Team" },
            { to: "/branches", label: "Branches" },
            { to: "/financial-reports", label: "Financial Reports" },
            { to: "/news", label: "News" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md ${isActive ? "text-blue-700" : "text-black"}`
                }
                onClick={closeMenu} // Close menu on click
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
