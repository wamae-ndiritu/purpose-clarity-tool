const express = require("express");
const { verify } = require("../middleware/AuthMiddleware");
const {
  createPurposeStory,
  getPurposeStory,
  updatePurposeStory,
  deletePurposeStory,
  getPurposeStories,
} = require("../controllers/purposeStoryControllers");

const purposeStoryRouter = express.Router();

purposeStoryRouter.post("/create", verify, createPurposeStory);
purposeStoryRouter.get("/", verify, getPurposeStories);
purposeRouter.get("/:id", verify, getPurposeStory);
purposeRouter.put("/:id", verify, updatePurposeStory);
purposeRouter.delete("/:id", verify, deletePurposeStory);

module.exports = purposeStoryRouter;
