import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <h1 className="text-5xl font-bold text-center text-white p-4">
            Sign-up Page
          </h1>

          {/* Form for Sign-up */}
          <form action="">
            {/* Full Name */}
            <div>
              <label className="label pt-5">
                <span className="text-base label-text text-gray-300">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full input input-border h-10"
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
                placeholder="johndoe123"
                className="w-full input input-border h-10"
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
              />
            </div>

            {/* Gender */}

            <div className="flex items-center my-4">
              {/* Male */}
              <div className="flex items-center ">
                <p className="text-gray-300">Male</p>
                <input
                  type="checkbox"
                  className="checkbox checkbox-info mx-2"
                />
              </div>
              {/* Female */}
              <div className="flex items-center ">
                <p className="text-gray-300">Female</p>
                <input
                  type="checkbox"
                  className="checkbox checkbox-info mx-2"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Link to="/login">
                Already Have an account?{" "}
                <span className="text-gray-200">Login</span>
              </Link>
            </div>

            <div>
              <button className="btn btn-block btn-md mt-2 p-2 text-xl text-white border border-slate-700">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
