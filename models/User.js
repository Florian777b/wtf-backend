const mongoose = require("mongoose");
const { Schema } = mongoose;
const AddressSchema = require("./Address");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    promotions: {
      type: Boolean,
      default: false,
    },
    address: String,
    trips: [{ title: String, cities: [String], middlePoint: String }],
    memories: [String],
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model("User", UserSchema);
