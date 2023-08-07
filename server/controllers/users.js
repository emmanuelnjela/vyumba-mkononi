import bcrypt from "bcrypt";
import express from "express";

import User from "../models/User.js";
const app = express();


export const getAllUsers = (req, res) => {};

export const getUser = (req, res) => {};

export const addRemoveOwner = async (req, res) => {
  try {
    let { id , owner } = req.body;
    if(owner == undefined) {
      const {owner: ownerDB} = await User.findById(id);
      Object.entries(ownerDB).forEach(([key, value]) => ownerDB[key] = "")
      owner = ownerDB
    }
    const user = await User.findByIdAndUpdate(
      id,
      { owner },
      { new: true }
    );

    res.status(201).json({ user });
  } catch (err) {
    res.status(203).json({ err: err.message });
  }
};

