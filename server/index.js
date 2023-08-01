/* THIRDPART LIBRARY */
import express from "express"; // node js backend framework
// import mongoose from "mongoose"; // connect with mongo database
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"
import cors from "cors"

import users from "./routes/users.js"
import auth from "./routes/auth.js"

/* PREINSTALLED LIBRARY */
import path from "path";
import { fileURLToPath } from "url";


import database from "./database.js";



/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()


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

// mongoose.set('strictQuery', true)
// mongoose.connect(process.env.MONGO_URL, 
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }).then(() => app.listen(port, () => console.log("connected")))
//     .catch((err) => console.log(err))

app.listen(port, () => console.log("Server is connected sucessfuly"))