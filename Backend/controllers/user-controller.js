import user from "../models/user-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    // Checking that no field is empty.
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Checking that pass & confirmPass are same.
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "Password and Confirm Password must be same." });
    }

    // Checking if username already exists.
    const userData = await user.findOne({ username });
    if (userData) {
      return res.status(400).json({ message: "Username already exist." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Profile Photo
    const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    await user.create({
      username,
      fullName,
      password: hashedPassword,
      gender,
      profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
    });

    return res.status(201).json({ message: `User Created. ${username}` });
  } catch (error) {
    console.log(`Error in User Controller : ${error}`);
    return res.status(400).json(`${error}`);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Checking that no field is empty.
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Finding User in Database
    const userData = await user.findOne({ username });
    if (!userData) {
      return res
        .status(404)
        .json({ message: "Incorrect Username or Password", status: false });
    }

    const isPasswordMatch = await bcrypt.compare(password, userData.password);
    if (!isPasswordMatch) {
      return res
        .status(404)
        .json({ message: "Incorrect Username or Password", status: false });
    }

    const tokenData = {
      userId: userData._id,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        ...userData._doc,
        password: undefined,
        createdAt: undefined,
        updatedAt: undefined,
      });
  } catch (error) {
    console.log(`Error in User Controller : ${error}`);
    return res.status(400).json(`${error}`);
  }
};

export const logoutUser = (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "User Logged out." });
  } catch (error) {
    console.log(`Error in User Controller : ${error}`);
    return res.status(400).json(`${error}`);
  }
};

export const getOtherUsers = async (req, res) => {
  const loggedInUserId = req.id;
  const otherUsers = await user
    .find({ _id: { $ne: loggedInUserId } })
    .select("-password");
  return res.status(200).json(otherUsers);
};
