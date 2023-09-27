import express from "express";
import { addHouse, deleteHouse, getAllHouses, getHouse, updateHouse, uploadHouseImage } from "../controllers/houses.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router()

router.post("/",verifyJWT,  addHouse)
router.get("/", getAllHouses)
router.put("/",verifyJWT, updateHouse)
router.delete("/:houseId", deleteHouse)
router.get("/:houseId", getHouse)
router.post("/upload", verifyJWT, uploadHouseImage)

export default router