const mongoose = require("mongoose");
const { SYSTEM_ROLES_ENUM } = require("../../config/constants");

const usersSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
      trim: true,
    },
    LastName: {
      type: String,
      required: true,
      trim: true,
    },
    EmailAddress: {
      type: String,
      unique: true,
    },
    PhoneNumber: {
      type: String,
    },
    Password: {
      type: String,
    },
    ConfirmPassword: {
      type: String,
    },
    // profilePath: {
    //   type: String,
    // },
    uniqueKeys: {
      type: [String],
    },
    OTP: {
      type: String,
    },
    systemRole: {
      type: String,
      enum: SYSTEM_ROLES_ENUM,
    },
  },
  {
    timestamps: true,
    strict: true,
    collection: "users",
  }
);

module.exports = mongoose.model("User", usersSchema);
hayazeeshan;
