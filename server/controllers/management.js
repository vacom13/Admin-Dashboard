import mongoose from "mongoose";
import User from "../models/User.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({
      role: "admin",
    }).select("-password");
    res.json(admins,200);
  } catch (error) {
    res.json({ message: error.message }, 404);
  }
};
