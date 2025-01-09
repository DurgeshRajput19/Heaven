import React from "react";
import shipping from "../assets/fast-delivery.png";
import hot from "../assets/cooking.png";
import fresh from "../assets/fresh-food.png";
import hat from "../assets/chef.png";

function Features() {
  return (
    <section className="max-padd-container py-16 xl:py-28 !pb-12">
      <div className="max-padd-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-12">
        <div className="flexCenter flex-col gap-3">
          <img src={shipping} alt="" height={55} width={44} />
          <div className="flexCenter flex-col ">
            <h5 className="h5">Fast Delivery</h5>
            <hr className="w-8 bg-secondary h-1 rounded-full border-none  " />
          </div>
          <p className="text-center">
            Get your order quickly with our reliable and efficient service
          </p>
        </div>
        <div className="flexCenter flex-col gap-3">
          <img src={fresh} alt="" height={55} width={44} />
          <div className="flexCenter flex-col ">
            <h5 className="h5">Fresh Food</h5>
            <hr className="w-8 bg-secondary h-1 rounded-full border-none  " />
          </div>
          <p className="text-center">
            Get Fresh and tasty food delivered to your doorstep
          </p>
        </div>
        <div className="flexCenter flex-col gap-3">
          <img src={hot} alt="" height={55} width={44} />
          <div className="flexCenter flex-col ">
            <h5 className="h5">Hot Food</h5>
            <hr className="w-8 bg-secondary h-1 rounded-full border-none  " />
          </div>
          <p className="text-center">
            Enjoy your food hot and delicious, straight from our kitchen to your
            table
          </p>
        </div>
        <div className="flexCenter flex-col gap-3">
          <img src={hat} alt="" height={55} width={44} />
          <div className="flexCenter flex-col ">
            <h5 className="h5">Expert chef</h5>
            <hr className="w-8 bg-secondary h-1 rounded-full border-none  " />
          </div>
          <p className="text-center">
            Our team of expert chefs work hard to bring you the best dishes
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
