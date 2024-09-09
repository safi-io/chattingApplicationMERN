import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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

  const handleMainClick = async (e) => {
    e.preventDefault();
    console.log(userData);

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
      console.log(res);
    } catch (error) {
      console.log("Error in Sign-up Submission.", error);
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
      <div className="px-4 file:mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-white p-4">
            Sign-up Page
          </h1>

          {/* Form for Sign-up */}
          <form action="" onSubmit={handleMainClick}>
            {/* Full Name */}
            <div>
              <label className="label pt-5">
                <span className="text-base label-text text-gray-300">
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

            {/* Confirm Password */}
            <div>
              <label className="label pt-5">
                <span className="text-base label-text text-gray-300">
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
                  onChange={() => handleRadioButton("female")}
                />
              </div>
            </div>

            <div className="flex items-center justify-center mt-2">
              <Link to="/login">
                Already Have an account?{" "}
                <span className="text-gray-200">Login</span>
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
