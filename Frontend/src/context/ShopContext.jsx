import React, { useEffect, useState } from "react";
// import { foods } from "../assets/data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = React.createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delicery_charge = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const [foods, setFoods] = useState([]);
  const [token, settoken] = useState("");
  const [cartItmes, setcartItems] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select the size first");
      return;
    }
    let cartData = structuredClone(cartItmes);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setcartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItmes) {
      for (const item in cartItmes[items]) {
        try {
          if (cartItmes[items][item] > 0) {
            totalCount += cartItmes[items][item];
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItmes);

    cartData[itemId][size] = quantity;
    setcartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getcartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItmes) {
      let filtered = foods.find((food) => food._id === items);
      for (const item in cartItmes[items]) {
        try {
          if (cartItmes[items][item] > 0) {
            totalAmount += filtered.price[item] * cartItmes[items][item];
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      setFoods(response.data.products);

      if (response.data.success) {
        setFoods(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setcartItems(response.data.cartData);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      settoken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
    getProductsData();
  }, []);

  const contextvalue = {
    foods,
    currency,
    navigate,
    cartItmes,
    setcartItems,
    addToCart,
    getCartCount,
    token,
    settoken,
    updateQuantity,
    getcartAmount,
    delicery_charge,
    backendUrl,
  };

  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
