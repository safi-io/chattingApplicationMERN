import React from "react";
import { useSelector } from "react-redux";

export default function Message({ message }) {
  const { authUser } = useSelector((store) => store.user);
  console.log(authUser);

  return (
    <div className="text-white">
      <div
        className={`chat ${
          authUser?._id === message?.senderId ? "chat-end" : "chat-start"
        } `}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-50 text-zinc-50">12:45</time>
        </div>
        <div className="chat-bubble text-white">{message?.message}</div>
      </div>
    </div>
  );
}
