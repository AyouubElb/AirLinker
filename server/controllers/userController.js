const userModel = require("../models/userModel");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registration = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ error: "User with the given email already exist!" });
    }

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Enter a valid email !" });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({
        error:
          "Password must be a strong password : { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}",
      });
    }

    user = new userModel({
      firstName,
      lastName,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(200).json({ _id: user._id, firstName, lastName, email });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Wrong email or password." });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({ error: "Wrong email or password." });
    }

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.firstName,
        surname: user.lastName,
        email: email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error });
  }
};

exports.logoutUser = async (req, res) => {
  // delete token in the cookie
  res.clearCookie("token");
  res.json({
    message: "User Signout !",
  });
};
