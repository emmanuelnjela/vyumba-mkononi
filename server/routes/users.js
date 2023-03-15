import express from "express";
import { getAllUsers, getUser , addRemoveOwner } from "../controllers/users.js";
import verfiyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

router.get("/", getAllUsers)

router.get("/:id", getUser)

router.patch("/addRemoveOwner", verfiyJWT, addRemoveOwner);

export default router