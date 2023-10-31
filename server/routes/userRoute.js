const express = require("express");

const {
  registration,
  loginUser,
  logoutUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registration);

router.post("/login", loginUser);

router.get("/logout", logoutUser);

module.exports = router;
