const express = require("express");
const { verifyPCTUser } = require("../middleware/AuthMiddleware");
const {
  createPurposeItem,
  getUserPurposeItem,
  updatePuposeItem,
  deletePuposeItem,
} = require("../controllers/purposeControllers");
const { submitForFeadback } = require("../controllers/EmailControllers");

const purposeRouter = express.Router();

purposeRouter.post("/create", verifyPCTUser, createPurposeItem);
purposeRouter.get("/:id", verifyPCTUser, getUserPurposeItem);
purposeRouter.put("/:id", verifyPCTUser, updatePuposeItem);
purposeRouter.delete("/:id", verifyPCTUser, deletePuposeItem);
purposeRouter.post("/send-feedback-email", verifyPCTUser, submitForFeadback);

module.exports = purposeRouter;
