const mongoose = require("mongoose");

const PurposeStorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    purpose: {
      type: String,
    },
    origin: {
      type: String,
    },
    vissionAndMission: {
      type: String,
    },
    valuesAndBeliefs: {
      type: String,
    },
    impactAndBeneficiaries: {
      type: String,
    },
    actionsAndCommitments: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const PurposeStory = mongoose.model("PurposeStory", PurposeStorySchema);
module.exports = PurposeStory;
