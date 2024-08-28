import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getOtherUsers,
} from "../controllers/user-controller.js";

import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);

router.route("/").get(isAuthenticated, getOtherUsers);

export default router;
