import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Slidebar from "./components/Slidebar";
import Login from "./components/Login";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <main>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className="bg-primary text-[#404040]">
          <Header />
          <div className="mx-auto max-w-[1440px] flex flex-col sm:flex-row mt-8 sm:mt-4 ">
            <Slidebar token={token} setToken={setToken} />
            <Routes>
              <Route path="/" element={<Add token={token} />} />
              <Route path="/list" element={<List token={token} />} />
              <Route path="/orders" element={<Orders token={token} />} />
            </Routes>
          </div>
        </div>
      )}
    </main>
  );
};

export default App;
