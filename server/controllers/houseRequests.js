import { Crud } from "../utils/crudOperations.js";
import HouseRequest from "../models/HouseRequest.js";

const houseRequestCrud = new Crud(HouseRequest);

export const addHouseRequest = async (req, res) => {
    try {
        const { houseRequestInfo } = req.body;
        const { currentUserId: ownerId } = req.cookies;
        const houseRequest = await houseRequestCrud.addData({...houseRequestInfo, ownerId});
        res.json({houseRequest})
      } catch (error) {
         if(error.message?.toLocaleLowerCase() === "data not found!") {
          res.status(404).json({message: error.message})
          return
        }
        res.json({ message: error.message });
      }
} 
export const getHouseRequest = async (req, res) => {
    try {
      const houseRequestId = req.params.houseRequestId;
      const houseRequest = await houseRequestCrud.getData(houseRequestId);
      res.json({ houseRequest });
    } catch (error) {
       if(error.message?.toLocaleLowerCase() === "data not found!") {
        res.status(404).json({message: error.message})
        return
      }
      res.json({ message: error.message });
    }
  };
  
  export const getAllHouseRequests = async (req, res) => {
    try {
      const houseRequests = await houseRequestCrud.getAllDatas()
      res.json({ houseRequests });
    } catch (error) {
       if(error.message?.toLocaleLowerCase() === "data not found!") {
        res.status(404).json({message: error.message})
        return
      }
      res.json({ message: error.message });
    }
  };
  
  export const deleteHouseRequest = async (req, res) => {
    try {
      const houseRequestId = req.params.houseRequestId;
      const message = await houseRequestCrud.deleteData(houseRequestId);
      res.json({ message });
    } catch (error) {
       if(error.message?.toLocaleLowerCase() === "data not found!") {
        res.status(404).json({message: error.message})
        return
      }
      res.json({ message: error.message });
    }
  };
  
  export const updateHouseRequest = async (req, res) => {
    try {
      const {id, dataElements} = req.body
  
      const updatedHouseRequest = await houseRequestCrud.updateData(id, dataElements);
      res.json({ updatedHouseRequest});
    } catch (error) {
       if(error.message?.toLocaleLowerCase() === "data not found!") {
        res.status(404).json({message: error.message})
        return
      }
      res.json({ message: error.message });
    }
  };