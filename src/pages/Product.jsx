import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/cartSlice";
import Navbar from "../components/Navbar";
import axios from "axios";

function Product() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const AptData = "https://fakestoreapi.com/products";

  const handleGetData = () => {
    axios.get(AptData).then((response) => setData(response.data));
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="p-6 w-full shadow-lg border rounded-2xl bg-white"
              >
                <img
                  className="w-full h-60 object-contain rounded-2xl"
                  src={item.image}
                  alt={item.title}
                />
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-xl text-teal-600 font-bold">${item.price}</p>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="bg-teal-500 text-white mt-2 py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
