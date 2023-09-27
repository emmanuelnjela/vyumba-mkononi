import User from "../models/User.js";

import { Crud } from "../utils/crudOperations.js";

const usersCrud = new Crud(User);


export const getAllUsers = async (req, res) => {
  try {
    const users = await usersCrud.getAllDatas()
    res.json({ users });
  } catch (error) {
    if(error.message?.toLocaleLowerCase() === "data not found!") {
      res.status(404).json({message: error.message})
      return
    }
    res.json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await usersCrud.getData(userId);
    res.json({ user });
  } catch (error) {
    if(error.message?.toLocaleLowerCase() === "data not found!") {
      res.status(404).json({message: error.message})
      return
    }
    res.json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const users = await usersCrud.deleteData(userId);
    res.json({ users });
  } catch (error) {
    if(error.message?.toLocaleLowerCase() === "data not found!") {
      res.status(404).json({message: error.message})
      return
    }
    res.json({ message: error.message });
  }
}

export const updateUser = async (req, res) => {
  try {
    const {id, dataElements} = req.body
    const updatedUsers = await usersCrud.updateData(id, dataElements);
    res.json({ updatedUsers});
  } catch (error) {
    if(error.message?.toLocaleLowerCase() === "data not found!") {
      res.status(404).json({message: error.message})
      return
    }
    // console.log(error)
    res.json({ message: error.message });
  }
}

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

