import React from "react";
import Title from "./Title";
import { useState, useEffect, useContext } from "react";
import { foods } from "../assets/data";
import { ShopContext } from "../context/ShopContext";
import Item from "./Item";

function Popular() {
  const { foods } = useContext(ShopContext);
  const [Popularfoods, setPopularfoods] = useState([]);

  useEffect(() => {
    const data = foods.filter((food) => food.popular);
    setPopularfoods(data.slice(0, 5));
  }, [foods]);

  return (
    <section className="max-padd-container py-16">
      <Title
        title1={"Popular"}
        title2={"Foods"}
        titleStyles={"text-center !pb-20"}
        paragraphStyles={"!block"}
      />
      <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-36 pt-20  ">
        {Popularfoods.map((food) => (
          <div key={food._id}>
            <Item food={food} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Popular;
