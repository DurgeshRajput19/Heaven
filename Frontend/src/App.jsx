import React from "react";
import Header from "./Components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu.jsx";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import Verify from "./Pages/Verify";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <main className="overflow-hidden text-[#404040] bg-primary">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/order" element={<Order />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </main>
  );
};

export default App;
