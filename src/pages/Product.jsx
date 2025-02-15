import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function Product() {
  const [data, setData] = useState([]);
 
  const AptData = "https://fakestoreapi.com/products";

  const handleGetData = () => {
    axios
      .get(AptData)
      .then((response) => {
        setData(response.data);
      })
      .catch((Error) => console.log(Error));
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-5">
            <h1 className="text-4xl font-bold text-gray-800 text-center md:text-left mb-4 md:mb-0">
              Products
            </h1>
            <input
              className="border-2 border-gray-400 rounded-xl px-4 py-2 text-xl outline-none focus:ring-4 focus:ring-teal-500 transition duration-300 w-full md:w-[300px] shadow-md bg-white"
              type="text"
              placeholder="Search for products..."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {data.map((item) => {
              return (
                <div className="p-6 w-full shadow-lg border border-gray-200 rounded-2xl bg-white transition transform hover:scale-105 hover:shadow-xl duration-300">
                  <img
                    className="w-full h-60 object-cover rounded-2xl mb-4 hover:opacity-90 transition duration-300"
                    src={item.image}
                    alt="Product"
                  />
                  <div className="flex justify-between mb-3">
                    <h2 className="text-lg font-semibold text-gray-800 truncate">
                      {item.title}
                    </h2>
                    <p className="text-xl text-teal-600 font-bold">
                      ${item.price}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 hover:shadow-lg transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
