// Authentication Controller
const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require ("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully",
        data: {
            id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
        }
     });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login user with remember me functionality
const login = async (req, res) => {
  const { email, password, remember_me } = req.body;

  // Validate required fields
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Check if user exists
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    
    if (user.rows.length === 0) {
      return res.status(400).json({ message: "User do not exist" });
    }

    // Verify password
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Set expiration times based on remember_me
    const accessTokenExpiry = "15m"; // Always 15 minutes for access token
    const refreshTokenExpiry = remember_me ? "30d" : "7d"; // 30 days if remembered, 7 days if not
    
    // Convert expiry to milliseconds for cookie maxAge
    const accessTokenMaxAge = 15 * 60 * 1000; // 15 minutes in milliseconds
    const refreshTokenMaxAge = remember_me 
      ? 30 * 24 * 60 * 60 * 1000  // 30 days in milliseconds
      : 7 * 24 * 60 * 60 * 1000;   // 7 days in milliseconds

    // Create access token (short-lived)
    const accessToken = jwt.sign(
      { id: user.rows[0].id },
      process.env.JWT_SECRET,
      { expiresIn: accessTokenExpiry }
    );

    // Create refresh token with conditional expiration
    const refreshToken = jwt.sign(
      { id: user.rows[0].id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: refreshTokenExpiry }
    );

    // Set access token in HttpOnly cookie
    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      // secure: false,       // disable secure locally for testing
      sameSite: "strict",
      maxAge: accessTokenMaxAge
    });

    // Set refresh token in HttpOnly cookie with conditional expiry
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      // secure: false,        // disable secure locally for testing
      sameSite: "strict",
      maxAge: refreshTokenMaxAge
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user.rows[0];

    res.status(200).json({
      message: "User logged in successfully",
      data: userWithoutPassword
    });

  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};


//logout function to handle user logout
const logout = (req, res) => {
  // Clear the tokens from the client side (e.g. by removing them from cookies)
  res.clearCookie("access_token");
  res.clearCookie("refresh_token");
  res.json({ message: "User logged out successfully" });
};


module.exports = {
  register,
  login,
  logout
};