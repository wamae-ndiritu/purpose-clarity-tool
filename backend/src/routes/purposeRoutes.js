const express = require("express");
const { verify } = require("../middleware/AuthMiddleware");
const {
  createPurposeItem,
  getUserPurposeItem,
  updatePuposeItem,
  deletePuposeItem,
} = require("../controllers/purposeControllers");

const purposeRouter = express.Router();

purposeRouter.post("/create", verify, createPurposeItem);
purposeRouter.get("/:id", verify, getUserPurposeItem);
purposeRouter.put("/:id", verify, updatePuposeItem);
purposeRouter.delete("/:id", verify, deletePuposeItem);

module.exports = purposeRouter;
