import React from "react";
import SideBar from "./SideBar";
import ChatContainer from "./ChatContainer";

export default function HomePage() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg  overflow-hidden bg-gray-900 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
      <ChatContainer />
    </div>
  );
}
