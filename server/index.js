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

/* PREINSTALLED LIBRARY */
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs"



import database from "./utils/database.js";



/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()
const upload = multer({dest: "images/"})


/* INITIALIZATION */
const app = express(); 
const port = process.env.PORT;

/* THIRDPART MIDDLWARE */
const corsOptions ={
    origin:'http://localhost:3000', 
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
app.get("/images/:imageName", (req, res) => {
    const imageName = req.params.imageName
    const readStream = fs.createReadStream(`images/${imageName}`)
    readStream.pipe(res)
})
app.post('/upload-house-img', upload.single('image'), (req, res) => {
    try {
        const filename = req.file.filename
        res.json({imgName: filename})
    } catch (error) {
        console.log(error.message)
        res.json({errorMessage: error.message})
    }
    
})

console.log(__dirname)
app.listen(port, () => console.log("Server is connected sucessfuly"))