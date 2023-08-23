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
      required: true,
    },
    strengths: {
      type: String,
      required: true,
    },
    passions: {
      type: String,
      required: true,
    },
    target_audience: {
      type: String,
      required: true,
    },
    beneficiary_needs: {
      type: String,
      required: true,
    },
    impact: {
      type: String,
      required: true,
    },
    revenue_sources: {
      type: String,
      required: true,
    },
    purpose_statement: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Purpose = mongoose.model("Purpose", PurposeSchema);
module.exports = Purpose;
