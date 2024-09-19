import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import io from "socket.io-client";

const useGetRealTimeMessage = () => {
  const { authUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message);
  const dispatch = useDispatch();

  const socketRef = useRef(null);

  useEffect(() => {
    if (authUser && !socketRef.current) {
      socketRef.current = io("http://localhost:7000", {
        query: { userId: authUser._id },
      });

      socketRef.current.on("newMessage", (newMessage) => {
        dispatch(setMessages([...messages, newMessage]));
      });
    }
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
    };
  }, [authUser, messages, dispatch]);

  return socketRef.current;
};

export default useGetRealTimeMessage;
