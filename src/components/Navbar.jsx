import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#1f3d56] text-white p-4 flex justify-between items-center px-20 py-10">
      {/* Logo */}
      <div className="text-3xl font-bold">
        E-<span className="text-teal-400">suuq</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex justify-center gap-20">
        <NavLink to="/">
          {" "}
          <li className="hover:text-teal-400 text-3xl cursor-pointer">Home</li>
        </NavLink>

        <NavLink to="/About">
          {" "}
          <li className="hover:text-teal-400 text-3xl cursor-pointer">About</li>
        </NavLink>

        <NavLink to="/products">
          <li className="hover:text-teal-400 text-3xl cursor-pointer">
            Products
          </li>
        </NavLink>

        <NavLink to="/ContactForm">
          <li className="hover:text-teal-400 text-3xl cursor-pointer">
            Contact
          </li>
        </NavLink>
      </ul>

      <div className="relative flex items-center">
        <NavLink to="/cart">
          {" "}
          <i className="fas fa-shopping-cart text-3xl"></i> {/* HTML Icon */}
        </NavLink>

        <span className="absolute -top-6  -right-2 bg-white text-black text-xl font-bold px-1 rounded-full">
          {0}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
