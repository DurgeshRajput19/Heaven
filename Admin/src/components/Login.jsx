import React, { useState } from "react";
import loginImg from "../assets/process2.jpg";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <section className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      <div className="flex h-full w-full">
        <div className="hidden w-1/2 sm:block">
          <img src={loginImg} alt="" className="object-cover h-full w-full " />
        </div>

        <div className="flexCenter w-full sm:w-1/2">
          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800"
          >
            <div className="w-full mb-4">
              <h3 className="bold-36">Login</h3>
              <div className="w-full ">
                <label className="medium-15" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                />
              </div>
              <div className="w-full">
                <label className="medium-15" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-dark mt-5 !py-[7px] !rounded   "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
