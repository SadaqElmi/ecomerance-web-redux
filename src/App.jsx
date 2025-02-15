import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";
import { Route, Routes } from "react-router-dom";
import Carts from "./pages/Carts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/cart" element={<Carts />} />
      </Routes>
    </div>
  );
}

export default App;
