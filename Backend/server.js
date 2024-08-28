import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/user-route.js";

const PORT = process.env.PORT || 7000;
const app = express();
dotenv.config();
connectDB();

app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute);

app.listen(PORT, () => console.log("Server on", PORT));
