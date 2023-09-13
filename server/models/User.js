import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 5,
      max: 10,
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
      max: 10,
    },
    isLogin: {
      type: Boolean,
      default: false
    },
    phoneNumber: {
      type: String,
      default: "",
      min: 5,
      max: 10,
      // required: true,
    },
    location: {
      type: String,
      default: "",
      min: 5,
      max: 10,
      // required: true
    },
    profileImage: {
      type: String,
      default: "",
    },
    savedHouses: {
      type: [String],
      required: true,
      validation: [arrayLimit, '{PATH} exceeds the limit of 4']
    },
  },

);

// Custom validation function for array size
function arrayLimit(val) {
  return val.length >= 1 && val.length <= 4;
}

const User = mongoose.model("User", userSchema);

export default User;
