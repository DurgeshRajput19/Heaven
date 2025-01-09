import { useContext, useState } from "react";
import CartTotal from "../Components/CartTotal";
import Footer from "../Components/Footer";
import Title from "../Components/Title";

import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {
    cartItmes,
    foods,
    getcartAmount,
    backendUrl,
    navigate,
    token,
    setcartItems,
    delicery_charge,
  } = useContext(ShopContext);

  const [method, setmethod] = useState("cod");
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    street: "",
    district: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setformData((data) => ({ ...data, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItmes) {
        for (const item in cartItmes[items]) {
          if (cartItmes[items][item] > 0) {
            const itemInfo = structuredClone(
              foods.find((food) => food._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItmes[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getcartAmount() + delicery_charge,
      };

      try {
        switch (method) {
          case "cod":
            const response = await axios.post(
              `${backendUrl}/api/order/place`,
              orderData,
              { headers: { token } }
            );

            if (response.data.success) {
              setcartItems({});
              navigate("/order");
              toast.success("Order Placed Successfully");
            } else {
              toast.error(response.data.message || "Failed to place order.");
            }
            break;
          default:
            toast.warning("Invalid payment method selected.");
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    } catch (error) {}
  };

  return (
    <section className="max-padd-container mt-24">
      <form onSubmit={onSubmit} className="py-6 ">
        <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
          <div className="flex flex-1 flex-col gap-3 text-[95%]">
            <Title
              title1={"Delivery"}
              title2={"Information"}
              titleStyles={"h3"}
            />
            <div className="flex gap-3 ">
              <input
                onChange={onChangeHandler}
                value={formData.firstName}
                type="text "
                name="firstName"
                placeholder="First Name"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
              />
              <input
                onChange={onChangeHandler}
                value={formData.lastName}
                type="text "
                name="lastName"
                placeholder="Last Name"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
              />
            </div>
            <input
              onChange={onChangeHandler}
              value={formData.email}
              type="email "
              name="email"
              placeholder="Email"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
            />
            <input
              onChange={onChangeHandler}
              value={formData.phone}
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
            />
            <input
              onChange={onChangeHandler}
              value={formData.street}
              type="text"
              name="street"
              placeholder="Street"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
            />
            <div className="flex gap-3">
              <input
                onChange={onChangeHandler}
                value={formData.city}
                type="text "
                name="city"
                placeholder="City"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
              />
              <input
                onChange={onChangeHandler}
                value={formData.district}
                type="text "
                name="district"
                placeholder="District"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
              />
              <input
                onChange={onChangeHandler}
                value={formData.state}
                type="text "
                name="state"
                placeholder="State"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
              />
            </div>
            <div className="flex gap-3">
              <input
                onChange={onChangeHandler}
                value={formData.pincode}
                type="text "
                name="pincode"
                placeholder="Pin code"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
              />
              <input
                onChange={onChangeHandler}
                value={formData.country}
                type="text "
                name="country"
                placeholder="Country"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col">
            <CartTotal />

            <div className="my-6">
              <h3 className="bold-20 mb-5">
                Payment <span className="text-secondary">Method</span>
              </h3>
              <div className="flex gap-3">
                <div
                  onClick={() => setmethod("stripe")}
                  className={`${
                    method === "stripe" ? "btn-secondary" : "btn-light"
                  } !py-1 !px-3 text-xs cursor-pointer `}
                >
                  Stripe
                </div>
                <div
                  onClick={() => setmethod("cod")}
                  className={`${
                    method === "cod" ? "btn-secondary" : "btn-light"
                  } !p-1 !px-3 text-xs cursor-pointer `}
                >
                  Cash on Delivery
                </div>
              </div>
              <div>
                <button type="submit" className="btn-dark !rounded">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Footer />
    </section>
  );
};

export default PlaceOrder;
