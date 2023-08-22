const express = require("express");
const { register, login } = require("../controllers/UserControllers");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);

module.exports = userRouter;
