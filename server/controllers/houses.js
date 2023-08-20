import House from "../models/House.js";
import { Crud } from "../utils/crudOperations.js";

const housesCrud = new Crud(House);

export const addHouse = async (req, res) => {
  try {
    const { houseInfo } = req.body;
    const { currentUser } = req.cookies;
    const { _id: ownerId } = JSON.parse(currentUser);
    houseInfo.ownerId = ownerId;
    await housesCrud.addData(houseInfo);
    res.status(204).json({ message: "Nyumba imeongezwa kikamilifu" });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

export const getHouse = async (req, res) => {
  try {
    const houseId = req.params.houseId;
    const house = await housesCrud.getData(houseId);
    res.json({ house });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAllHouses = async (req, res) => {
  try {
    const datas = await housesCrud.getAllDatas();
    res.json({ datas });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteHouse = async (req, res) => {
  try {
    const houseId = req.params.houseId;
    await housesCrud.deleteData(houseId);
    res.status(204).json({ message: "House deleted successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateHouse = async (req, res) => {
  try {
    const houseId = req.params.houseId;
    const { houseInfo } = req.body;

    // Perform the update operation
    // Example: await housesCrud.updateData(houseId, houseInfo);

    res.status(204).json({ message: "House updated successfully" });
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
 