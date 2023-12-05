const express = require("express");
const {
  verifyToken,
  admin,
  verifyPCTUser,
  verifyMPSUser,
} = require("../middleware/AuthMiddleware");
const {
  resetPasswordMPSUser,
  resetPasswordPCTUser,
} = require("../controllers/EmailControllers");
const {
  registerPCTUser,
  loginPCTUser,
  updatePasswordPCTUser,
  getPCTUsers,
  registerMPSUser,
  loginMPSUser,
  updatePasswordMPSUser,
  getMPSUsers,
} = require("../controllers/UserControllers");

const userRouter = express.Router();

// PCT ROUTES
userRouter.post("/pct/register", registerPCTUser);
userRouter.post("/pct/login", loginPCTUser);
userRouter.put("/pct/update/:id/password", updatePasswordPCTUser);
userRouter.get("/pct", verifyPCTUser, admin, getPCTUsers);
userRouter.post("/pct/forgot/password", resetPasswordPCTUser);
// MPS ROUTES
userRouter.post("/mps/register", registerMPSUser);
userRouter.post("/mps/login", loginMPSUser);
userRouter.put("/mps/update/:id/password", updatePasswordMPSUser);
userRouter.get("/mps", verifyPCTUser, admin, getMPSUsers);
userRouter.post("/mps/forgot/password", resetPasswordMPSUser);
userRouter.post("/auth/verification", verifyToken);

module.exports = userRouter;
