import React, { useEffect, useRef } from "react";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import PrivateRouter from "./components/PrivateRouter";
import io from "socket.io-client";

// Browser Router Configurations
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOnlineUsers } from "./redux/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRouter />,
    children: [
      {
        path: "/",
        element: <HomePage />, // HomePage will be rendered if authenticated
      },
    ],
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default function App() {
  const { authUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const socketRef = useRef(null);

  useEffect(() => {
    if (authUser && !socketRef.current) {
      // Initialize the socket connection when the user is authenticated
      socketRef.current = io("http://localhost:7000", {
        query: { userId: authUser._id },
      });

      socketRef.current.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });

      // Cleanup: Close the socket connection when the component unmounts or user logs out
      return () => {
        if (socketRef.current) {
          socketRef.current.close();
          socketRef.current = null;
        }
      };
    }
    // eslint-disable-next-line
  }, [authUser, dispatch]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}
