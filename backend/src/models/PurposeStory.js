const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
      type: Schema.Types.Mixed,
      default: null,
    },
    valuesAndBeliefs: {
      type: Schema.Types.Mixed,
      default: null,
    },
    impactAndBeneficiaries: {
      type: Schema.Types.Mixed,
      default: null,
    },
    actionsAndCommitments: {
      type: Schema.Types.Mixed,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const PurposeStory = mongoose.model("PurposeStory", PurposeStorySchema);
module.exports = PurposeStory;
