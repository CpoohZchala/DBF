import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white z-50 shadow-md w-full fixed top-0 left-0 border-b-4 border-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src="/navBar/logo.png" alt="DBF Investment Limited" className="h-12 w-auto" />
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-6 text-black font-medium absolute lg:static top-10 left-0 w-full bg-white lg:w-auto shadow-md lg:shadow-none transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md ${isActive ? "text-blue-700" : "text-black"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md ${isActive ? "text-blue-700" : "text-black"}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="relative">
            <button
              className="flex items-center px-4 py-2 w-full lg:w-auto"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Products <FaChevronDown className="ml-1 text-sm" />
            </button>
            {dropdownOpen && (
              <div className="absolute lg:relative left-0 mt-2 w-full lg:w-40 bg-white shadow-md rounded-md">
                <NavLink to="/products#loans" className="block px-4 py-2 hover:bg-gray-100">
                  Loans
                </NavLink>
                <NavLink to="/products#investments" className="block px-4 py-2 hover:bg-gray-100">
                  Investments
                </NavLink>
              </div>
            )}
          </li>
          <li><NavLink to="/team" className={({ isActive }) =>
            `block px-4 py-2 rounded-md ${isActive ? "text-blue-700" : "text-black"}`
          }>Team</NavLink></li>
          <li><NavLink to="/branches" className={({ isActive }) =>
            `block px-4 py-2 rounded-md ${isActive ? "text-blue-700" : "text-black"}`
          }>Branches</NavLink></li>
          <li><NavLink to="/financial-reports" className={({ isActive }) =>
            `block px-4 py-2 rounded-md ${isActive ? "text-blue-700" : "text-black"}`
          }>Financial Reports</NavLink></li>
          <li><NavLink to="/news" className={({ isActive }) =>
            `block px-4 py-2 rounded-md ${isActive ? "text-blue-700" : "text-black"}`
          }>News</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) =>
            `block px-4 py-2 rounded-md ${isActive ? "text-blue-700" : "text-black"}`
          }>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
