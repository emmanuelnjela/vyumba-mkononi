/* THIRDPART LIBRARY */
import express from "express"; // node js backend framework
// import mongoose from "mongoose"; // connect with mongo database
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"
import cors from "cors"
import multer from "multer"

import users from "./routes/users.js"
import auth from "./routes/auth.js"
import houses from "./routes/house.js"
import images from "./routes/images.js"
import houseRequest from "./routes/houseRequest.js"

/* PREINSTALLED LIBRARY */
import path from "path";
import { fileURLToPath } from "url";



import database from "./utils/database.js";



/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()


/* INITIALIZATION */
const app = express(); 
const port = process.env.PORT;

/* THIRDPART MIDDLWARE */
const corsOptions ={
    origin:'https://vyumbamkononi.onrender.com', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true, limit: "16mb"}));
app.use(bodyParser.json({extended: true, limit: "16mb"}))
app.use(cookieParser())


/* CUSTOM MIDDLEWARE */
app.use('/users', users)
app.use('/auth', auth)
app.use('/houses', houses)
app.use('/images', images)
app.use('/houseRequests', houseRequest)

console.log(__dirname)
// console.log(new ObjectId("6504142b2b988def6d2ffe7c"))
app.listen(port, () => console.log("Server is connected sucessfuly"))