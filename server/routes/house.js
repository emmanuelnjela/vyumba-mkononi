import express from "express";
import { addHouse, getAllHouses } from "../controllers/houses.js";
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router()

router.post("/", verifyJWT,addHouse)
router.get("/", verifyJWT, getAllHouses)

export default router