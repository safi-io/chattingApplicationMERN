import { Server } from "socket.io";
import http from "http";
import express from "express";

// Create express app
const app = express();

// Create HTTP server using express app
const server = http.createServer(app);

// Initialize Socket.IO with CORS options
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"], // Ensure correct origin (no trailing slash)
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {};

// Handle Socket.IO connections
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId !== undefined) {
    userSocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

// Export both app and server
export { app, io, server };
