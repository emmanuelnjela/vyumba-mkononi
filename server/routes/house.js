import express from "express";
import { addHouse, getAllHouses, getHouse, uploadHouseImage } from "../controllers/houses.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router()

router.post("/",  addHouse)
router.get("/", getAllHouses)
router.get("/:houseId", getHouse)
router.post("/upload", verifyJWT, uploadHouseImage)

export default router