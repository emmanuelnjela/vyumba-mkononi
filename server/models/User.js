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
    owner: {
      firstName: {
        type: String,
        // required: true,
        default: ""
      },
      lastName: {
        type: String,
        // required: true,
      },
      phoneNumber: {
        type: String,
        // required: true,
      },
      location: {
        type: String,
        // required: true
      }
    },
  },
  
);

const User = mongoose.model("User", userSchema);

export default User;
