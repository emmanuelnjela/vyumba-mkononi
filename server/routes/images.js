import express from 'express'
import multer from 'multer'

import fs from "fs"
import verifyJWT from '../middleware/verifyJWT.js'
import path from "path";
import { fileURLToPath } from "url";
import House from '../models/House.js';

const fsPromise = fs.promises


/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router()
const upload = multer({ dest: "images/" })

function checkFileExist(fileName) {
    const filePath = path.join(__dirname, '..', 'images', fileName)
    const imageExists = fs.existsSync(filePath)
    if (!imageExists) {
        throw new Error("Image Not found")
    }
}

router.get("/:imageName", async (req, res) => {
    try {
        const imageName = req.params.imageName
        checkFileExist(imageName)
        const readStream = fs.createReadStream(`images/${imageName}`)
        readStream.pipe(res)
    } catch (error) {
        res.status(404).json({ errorMessage: error.message })
    }
})
router.post('/upload', verifyJWT, upload.single('image'), (req, res) => {
    try {
        const filename = req.file.filename
        res.json({ imgName: filename })
    } catch (error) {
        res.json({ errorMessage: error.message })
    }

})

router.delete('/:fileName', verifyJWT, async (req, res) => {
    try {
        const fileName = req.params.fileName
        const houseId = req.query.houseId
        const filePath = path.join(__dirname, '..', 'images', fileName)
        console.log(fileName)
        checkFileExist(fileName)

        console.log(houseId)
        await House.updateOne({ _id: houseId }, { $pull: { imgs: `http://localhost:3001/images/${fileName}` } })

        await fsPromise.rm(filePath)

        res.status(204)
        res.end()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.patch('/:fileName', verifyJWT, (req, res) => {

})

export default router