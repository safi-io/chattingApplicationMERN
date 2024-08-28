import user from "../models/user-model.js";
import bcrypt from "bcryptjs";

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
  }
};
