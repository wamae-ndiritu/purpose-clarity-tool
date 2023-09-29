const express = require("express");
const { verify } = require("../middleware/AuthMiddleware");
const {
  createPurposeStory,
  getPurposeStory,
  updatePurposeStory,
  deletePurposeStory,
} = require("../controllers/purposeStoryControllers");

const purposeStoryRouter = express.Router();

purposeStoryRouter.post("/create", verify, createPurposeStory);
purposeRouter.get("/:id", verify, getPurposeStory);
purposeRouter.put("/:id", verify, updatePurposeStory);
purposeRouter.delete("/:id", verify, deletePurposeStory);

module.exports = purposeStoryRouter;
