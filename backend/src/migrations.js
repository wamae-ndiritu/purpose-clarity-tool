const express = require("express");
const PCTUser = require("./models/PCTUser");
const MPSUser = require("./models/MPSUser");

const migrationRouter = express.Router();

migrationRouter.post("/pct/users", async (req, res) => {
  try {
    // Loop through the existing users and insert them into the new collection
    for (const user of req.body) {
      const newUser = new PCTUser({
        fullName: user.fullName,
        email: user.email,
        isAdmin: user.isAdmin,
        password: user.password,
      });

      await newUser.save();
    }

    res
      .status(200)
      .json({ message: "PCT User Data migration completed successfully!" });
  } catch (error) {
    console.error("Error during PCT User data migration:", error);
  }
});

migrationRouter.post("/mps/users", async (req, res) => {
  try {
    // Loop through the existing users and insert them into the new collection
    for (const user of req.body) {
      const newUser = new MPSUser({
        fullName: user.fullName,
        email: user.email,
        isAdmin: user.isAdmin,
        password: user.password,
      });

      await newUser.save();
    }

    res
      .status(200)
      .json({ message: "MPS User Data migration completed successfully!" });
  } catch (error) {
    console.error("Error during MPS User data migration:", error);
  }
});

module.exports = migrationRouter;
