import React, { useState } from "react";
import axios from "axios";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setMessages } from "../redux/messageSlice";

export default function SendInput() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    messageData: "",
  });

  // Getting Data From Redux
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:7000/message/send/${selectedUser?._id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(setMessages([...messages, res?.data?.newMessage]));
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setData({ messageData: "" });
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSendMessage}>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message..."
          className="input border rounded-lg w-full"
          name="messageData"
          value={data.messageData}
          onChange={(e) => setData({ messageData: e.target.value })}
        />
        <button
          className="absolute inset-y-0 end-0 flex items-center text-white text-3xl pr-3"
          type="submit"
        >
          <IoIosSend />
        </button>
      </div>
    </form>
  );
}
