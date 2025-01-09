import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

function CartTotal() {
  const { currency, getcartAmount, delicery_charge } = useContext(ShopContext);

  return (
    <div className="w-full ">
      <Title title1={"Cart"} title2={"Total"} titleStyles={"h3"} />
      <div className="flexBetween pt-3">
        <h5 className="h5">SubTotal:</h5>
        <p className="h5">
          {currency}
          {getcartAmount()}.00
        </p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
      <div className="flexBetween pt-3">
        <h5 className="h5">
          Shipping Fee:
          <p className="h5">
            {getcartAmount() === 0
              ? "0.00"
              : `${currency} ${delicery_charge}.00`}
          </p>
        </h5>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
      <div className="flexBetween pt-3">
        <h5 className="h5">Total:</h5>
        <p className="h5">
          {currency}
          {getcartAmount() === 0 ? "0.00" : getcartAmount() + delicery_charge}
          .00
        </p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
    </div>
  );
}

export default CartTotal;
