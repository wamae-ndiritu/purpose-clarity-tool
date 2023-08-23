const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateToken } = require("../utils/generateToken");

// REGISTER
const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).send({ message: "User already exist" });
  } else {
    const salt = 10;
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = await new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    await user.save();
    res.status(201).json({ created: true });
  }
};

// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const comparePassword = await bcrypt.compare(password, user.password);

    if (comparePassword) {
      res.status(200).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid Password!" });
    }
  } else {
    res.status(400).json({ message: "Invalid email address!" });
  }
};

module.exports = { register, login };
