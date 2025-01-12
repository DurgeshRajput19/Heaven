import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import Navbar from "./Navbar";
import { CgMenuLeft } from "react-icons/cg";
import { TbUserCircle, TbArrowNarrowRight } from "react-icons/tb";
import { RiUserLine, RiShoppingBag4Line } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const [MenuOpened, setMenuOpened] = useState(false);
  const { token, settoken, navigate, getCartCount } = useContext(ShopContext);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    settoken("");
  };

  return (
    <header className="py-3 w-full absolute top-0 left-0 right-0 z-50 bg-white">
      <div className="max-padd-container flexBetween">
        <Link className="bold-24 flex-1 flex" to="/">
          <img
            className="hidden sm:flex w-16 h-16"
            src={logo}
            alt="logo"
            height={3}
          />
          <span className="text-secondary pl-2">FlavourHeaven</span>
        </Link>

        <div className="flex-1">
          <Navbar
            MenuOpened={MenuOpened}
            toggleMenu={toggleMenu}
            containerStyles={`${
              MenuOpened
                ? "flex flex-col gap-y-12 h-screen w-[260px] absolute left-0 top-0 bg-white z-50 px-10 shadow-xl py-4  "
                : "hidden xl:flex gap-x-5 xl:gap-x-8 medium-15 rounded-full px-2 py-1"
            }`}
          />
        </div>
        <div className="flex-1 flex items-center justify-end gap-x-3 sm:gap-x-10 ">
          {!MenuOpened && (
            <CgMenuLeft
              className="text-2xl xl:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          )}
          <Link to={"/cart"} className="flex relative">
            <RiShoppingBag4Line className="text-2xl" />
            <span className="bg-secondary text-white medium-16 absolute left-3.5 -top-2.5 flexCenter w-4 h-4 rounded-full shadow-inner ">
              {getCartCount()}
            </span>
          </Link>
          <div className="group relativela">
            <div
              onClick={() => !token && navigate("/login")}
              className="flex items-center gap-x-2 cursor-pointer"
            >
              {token ? (
                <div className="my-[9px]">
                  <TbUserCircle className="text-[29px] cursor-pointer]" />
                </div>
              ) : (
                <button className="btn-ouyline !border-none flexCenter gap-x-2 ">
                  Login <RiUserLine className="text-xl" />{" "}
                </button>
              )}
            </div>
            {token && (
              <>
                <ul className="bg-white shadow-sm p-2 w-32 ring-1 ring-slate-900/15 rounded absolute right-0 top-10 hidden group-hover:flex flex-col">
                  <li
                    onClick={() => navigate("/order")}
                    className="flexBetween cursor-pointer"
                  >
                    <p>Orders</p>
                    <TbArrowNarrowRight className="opacity-50 text-[19px]" />
                  </li>
                  <hr className="my-2" />
                  <li onClick={logout} className="flexBetween cursor-pointer">
                    <p>Logout</p>
                    <TbArrowNarrowRight />
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
