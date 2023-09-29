const express = require("express");
const { verify } = require("../middleware/AuthMiddleware");
const {
  createPurposeStory,
} = require("../controllers/purposeStoryControllers");

const purposeStoryRouter = express.Router();

purposeStoryRouter.post("/create", verify, createPurposeStory);

module.exports = purposeStoryRouter;
