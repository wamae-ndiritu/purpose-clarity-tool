const mongoose = require("mongoose");

const PurposeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    identity: {
      type: String,
      default: null,
    },
    strengths: {
      type: String,
      default: null,
    },
    passions: {
      type: String,
      default: null,
    },
    target_audience: {
      type: String,
      default: null,
    },
    beneficiary_needs: {
      type: String,
      default: null,
    },
    impact: {
      type: String,
      default: null,
    },
    revenue_sources: {
      type: String,
      default: null,
    },
    purpose_statement: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Purpose = mongoose.model("Purpose", PurposeSchema);
module.exports = Purpose;
