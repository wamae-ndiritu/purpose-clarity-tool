const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    account_type: {
      type: String,
    },
  },
  { timestamps: true }
);

// Create a compound index on "email" and "account_type"
userSchema.index({ email: 1, account_type: 1 }, { unique: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
