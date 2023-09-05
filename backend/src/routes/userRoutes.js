const express = require("express");
const {
  register,
  login,
  updatePassword,
} = require("../controllers/UserControllers");
const { verifyToken } = require("../middleware/AuthMiddleware");
const { resetPassword } = require("../controllers/EmailControllers");
const User = require("../models/User");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/forgot/password", resetPassword);
userRouter.put("/update/:id/password", updatePassword);
userRouter.post("/auth/verification", verifyToken);
userRouter.delete("/", async (req, res) => {
  await User.deleteMany();
  res.status(200).json({ message: "All users deleted" });
});

module.exports = userRouter;
