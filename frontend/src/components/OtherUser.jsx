import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

export default function OtherUser({ user }) {
  // To highlight Current User
  const dispatch = useDispatch();

  const { selectedUser } = useSelector((store) => store.user);

  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  return (
    <>
      <div
        onClick={() => selectedUserHandler(user)}
        className={`  ${
          selectedUser?._id === user?._id ? "bg-gray-500" : ""
        }  flex items-center gap-2 cursor-pointer rounded-md p-2 hover:bg-gray-800`}
      >
        {/* Avatar Div Starting */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={user.profilePhoto} alt="user-profile-image" />
          </div>
        </div>
        {/* Avatar Div Ending */}

        {/* Name Div Starting */}
        <div className="flex flex-col flex-1">
          <p className="text-white">{user.fullName}</p>
        </div>
        {/* Name Div Ending */}
      </div>
      <div className="bg-zinc-700 h-[.1px] m-2"></div>
    </>
  );
}
