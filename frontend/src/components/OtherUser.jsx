import React from "react";

export default function OtherUser(props) {
  const user = props.user;
  return (
    <div>
      <div className="flex items-center gap-2 cursor-pointer rounded-md p-2 hover:bg-slate-500">
        {/* Avatar Div Starting */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src={user.profilePhoto}
              alt="user-profile-image"
            />
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
    </div>
  );
}
