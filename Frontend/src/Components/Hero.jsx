import React from "react";
import { LuPizza } from "react-icons/lu";
import { MdOutlineShareLocation } from "react-icons/md";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="mx-auto max-w-[1440px]  ">
      <div className="relative bg-hero bg-cover bg-center bg-no-repeat h-[700px] w-full ">
        <div className="max-padd-container relative top-36 sm:top-72 text-white">
          <h1 className="max-w-[44rem] capitalize  ">
            Savor the Taste of Freshness,
            <span className="text-black">
              
              Delivered to Your Doorstep!
            </span>
          </h1>
          <p className="text-white regular-16 mt-6 max-w-[33rem]">
            We’re thrilled to have you here at FlavourHeaven, your one-stop
            destination for the freshest, tastiest, and most irresistible food
            products. Whether you're looking for wholesome ingredients, gourmet
            delights, or quick snacks to satisfy your cravings, we've got you
            covered! Our mission is to bring the finest flavors from around the
            world right to your doorstep.
          </p>
          <div className="flexStart !items-center gap-x-4 my-10">
            <div className="flex relative">
              <img
                src={client1}
                alt=""
                className="h-[46px] shadow-sm rounded-full  "
              />
              <img
                src={client2}
                alt=""
                className="h-[46px] shadow-sm rounded-full absolute left-8 "
              />
              <img
                src={client3}
                alt=""
                className="h-[46px] shadow-sm rounded-full absolute left-16  "
              />
            </div>
            <div className="bold-16 sm:bold-24 ml-14 relative top-1">
              176k{" "}
              <span className="regular-16 sm:regular-20 ">
                Excellent Reviews
              </span>
            </div>
          </div>
          <div className="max-xs:flex-col flex gap-2">
            <NavLink className="btn-white flexCenter gap-x-2 ">
              <LuPizza className="text-xl" />
              Shop now
            </NavLink>
            <NavLink className="btn-white flexCenter gap-x-2 ">
              <MdOutlineShareLocation className="text-xl" />
              Track Order
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
