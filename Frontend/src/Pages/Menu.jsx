import { useContext, useEffect, useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { categories } from "../assets/data";
import Title from "../Components/Title";
import Item from "../Components/Item";
import { ShopContext } from "../context/ShopContext";
import Footer from "../Components/Footer";

const Menu = () => {
  const { foods } = useContext(ShopContext);
  const [category, setcategory] = useState([]);
  const [sortType, setsortType] = useState("relevant");
  const [filterFoods, setfilterFoods] = useState([]);
  const [showCategory, setshowCategory] = useState(false);
  const [search, setsearch] = useState("");

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilters = () => {
    let filtered = [...foods];

    if (search) {
      filtered = filtered.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length) {
      filtered = filtered.filter((food) => category.includes(food.category));
    }
    return filtered;
  };

  const applySorting = (foodsList) => {
    const sortedFoods = [...foodsList];

    switch (sortType) {
      case "Low":
        return sortedFoods.sort((a, b) => {
          const aPrice = Object.values(a.price)[0];
          const bPrice = Object.values(b.price)[0];
          return aPrice - bPrice;
        });

      case "High":
        return sortedFoods.sort((a, b) => {
          const aPrice = Object.values(a.price)[0];
          const bPrice = Object.values(b.price)[0];
          return bPrice - aPrice;
        });

      default:
        return sortedFoods;
    }
  };

  const toggleShowCategories = () => {
    setshowCategory(!showCategory);
  };

  useEffect(() => {
    let filtered = applyFilters();
    let sorted = applySorting(filtered);
    setfilterFoods(sorted);
  }, [category, sortType, foods, search]);

  return (
    <section className="max-padd-container mt-36">
      <div className="w-full max-w-2xl flexCenter">
        <div className="inline-flex items-center justify-center bg-white overflow-hidden w-full rounded-full p-4 px-5">
          <div className="text-lg cursor-pointer">
            <RiSearch2Line />
          </div>
          <input
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            className="border-none outline-none  w-full text-sm pl-4"
            type="text"
            placeholder="Search here...."
          />
          <div
            onClick={toggleShowCategories}
            className="flexCenter cursor-pointer text-lg border-1 pl-2"
          >
            <LuSettings2 />
          </div>
        </div>
      </div>

      {showCategory && (
        <div className="my-14">
          <h3 className="h4 mb-4 hidden sm:flex">Categories</h3>
          <div className="flexCenter sm:flexStart flex-wrap gap-x-12 gap-y-4">
            {categories.map((item) => (
              <label key={item.name}>
                <input
                  value={item.name}
                  onChange={(e) => toggleFilter(e.target.value, setcategory)}
                  type="checkbox"
                  className="hidden peer"
                />
                <div className="flexCenter flex-col gap-2 peer-checked:text-secondary cursor-pointer">
                  <div className="bg-white h-20 w-20 flexCenter rounded-full ">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover h-10 w-10"
                    />
                  </div>
                  <span className="medium-14">{item.name}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="my-8 mb-20">
        <div className="flexBetween !items-center gap-7 flex-wrap pb-10 max-sm:flexCenter text-center max-sm:pb-24">
          <Title
            title1={"Our"}
            title2={"Food List"}
            titleStyles={" !pb-20"}
            title1Styles={"font-bold"}
            paragraphStyles={"!block"}
          />
          <div className="flexCenter gap-x-2">
            <span className="hidden sm:flex medium-16">Sort by:</span>
            <select
              onChange={(e) => setsortType(e.target.value)}
              className=" text-sm p-2.5 outline-none bg-white text-gray-30 rounded cursor-pointer"
            >
              <option value="Relevant">Relevant</option>
              <option value="Low">Low</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-36 mt-10 xl:mt-14  ">
          {filterFoods.map.length > 0 ? (
            filterFoods.map((food) => <Item food={food} key={food._id} />)
          ) : (
            <p className="capitalize">No foods found for selected filters</p>
          )}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Menu;
