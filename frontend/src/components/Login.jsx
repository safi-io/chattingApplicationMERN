import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

export default function Login() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMainClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:7000/user/login`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data._id) {
        dispatch(setAuthUser(res.data));
        navigate("/");
        toast.success(`${res.data.fullName} Logged in!`);
      }
    } catch (error) {
      navigate("/login");
      toast.error(error.response.data.message);
    }

    setUserData({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <div className="px-4 file:mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-white p-4">
            Log-in Page
          </h1>

          {/* Form for Sign-up */}
          <form action="" onSubmit={handleMainClick}>
            {/* Username */}
            <div>
              <label className="label pt-5">
                <span className="text-base label-text text-gray-300">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full input input-border h-10"
                value={userData.username}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />
            </div>

            {/* Password */}
            <div>
              <label className="label pt-5">
                <span className="text-base label-text text-gray-300">
                  Password
                </span>
              </label>
              <input
                type="password"
                className="w-full input input-border h-10"
                placeholder="Enter Password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>

            <div className="flex items-center justify-center mt-4">
              <Link to="/register">
                Want to create Account?{" "}
                <span className="text-gray-200">Sign-up</span>
              </Link>
            </div>

            <div>
              <button
                className="btn btn-block btn-md mt-2 p-2 text-xl text-white border border-slate-700"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
