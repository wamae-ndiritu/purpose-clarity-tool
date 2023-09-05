const express = require("express");
const {
  register,
  login,
  updatePassword,
} = require("../controllers/UserControllers");
const { verifyToken } = require("../middleware/AuthMiddleware");
const { resetPassword } = require("../controllers/EmailControllers");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/forgot/password", resetPassword);
userRouter.put("/update/:id/password", updatePassword);
userRouter.post("/auth/verification", verifyToken);

module.exports = userRouter;
