const express = require("express");
const { verifyUser } = require("../middleware/verifyToken");
const { userRegistration, userLogin } = require("../controller/authController");
const {
  registerValidation,
  loginValidation,
} = require("../middleware/validation");
const { renderPosts } = require("./postRoute");

const router = express.Router();

router.post("/register", registerValidation, userRegistration);
router.post("/login", loginValidation, userLogin);
router.get("/posts", verifyUser, renderPosts);

module.exports = { router };
