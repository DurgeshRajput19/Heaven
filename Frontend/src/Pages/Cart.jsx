import { useContext, useEffect, useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { ShopContext } from "../context/ShopContext";
import { FaRegWindowClose, FaMinus, FaPlus } from "react-icons/fa";
import Footer from "../Components/Footer";

const Cart = () => {
  const { foods, cartItmes, currency, navigate, updateQuantity } =
    useContext(ShopContext);

  const [cartData, setcartData] = useState([]);
  const [quantites, setquantites] = useState([]);

  useEffect(() => {
    if (foods.length > 0) {
      const tempData = [];
      const initialQuantites = {};
      for (const items in cartItmes) {
        for (const item in cartItmes[items]) {
          if (cartItmes[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItmes[items][item],
            });
            initialQuantites[`${items}-${item}`] = cartItmes[items][item];
          }
        }
      }
      setcartData(tempData);
      setquantites(initialQuantites);
    }
  }, [cartItmes, foods]);

  const incement = (id, size) => {
    const key = `${id}-${size}`;
    const newvalue = quantites[key] + 1;
    setquantites((prev) => ({ ...prev, [key]: newvalue }));
    updateQuantity(id, size, newvalue);
  };
  const decement = (id, size) => {
    const key = `${id}-${size}`;
    if (quantites[key] > 1) {
      const newvalue = quantites[key] - 1;
      setquantites((prev) => ({ ...prev, [key]: newvalue }));
      updateQuantity(id, size, newvalue);
    }
  };

  return (
    <section className="max-padd-container mt-24">
      <div className="pt-6">
        <Title title1={"Cart"} title2={" List"} titleStyles={"h3"} />
        <div>
          {cartData.map((item, i) => {
            const productData = foods.find(
              (product) => product._id === item._id
            );
            const key = `${item._id}-${item.size}`;
            return (
              <div key={i} className="p-2 rounded-xl bg-white mt-2">
                <div className="flex items-center gap-x-3">
                  <div className="flex items-center gap-6 p-2 bg-primary rounded-xl">
                    <img
                      src={productData.image}
                      className="w-16  sm:w-18"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flexBetween">
                      <h5 className="h5 !my-0 line-clamp-1">
                        {productData.name}
                      </h5>
                      <FaRegWindowClose
                        onClick={() => updateQuantity(item._id, item.size, 0)}
                        className="cursor-pointer text-secondary"
                      />
                    </div>
                    <p className="bold-14 my-0.5">{item.size}</p>
                    <div className="flexBetween">
                      <div className="flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-primary">
                        <button
                          onClick={() => decement(item._id, item.size)}
                          className="p-1.5 bg-white text-secondary rounded-full shadow-md "
                        >
                          <FaMinus className="text-xs" />
                        </button>
                        <p className="px-2 ">{quantites[key]}</p>

                        <button className="p-1.5 bg-white text-secondary rounded-full shadow-md ">
                          <FaPlus
                            onClick={() => incement(item._id, item.size)}
                            className="text-xs"
                          />
                        </button>
                      </div>
                      <h4 className="h4">
                        {currency}
                        {productData.price[item.size]}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />

            <button
              className="btn-dark mt-7"
              onClick={() => navigate("/place-order")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Cart;
