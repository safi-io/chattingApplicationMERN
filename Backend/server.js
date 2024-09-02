import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/user-route.js";
import messageRoute from "./routes/message-route.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 7000;
const app = express();
dotenv.config();
connectDB();

// Middlewares
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);
app.use("/message", messageRoute);

app.listen(PORT, () => console.log("Server on", PORT));
