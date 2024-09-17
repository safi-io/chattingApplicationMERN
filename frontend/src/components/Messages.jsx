import React from "react";
import Message from "./Message";
import UseGetMessages from "../hooks/UseGetMessages";
import { useSelector } from "react-redux";

export default function Messages() {
  UseGetMessages();
  const { messages } = useSelector((store) => store.message);
  return (
    <>
      {messages ? (
        <div className="px-4 flex-1 overflow-auto">
          {messages?.map((message) => {
            return <Message key={message._id} message={message} />;
          })}
        </div>
      ) : (
        <h1 className="flex-1 flex items-center justify-center text-white text-3xl font-black p-10">No Previous Chats with this User.</h1>
      )}
    </>
  );
}
