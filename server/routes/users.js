import express from "express";
import { getAllUsers, getUser , addRemoveOwner, deleteUser, updateUser } from "../controllers/users.js";
import verfiyJWT from "../middleware/verifyJWT.js";

const router = express.Router();

router.get("/", getAllUsers)

router.get("/:id", getUser)

router.delete("/:userId", verfiyJWT, deleteUser)

router.put("/", verfiyJWT, updateUser)

router.patch("/addRemoveOwner", verfiyJWT, addRemoveOwner);

export default router