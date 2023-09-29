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
      default: null,
    },
    origin: {
      type: String,
      default: null,
    },
    vissionAndMission: {
      type: String,
      default: null,
    },
    valuesAndBeliefs: {
      type: String,
      default: null,
    },
    impactAndBeneficiaries: {
      type: String,
      default: null,
    },
    actionsAndCommitments: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const PurposeStory = mongoose.model("PurposeStory", PurposeStorySchema);
module.exports = PurposeStory;
