const express = require("express");
const { verifyMPSUser } = require("../middleware/AuthMiddleware");
const {
  createPurposeStory,
  getPurposeStory,
  updatePurposeStory,
  deletePurposeStory,
  getPurposeStories,
} = require("../controllers/purposeStoryControllers");

const purposeStoryRouter = express.Router();

purposeStoryRouter.post("/create", verifyMPSUser, createPurposeStory);
purposeStoryRouter.get("/", verifyMPSUser, getPurposeStories);
purposeStoryRouter.get("/:id", verifyMPSUser, getPurposeStory);
purposeStoryRouter.put("/:id", verifyMPSUser, updatePurposeStory);
purposeStoryRouter.delete("/:id", verifyMPSUser, deletePurposeStory);

module.exports = purposeStoryRouter;
