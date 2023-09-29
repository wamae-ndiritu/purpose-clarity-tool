const PurposeStory = require("../models/PurposeStory");

// CREATE PURPOSE STORY ITEM
const createPurposeStory = async (req, res) => {
  const {
    purpose,
    origin,
    vissionAndMission,
    valuesAndBeliefs,
    impactAndBeliefs,
    actionsAndCommitments,
  } = req.body;

  console.log(req.body);

  const purposeStory = new PurposeStory({
    purpose,
    origin,
    vissionAndMission,
    valuesAndBeliefs,
    impactAndBeliefs,
    actionsAndCommitments,
    user: req.user._id,
  });

  await purposeStory.save();
  res.status(201).json(purposeStory);
};

// GET PURPOSE ITEM
const getPurposeStory = async (req, res) => {
  const purposeStory = await PurposeStory.findOne({
    user: req.params.id,
  }).populate("user", "firstName lastName email");

  if (purposeStory) {
    res.json(purposeStory);
  } else {
    res.status(404).json({ message: "No added purpose!" });
  }
};

// UPDATE PURPOSE STORY
const updatePuposeStory = async (req, res) => {
  const {
    purpose,
    origin,
    vissionAndMission,
    valuesAndBeliefs,
    impactAndBeliefs,
    actionsAndCommitments,
  } = req.body;

  const purposeStory = await PurposeStory.findById(req.params.id);
  if (purposeStory) {
    purposeStory.purpose = purpose || purposeStory.purpose;
    purposeStory.origin = origin || purposeStory.origin;
    purposeStory.vissionAndMission =
      vissionAndMission || purposeStory.vissionAndMission;
    purposeStory.valuesAndBeliefs =
      valuesAndBeliefs || purposeStory.valuesAndBeliefs;
    purposeStory.impactAndBeliefs =
      impactAndBeliefs || purposeStory.impactAndBeliefs;
    purposeStory.actionsAndCommitments =
      actionsAndCommitments || purposeStory.actionsAndCommitments;

    const updatedPurposeStory = await purposeStory.save();
    res.json(updatedPurposeStory);
  } else {
    res.status(404).json({ message: "Purpose Story not found!" });
  }
};

// DELETE PURPOSE STORY
const deletePuposeStory = async (req, res) => {
  const purposeStory = await PurposeStory.findById(req.params.id);
  if (purposeStory) {
    await purposeStory.remove();
    res.json({ message: "Purpose Story deleted" });
  } else {
    res.status(404).json({ message: "Purpose Story not found!" });
  }
};

module.exports = {
  createPurposeStory,
  getPurposeStory,
  updatePuposeStory,
  deletePuposeStory,
};
