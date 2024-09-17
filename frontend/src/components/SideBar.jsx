import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setOtherUsers } from "../redux/userSlice";
import OtherUsers from "./OtherUsers";

export default function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [shallowAllUsers, setShallowAllUsers] = useState([]);

  // Getting Same Data from Redux Two Times, Because No re-renders in Second One.
  const { otherUsers } = useSelector((store) => store.user);
  const allUsers = useSelector((store) => store.user.otherUsers);

  const logoutUser = async () => {
    try {
      const res = await axios.post(`http://localhost:7000/user/logout`, {
        withCredentials: true,
      });
      navigate("/login");
      toast.success("User Logged Out.");
      dispatch(setAuthUser(null));
    } catch (error) {
      toast.error("Unable to Logged Out.");
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setShallowAllUsers(allUsers);

    // If the search input is blank, show all users
    if (!search.trim()) {
      setShallowAllUsers(allUsers);
      dispatch(setOtherUsers(shallowAllUsers)); // Reset to the full user list
      return;
    }

    // If there is a search query, filter the users
    const searchQuery = otherUsers?.filter((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (searchQuery?.length > 0) {
      dispatch(setOtherUsers(searchQuery));
    } else {
      toast.error("User not Found in the Database.");
    }
  };

  return (
    <div className="border-r border-slate-500 flex flex-col relative pt-4">
      <form onSubmit={searchHandler} className="flex items-center gap-1 px-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
