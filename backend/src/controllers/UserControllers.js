const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateToken } = require("../utils/generateToken");

// REGISTER
const register = async (req, res) => {
  const { fullName, email, password, account_type } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).send({ message: "User already exist" });
  } else {
    const salt = 10;
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = new User({
      fullName,
      email,
      password: hashPassword,
      account_type,
    });

    if (user) {
      await user.save();
    }

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
        fullName: user.fullName,
        email: user.email,
        token: generateToken(user._id),
        account_type: user.account_type,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401).json({ message: "Invalid Password!" });
    }
  } else {
    res.status(400).json({ message: "Invalid email address!" });
  }
};

// UPDATE PASSWORD
const updatePassword = async (req, res) => {
  const { password } = req.body;
  const id = req.params.id;

  const user = await User.findById(id);

  if (user) {
    const hashRounds = 10;
    const hashedPassword = await bcrypt.hash(password, hashRounds);

    if (hashedPassword) {
      user.password = hashedPassword;

      const updatedUser = await user.save();

      if (updatedUser) {
        res.status(200).json(updatedUser);
      }
    }
  } else {
    res.status(400).json({ message: "Invalid request!" });
  }
};

// ADMIN GET ALL USERS
const getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
};

module.exports = { register, login, updatePassword, getUsers };
