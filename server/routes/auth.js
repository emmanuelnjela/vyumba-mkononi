import express from "express";
import { register, login, logout } from "../controllers/auth.js";
import verifyJWT from "../middleware/verifyJWT.js"

const router = express.Router()

router.post("/register", register)

router.post("/login", login)

router.post("/logout", verifyJWT, logout)

export default router