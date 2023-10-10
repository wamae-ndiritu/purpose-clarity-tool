const Purpose = require("../models/Purpose");

// CREATE PURPOSE ITEM
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
    user: req.user._id,
  });

  await purpose.save();
  res.status(201).json(purpose);
};

// GET PURPOSE ITEM
const getUserPurposeItem = async (req, res) => {
  const purpose = await Purpose.findOne({ user: req.params.id }).populate(
    "user",
    "firstName lastName email"
  );

  if (purpose) {
    res.json(purpose);
  } else {
    res.status(404).json({ message: "No saved item" });
  }
};

// UPDATE PURPOSE ITEM
const updatePuposeItem = async (req, res) => {
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

  const purpose = await Purpose.findById(req.params.id);
  console.log(purpose);
  if (purpose) {
    purpose.identity = identity || product.identity;
    purpose.strengths = strengths || product.strengths;
    purpose.passions = passions || product.passions;
    purpose.target_audience = target_audience || product.target_audience;
    purpose.beneficiary_needs = beneficiary_needs || product.beneficiary_needs;
    purpose.impact = impact || product.impact;
    purpose.revenue_sources = revenue_sources || product.revenue_sources;
    purpose.purpose_statement = purpose_statement || product.purpose_statement;

    const updatedPurpose = await purpose.save();
    res.json(updatedPurpose);
  } else {
    res.status(404).json({ message: "Purpose Item not found!" });
  }
};

// DELETE PURPOSE ITEM
const deletePuposeItem = async (req, res) => {
  const purpose = await Purpose.findById(req.params.id);
  if (purpose) {
    await purpose.remove();
    res.json({ message: "Purpose Item deleted" });
  } else {
    res.status(404).json({ message: "Purpose Item not found!" });
  }
};

module.exports = {
  createPurposeItem,
  getUserPurposeItem,
  updatePuposeItem,
  deletePuposeItem,
};
