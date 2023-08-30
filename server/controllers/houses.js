import House from "../models/House.js";
import { Crud } from "../utils/crudOperations.js";

const housesCrud = new Crud(House);

export const addHouse = async (req, res) => {
  try {
    const { houseInfo } = req.body;
    const { currentUser } = req.cookies;
    const { _id: ownerId } = JSON.parse(currentUser);
    const houses = await housesCrud.addData({...houseInfo, ownerId});
    res.json({houses})
  } catch (error) {

    res.json({ message: error.message });
  }
};

export const getHouse = async (req, res) => {
  try {
    const houseId = req.params.houseId;
    console.log(houseId)
    const house = await housesCrud.getData(houseId);
    res.json({ house });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAllHouses = async (req, res) => {
  try {
    const houses = await housesCrud.getAllDatas()
    res.json({ houses });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteHouse = async (req, res) => {
  try {
    const houseId = req.params.houseId;
    const houses = await housesCrud.deleteData(houseId);
    res.json({ houses });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateHouse = async (req, res) => {
  try {
    const {id, dataElements} = req.body

    const updatedHouses = await housesCrud.updateData(id, dataElements);
    res.json({ updatedHouses});
  } catch (error) {
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
    res.json({ message: error.message });
  }
};
 