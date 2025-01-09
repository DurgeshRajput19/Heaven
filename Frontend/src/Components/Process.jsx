import React from "react";
import { GiCheckMark } from "react-icons/gi";
import process1 from "../assets/process1.jpg";
import process2 from "../assets/process2.jpg";

function Process() {
  return (
    <section className="max-padd-container py-16 xl:py-20 !pb-12">
      <div className="flex flex-col gap-20 xl:flex-row ">
        <div className="flex flex-col justify-center ">
          <h4 className="h4 max-w-[411px]  ">
            Order your favorite food from our menu and get it in few minutes.
          </h4>
          <p>
            Experience our food with great taste and quality. We provide the
            best food in the town.Browse our menu and select your favorite
            dishes.
          </p>
          <div className="flex flex-col gap-4 my-7">
            <div className="flexStart gap-x-4 ">
              <span className="bg-secondary text-white h-6 w-6 p-1.5 flexCenter rounded-full">
                <GiCheckMark className="" />
              </span>
              <p>Add the selected items to your cart.</p>
            </div>
            <div className="flexStart gap-x-4 ">
              <span className="bg-secondary text-white h-6 w-6 p-1.5 flexCenter rounded-full">
                <GiCheckMark className="" />
              </span>
              <p>Proceed to checkout and enter your delivery details.</p>
            </div>
            <div className="flexStart gap-x-4 ">
              <span className="bg-secondary text-white h-6 w-6 p-1.5 flexCenter rounded-full">
                <GiCheckMark className="" />
              </span>
              <p>Make the payment through our secure payment gateway.</p>
            </div>
            <div className="flexStart gap-x-4 ">
              <span className="bg-secondary text-white h-6 w-6 p-1.5 flexCenter rounded-full">
                <GiCheckMark className="" />
              </span>
              <p>Receive your order confirmation and track your delivery.</p>
            </div>
            <div className="flexStart gap-x-4 ">
              <span className="bg-secondary text-white h-6 w-6 p-1.5 flexCenter rounded-full">
                <GiCheckMark className="" />
              </span>
              <p>Enjoy your delicious meal delivered to your doorstep.</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex gap-6 xl:gap-12 ">
          <div cl>
            <img src={process2} alt="" className="rounded-xl" />
          </div>
          <div className="relative top-8 ">
            <img src={process1} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
