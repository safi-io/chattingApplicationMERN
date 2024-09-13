import React from "react";
import { IoIosSend } from "react-icons/io";


export default function SendInput() {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Write a message..."
          className="input border rounded-lg w-full"
        />
        <button className="absolute inset-y-0 end-0 flex items-center text-white text-3xl pr-3"><IoIosSend /></button>
      </div>
    </form>
  );
}
