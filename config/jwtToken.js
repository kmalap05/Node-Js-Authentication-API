const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// Generate Token
const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET_TOKEN, { expiresIn: "30d" });
};

module.exports = { generateToken };
