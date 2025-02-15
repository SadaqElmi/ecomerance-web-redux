import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartCount = useSelector((state) => state.cart.cartCount);

  return (
    <nav className="bg-[#1f3d56] text-white p-4 flex justify-between items-center">
      <div className="text-3xl font-bold">
        E-<span className="text-teal-400">suuq</span>
      </div>

      <ul className="flex gap-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/ContactForm">Contact</NavLink>
      </ul>

      <NavLink to="/cart" className="relative">
        <i className="fas fa-shopping-cart text-3xl"></i>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {cartCount}
        </span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
