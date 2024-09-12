import React from "react";
import { FcSearch } from "react-icons/fc";
import OtherUsers from "./OtherUsers";

export default function SideBar() {
  return (
    <div className="border-r  border-slate-500 p-4 flex flex-col">
      <form action="" className="flex items-center gap-1">
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

      <div className="mt-2">
        <button className="btn btn-sm ">Logout</button>
      </div>
    </div>
  );
}
