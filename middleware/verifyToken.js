const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// Verify User Using JWT Token
const verifyUser = asyncHandler(async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access-Denied");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400);
    throw new Error("Token Expired: Login Again!");
  }
});

module.exports = { verifyUser };
