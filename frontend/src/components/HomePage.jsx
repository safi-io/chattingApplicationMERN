import React from "react";
import SideBar from "./SideBar";
import ChatContainer from "./ChatContainer";

export default function HomePage() {
  return (
    <div className="flex sm:h-[600px] md:h-[650px] rounded-lg  overflow-hidden bg-gray-900 bg-clip-padding backdrop:filter backdrop-blur-3xl bg-opacity-30">
      <SideBar />
      <ChatContainer />
    </div>
  );
}
