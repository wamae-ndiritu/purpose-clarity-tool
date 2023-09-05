const express = require("express");
const { register, login } = require("../controllers/UserControllers");
const { verifyToken } = require("../middleware/AuthMiddleware");
const { resetPassword } = require("../controllers/EmailControllers");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/forgot/password", resetPassword);
userRouter.post("/auth/verification", verifyToken);

module.exports = userRouter;
