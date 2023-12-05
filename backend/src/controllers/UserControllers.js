const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");
const PCTUser = require("../models/PCTUser");
const MPSUser = require("../models/MPSUser");

// REGISTER
const registerPCTUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  const userExists = await PCTUser.findOne({ email });
  if (userExists) {
    res.status(400).send({ message: "User already exist" });
  } else {
    const salt = 10;
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = new PCTUser({
      fullName,
      email,
      password: hashPassword,
    });

    if (user) {
      await user.save();
    }

    res.status(201).json({ created: true });
  }
};

const registerMPSUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  const userExists = await MPSUser.findOne({ email });
  if (userExists) {
    res.status(400).send({ message: "User already exist" });
  } else {
    const salt = 10;
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = new MPSUser({
      fullName,
      email,
      password: hashPassword,
    });

    if (user) {
      await user.save();
    }

    res.status(201).json({ created: true });
  }
};

// LOGIN
const loginPCTUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await PCTUser.findOne({ email });

  if (user) {
    const comparePassword = await bcrypt.compare(password, user.password);

    if (comparePassword) {
      res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        token: generateToken(user._id),
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401).json({ message: "Invalid Password!" });
    }
  } else {
    res.status(400).json({ message: "Invalid email address!" });
  }
};

const loginMPSUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await MPSUser.findOne({ email });

  if (user) {
    const comparePassword = await bcrypt.compare(password, user.password);

    if (comparePassword) {
      res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        token: generateToken(user._id),
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
const updatePasswordPCTUser = async (req, res) => {
  const { password } = req.body;
  const id = req.params.id;

  const user = await PCTUser.findById(id);

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

const updatePasswordMPSUser = async (req, res) => {
  const { password } = req.body;
  const id = req.params.id;

  const user = await MPSUser.findById(id);

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
const getPCTUsers = async (req, res) => {
  const users = await PCTUser.find({});
  res.status(200).json(users);
};

const getMPSUsers = async (req, res) => {
  const users = await MPSUser.find({});
  res.status(200).json(users);
};

module.exports = {
  registerPCTUser,
  loginPCTUser,
  updatePasswordPCTUser,
  getPCTUsers,
  registerMPSUser,
  loginMPSUser,
  updatePasswordMPSUser,
  getMPSUsers,
};
