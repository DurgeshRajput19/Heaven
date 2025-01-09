import React, { useEffect, useState, useContext } from "react";
import Footer from "../Components/Footer"
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import Title from "../Components/Title";

const Order = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setorderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        // console.log(allOrdersItem);
        setorderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log("helloo");
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <section className="max-padd-container mt-24">
      <div className="pt-6 pb-20">
        <Title title1={"Orders"} title2={" List"} titleStyles={"h3"} />
        {orderData.map((item, i) => {
          return (
            <div key={i} className="p-2 rounded-xl bg-white mt-2">
              <div className="text-gray-700 flex flex-col gap-4">
                <div className="flex flex-x-3 w-full">
                  <div className="flexCenter p-2 bg-primary">
                    <img
                      src={item.image}
                      alt=""
                      className="w-20 h-fit sm:w-18"
                    />
                  </div>
                  <div className="block w-full">
                    <h5 className="h5 capitalize line-clamp-1">{item.name}</h5>
                    <div className="flex gap-x-2 sm:flex-row sm:justify-between">
                      <div className="text-xs">
                        <div className="flex items-center gap-x-2 sm:gap-x-3">
                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Price:</h5>
                            <p>
                              {currency}
                              {item.price[item.size]}
                            </p>
                          </div>
                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Quantity:</h5>
                            <p>{item.quantity}</p>
                          </div>
                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Size:</h5>
                            <p>{item.size}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-x-2 ">
                          <h5 className="medium-14">Date:</h5>
                          <p>{new Date(item.date).toDateString()}</p>
                        </div>
                        <div className="flex items-center gap-x-2 ">
                          <h5 className="medium-14">Payment:</h5>
                          <p>{item.paymentMethod}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 sm:pr-4">
                        <div className="flex items-center gap-2">
                          <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                          <p className="max-sm:text-xs">{item.status}</p>
                        </div>
                        <button onClick={loadOrderData} className="btn-secondary !p-1 !px-3 !text-xs">
                          Track Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    </section>
  );
};

export default Order;
