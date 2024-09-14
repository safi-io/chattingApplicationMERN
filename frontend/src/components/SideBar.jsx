import React from "react";
import { FcSearch } from "react-icons/fc";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      const res= await axios.post(
        `http://localhost:7000/user/logout`,
        {
          withCredentials: true,
        }
      );
      navigate("/login");
      toast.success("User Logged Out.");
    } catch (error) {
      toast.error("Unable to Logged Out.");
    }
  };

  return (
    <div className="border-r border-slate-500 flex flex-col relative pt-4">
      <form action="" className="flex items-center gap-1 px-3">
        <input
          type="text"
          className="input input-bordered rounded-md"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="btn btn-circle bg-white hover:bg-slate-300"
        >
          <FcSearch className="w-5 h-5 outline-none" />
        </button>
      </form>

      <div className="divider px-3"></div>

      <OtherUsers />

      <div className="absolute w-full bottom-0">
        <button
          className="btn btn-md btn-error text-white w-full rounded-none"
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
