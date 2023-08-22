const Purpose = require("../models/Purpose");

const createPurposeItem = async (req, res) => {
  const {
    identity,
    strengths,
    passions,
    target_audience,
    beneficiary_needs,
    impact,
    revenue_sources,
    purpose_statement,
  } = req.body;

  const purpose = new Purpose({
    identity,
    strengths,
    passions,
    target_audience,
    beneficiary_needs,
    impact,
    revenue_sources,
    purpose_statement,
  });

  await purpose.save();
  res.status(201).json(purpose);
};
const getUserPurposeItem = async (req, res) => {
  const purpose = await Purpose.findById(req.params.id).populate(
    "user",
    "firstName email"
  );

  if (purpose) {
    res.json(purpose);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};

const updatePuposeItem = async (req, res) => {};
const deletePuposeItem = async (req, res) => {};

module.exports = {
  createPurposeItem,
  getUserPurposeItem,
  updatePuposeItem,
  deletePuposeItem,
};
