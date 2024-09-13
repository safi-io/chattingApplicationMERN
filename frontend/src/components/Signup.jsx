import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  const [userData, setUserData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleRadioButton = (e) => {
    setUserData({ ...userData, gender: e });
  };

  const navigate = useNavigate();

  const handleMainClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:7000/user/register`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.message) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      navigate("/register");
      toast.error(error.response.data.message);
    }

    setUserData({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <>
      <div className="px-4 file:mx-auto w-[500px]">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-white p-4">
            Sign-up Page
          </h1>

          {/* Form for Sign-up */}
          <form action="" onSubmit={handleMainClick}>
            {/* Full Name */}
            <div>
              <label className="label pt-5">
                <span className="text-base label-text text-white font-semibold">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full input input-border h-10"
                value={userData.fullName}
                onChange={(e) =>
                  setUserData({ ...userData, fullName: e.target.value })
                }
              />
            </div>

            {/* Username */}
            <div>
              <label className="label pt-5">
                <span className="text-base label-text text-white font-semibold">
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
                <span className="text-base label-text text-white font-semibold">
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

            {/* Confirm Password */}
            <div>
              <label className="label pt-5">
                <span className="text-base label-text text-white font-semibold">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                className="w-full input input-border h-10"
                placeholder="Confirm Password"
                value={userData.confirmPassword}
                onChange={(e) =>
                  setUserData({ ...userData, confirmPassword: e.target.value })
                }
              />
            </div>

            {/* Gender */}

            <div className="flex items-center my-4">
              {/* Male */}
              <div className="flex items-center ">
                <p className="text-gray-300">Male</p>
                <input
                  type="radio"
                  className="radio radio-info mx-2"
                  name="gender"
                  checked={userData.gender === "male"}
                  onChange={() => handleRadioButton("male")}
                />
              </div>
              {/* Female */}
              <div className="flex items-center ">
                <p className="text-gray-300">Female</p>
                <input
                  type="radio"
                  className="radio radio-info mx-2"
                  name="gender"
                  checked={userData.gender === "female"}
                  onChange={() => handleRadioButton("female")}
                />
              </div>
            </div>

            <div className="flex items-center justify-center mt-2 text-white font-semibold">
              <Link to="/login">
                Already Have an account?{" "}
                <span className="text-white font-bold underline">Login</span>
              </Link>
            </div>

            <div>
              <button
                className="btn btn-block btn-md mt-2 p-2 text-xl text-white border border-slate-700"
                type="submit"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
