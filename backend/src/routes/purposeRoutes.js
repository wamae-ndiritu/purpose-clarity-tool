const express = require("express");
const { verify } = require("../middleware/AuthMiddleware");
const {
  createPurposeItem,
  getUserPurposeItem,
  updatePuposeItem,
  deletePuposeItem,
} = require("../controllers/purposeControllers");
const { submitForFeadback } = require("../controllers/EmailControllers");

const purposeRouter = express.Router();

purposeRouter.post("/create", verify, createPurposeItem);
purposeRouter.get("/:id", verify, getUserPurposeItem);
purposeRouter.put("/:id", verify, updatePuposeItem);
purposeRouter.delete("/:id", verify, deletePuposeItem);
purposeRouter.post("/send-feedback-email", verify, submitForFeadback);

module.exports = purposeRouter;
