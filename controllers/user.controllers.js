const User = require("../models/User");
const bcrypt = require("bcrypt");
const sendEmail = require("../services/emailServices");

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};


// create user
const creatUser = async (req, res) => {
  try {
    const { email, password, ...others } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = generateOTP();

    const newUser = new User({
      email,
      password: hashedPassword,
      otp,
      otpVerified: false,
      otpExpiry: Date.now() + 10 * 60 * 1000,
      ...others,
    });

    await newUser.save();

    // Send OTP via email using the reusable sendEmail function
    const emailSent = await sendEmail(
      email,
      "Verify your account",
      `Your OTP is ${otp}. It is valid for 10 minutes.`
    );

    if (!emailSent) {
      return res.status(500).json({ message: "Error sending OTP email" });
    }

    res.status(200).json({
      message:
        "User created successfully. Please check your email for the OTP.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while creating accout" });
  }
};

// Verify OTP function
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check if the OTP is correct and not expired
    if (user.otp !== otp || user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Update user status to verified
    user.otpVerified = true;
    user.otp = undefined; // Remove OTP after verification
    user.otpExpiry = undefined;
    await user.save();

    res.status(200).json({ message: "OTP verified successfully. Account activated!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while verifying OTP" });
  }
};

 



module.exports = { creatUser,verifyOTP };
