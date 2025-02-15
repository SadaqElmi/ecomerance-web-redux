import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

function Carts() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold my-5">Cart Items</h1>
        {cartItems.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 bg-white rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-contain rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-teal-600 text-xl font-bold">${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <h2 className="text-2xl font-bold mt-5">
            Total Price: ${totalPrice.toFixed(2)}
          </h2>
        )}
      </div>
    </div>
  );
}

export default Carts;
