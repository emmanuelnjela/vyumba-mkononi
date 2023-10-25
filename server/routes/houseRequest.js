import express from "express"
import verifyJWT from "../middleware/verifyJWT.js";
import { addHouseRequest, getAllHouseRequests, updateHouseRequest, deleteHouseRequest, getHouseRequest } from "../controllers/houseRequests.js"

const router = express.Router();

router.post("/", verifyJWT, addHouseRequest)
router.get("/", verifyJWT, getAllHouseRequests)
router.put("/", verifyJWT, updateHouseRequest)
router.delete("/:houseRequestId", verifyJWT, deleteHouseRequest)
router.get("/:houseRequestId", verifyJWT, getHouseRequest)


export default router