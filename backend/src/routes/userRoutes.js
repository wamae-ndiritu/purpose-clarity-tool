const express = require("express");
const { register, login } = require("../controllers/UserControllers");
const { verifyToken } = require("../middleware/AuthMiddleware");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/auth/verification", verifyToken);

module.exports = userRouter;
