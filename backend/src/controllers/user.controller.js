import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const getUsers = async (req, res) => {
  try {
    // find
    const users = await User.find().select("-password"); //User is the model. exclude password field from GET
    res.status(200).json(users);
  } catch (error) {
    console.error(`Error in getUsers: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { displayName, username, password } = req.body;

    // validate if req body is missing some field
    if (!displayName || !username || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // validate if username is unique
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already taken." });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // save to db
    const user = await User.create({
      displayName,
      username,
      password: hashedPassword,
    });

		// return status and response without the hashed password
		const { password: _, ...data} = user.toObject();

    // count total user
    const totalUsers = await User.countDocuments();
    res.status(201).json({data, totalUsers});

  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = (req, res) => {
  res.status(200).json({ message: "User updated succesfully!" });
};

export const deleteUser = (req, res) => {
  res.status(200).json({ message: "User deleted succesfully!" });
};
