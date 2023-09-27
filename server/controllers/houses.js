import House from "../models/House.js";
import { Crud } from "../utils/crudOperations.js";

const housesCrud = new Crud(House);

export const addHouse = async (req, res) => {
  try {
    const { houseInfo } = req.body;
    const { currentUserId: ownerId } = req.cookies;
    const house = await housesCrud.addData({...houseInfo, ownerId});
    res.json({house})
  } catch (error) {
     if(error.message?.toLocaleLowerCase() === "data not found!") {
      res.status(404).json({message: error.message})
      return
    }
    res.json({ message: error.message });
  }
};

export const getHouse = async (req, res) => {
  try {
    const houseId = req.params.houseId;
    const house = await housesCrud.getData(houseId);
    res.json({ house });
  } catch (error) {
     if(error.message?.toLocaleLowerCase() === "data not found!") {
      res.status(404).json({message: error.message})
      return
    }
    res.json({ message: error.message });
  }
};

export const getAllHouses = async (req, res) => {
  try {
    const houses = await housesCrud.getAllDatas()
    res.json({ houses });
  } catch (error) {
     if(error.message?.toLocaleLowerCase() === "data not found!") {
      res.status(404).json({message: error.message})
      return
    }
    res.json({ message: error.message });
  }
};

export const deleteHouse = async (req, res) => {
  try {
    const houseId = req.params.houseId;
    const message = await housesCrud.deleteData(houseId);
    res.json({ message });
  } catch (error) {
     if(error.message?.toLocaleLowerCase() === "data not found!") {
      res.status(404).json({message: error.message})
      return
    }
    res.json({ message: error.message });
  }
};

export const updateHouse = async (req, res) => {
  try {
    const {id, dataElements} = req.body

    const updatedHouse = await housesCrud.updateData(id, dataElements);
    res.json({ updatedHouse});
  } catch (error) {
     if(error.message?.toLocaleLowerCase() === "data not found!") {
      res.status(404).json({message: error.message})
      return
    }
    res.json({ message: error.message });
  }
};

export const uploadHouseImage = async (req, res) => {
  try {
    // Implement logic to upload house images here
    // For example, you can use a library like Multer for handling file uploads
    // Once uploaded, associate the image with the corresponding house in your data model
    // Respond with a success message

    // Example: 
    // const houseId = req.params.houseId;
    // const imageFile = req.file; // Assuming you use Multer middleware

    // ... logic to save the image reference to the house ...

    res.status(204).json({ message: "House image uploaded successfully" });
  } catch (error) {
     if(error.message?.toLocaleLowerCase() === "data not found!") {
      res.status(404).json({message: error.message})
      return
    }
    res.json({ message: error.message });
  }
};
 