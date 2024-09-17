import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector } from "react-redux";

export default function ChatContainer() {
  const { selectedUser, authUser } = useSelector((store) => store.user);

  return (
    <>
      {selectedUser != null ? (
        <div className="flex flex-col">
          <div className="flex items-center gap-2 p-[9px] w-[60vw] bg-gray-800">
            {/* Avatar Div Starting */}
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profilePhoto} alt="default-image" />
              </div>
            </div>

            {/* Name Div Starting */}
            <div className="flex flex-1">
              <p className="text-white font-bold">{selectedUser?.fullName}</p>
            </div>
          </div>

          <div className="divider px-4"></div>

          {/* Second Component */}

          <Messages />

          {/* Third Component */}

          <SendInput />
        </div>
      ) : (
        <>
          <h1 className="flex items-center justify-center text-white text-3xl font-bold p-10">
            Hi {authUser?.username},
            Start a Conversation by Clicking on any User.
          </h1>
        </>
      )}
    </>
  );
}
