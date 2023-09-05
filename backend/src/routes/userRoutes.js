const express = require("express");
const {
  register,
  login,
  updatePassword,
  getUsers,
} = require("../controllers/UserControllers");
const { verifyToken, admin, verify } = require("../middleware/AuthMiddleware");
const { resetPassword } = require("../controllers/EmailControllers");
const User = require("../models/User");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/forgot/password", resetPassword);
userRouter.put("/update/:id/password", updatePassword);
userRouter.post("/auth/verification", verifyToken);
userRouter.get("/", verify, admin, getUsers);
userRouter.delete("/", async (req, res) => {
  await User.deleteMany();
  res.status(200).json({ message: "All users deleted" });
});

module.exports = userRouter;
