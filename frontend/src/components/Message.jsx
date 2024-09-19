import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Message({ message }) {
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const { authUser, selectedUser } = useSelector((store) => store.user);

  // Checking Message is from Auth User or not

  let isMessageFromAuth = false;
  if (authUser?._id === message?.senderId) {
    isMessageFromAuth = true;
  }

  return (
    <div className="text-white" ref={scroll}>
      <div className={`chat ${isMessageFromAuth ? "chat-end" : "chat-start"} `}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Chat bubble"
              src={
                isMessageFromAuth
                  ? authUser?.profilePhoto
                  : selectedUser?.profilePhoto
              }
            />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-50 text-zinc-50">
            {new Date(message?.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        </div>
        <div
          className={`chat-bubble text-white ${
            !isMessageFromAuth ? "bg-white text-black" : ""
          }`}
        >
          {message?.message}
        </div>
      </div>
    </div>
  );
}
