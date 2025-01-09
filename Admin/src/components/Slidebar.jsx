import React from "react";
import { NavLink } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import { MdFactCheck } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const Slidebar = ({ token, setToken }) => {
  return (
    <div className="max-sm:flexCenter max-xs:pb-3 rounded bg-white pb-3 sm:w-1/5 sm:min-h-screen">
      <div className="flex max-sm:items-center sm:flex-col pt-5">
        <div className="flex sm:flex-col gap-x-5 gap-y-8 sm:pt-10 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"
            }
            to={"/"}
          >
            <FaSquarePlus />
            <div className="hidden lg:flex " >Add Items</div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"
            }
            to={"/list"}
          >
            <FaListAlt />
            <div className="hidden lg:flex " >List Items</div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"
            }
            to={"/orders"}
          >
            <MdFactCheck />
            <div className="hidden lg:flex " >Orders</div>
          </NavLink>
        </div>
        <div className="max-sm:ml-5 sm:mt-80" >
          {token && (
            <button onClick={()=> setToken('')} className="flexStart gap-x-2 sm:pl-12 p-5 medium-15 text-red-500 cursor-pointer h-10 rounded-xl" >
              <BiLogOut className="text-lg" />
              <div className="hidden lg:flex" >LogOut</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
