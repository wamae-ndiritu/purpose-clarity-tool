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
purposeStoryRouter.get("/:id", verify, getPurposeStory);
purposeStoryRouter.put("/:id", verify, updatePurposeStory);
purposeStoryRouter.delete("/:id", verify, deletePurposeStory);

module.exports = purposeStoryRouter;
