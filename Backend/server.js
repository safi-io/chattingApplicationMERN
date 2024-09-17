import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/user-route.js";
import messageRoute from "./routes/message-route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js"; // Import the app and server

const PORT = process.env.PORT || 7000;
dotenv.config();
connectDB();

// Middlewares
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

// Routes
app.use("/user", userRoute);
app.use("/message", messageRoute);

// Start the server using the server created in socket.js
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
