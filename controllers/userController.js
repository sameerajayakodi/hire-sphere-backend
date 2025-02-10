// get user data

import User from "../models/User.js";

export const getUserData = async (req, res) => {
  const userId = req.auth.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//apply for a job
export const applyForJob = async (req, res) => {
    
};

//get user applied applications
export const getUserJobApplications = async (req, res) => {};

//update user profile (resume)

export const updateUserResume = async (req, res) => {};
