import React from "react";
import Message from "./Message";
import UseGetMessages from "../hooks/UseGetMessages";
import { useSelector } from "react-redux";

export default function Messages() {
  UseGetMessages();
  const { messages } = useSelector((store) => store.message);
  if (!messages) return;
  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages?.map((message) => {
        return <Message key={message._id} message={message}/>;
      })}
     
    </div>
  );
}
