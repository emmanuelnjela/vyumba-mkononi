import express from 'express';
import multer from 'multer';
import sharp from 'sharp';
import fs from 'fs/promises'; // Import the fs/promises module for asynchronous operations
import { createReadStream } from 'fs'; // Import createReadStream for synchronous read operations
import path from 'path';
import verifyJWT from '../middleware/verifyJWT.js';
import House from '../models/House.js';

const router = express.Router();

/* Configure Multer for file uploads */
const storage = multer.memoryStorage();
const upload = multer({ storage });
import { fileURLToPath } from "url";

/* Define paths */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesDirectory = path.join(__dirname, '..', 'images');

/* Check if an image file exists asynchronously */
async function checkFileExist(fileName) {
  try {
    await fs.access(fileName); // Use fs.promises.access for asynchronous operation
    return true;
  } catch (error) {
    return false;
  }
}

/* Upload a new image and generate a low-quality version */
router.post('/upload', verifyJWT, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('No file uploaded');
    }

    const filename = req.file.originalname;
    const highQualityImagePath = path.join(imagesDirectory, filename);
    const lowQualityFilename = `low_quality_${filename}`;
    const lowQualityImagePath = path.join(imagesDirectory, lowQualityFilename);

    // Save the high-quality image asynchronously
    await fs.writeFile(highQualityImagePath, req.file.buffer);

    // Create a low-quality version of the image
    await sharp(highQualityImagePath)
      .resize({ width: 100, height: 100 })
      .jpeg({ quality: 10 })
      .toFile(lowQualityImagePath);

    res.json({ imgName: filename });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

/* Retrieve an image by filename (high-quality or low-quality) */
router.get('/:imageName', async (req, res) => {
    try {
      const imageName = req.params.imageName;
      const highQualityImagePath = path.join(imagesDirectory, imageName);
      const lowQualityFilename = `low_quality_${imageName}`;
      const lowQualityImagePath = path.join(imagesDirectory, lowQualityFilename);
  
      const highQualityExists = await checkFileExist(highQualityImagePath);
      const lowQualityExists = await checkFileExist(lowQualityImagePath);
  
      if (lowQualityExists && req.query.low_quality === 'true') {
        // Serve low-quality image if requested with ?low_quality=true
        const readStream = createReadStream(lowQualityImagePath);
        readStream.pipe(res);
      } else if (highQualityExists) {
        // Serve high-quality image by default
        const readStream = createReadStream(highQualityImagePath);
        readStream.pipe(res);
      } else {
        throw new Error('Image not found');
      }
    } catch (error) {
      res.status(404).json({ errorMessage: error.message });
    }
  });
  

/* Delete an image by filename (both high-quality and low-quality) */
router.delete('/:fileName', verifyJWT, async (req, res) => {
  try {
    const fileName = req.params.fileName;
    const houseId = req.query.houseId;

    const highQualityImagePath = path.join(imagesDirectory, fileName);
    const lowQualityFilename = `low_quality_${fileName}`;
    const lowQualityImagePath = path.join(imagesDirectory, lowQualityFilename);

    const [highQualityExists, lowQualityExists] = await Promise.all([
      checkFileExist(highQualityImagePath),
      checkFileExist(lowQualityImagePath),
    ]);

    if (highQualityExists) {
      // Remove the image references from the house model (you need to implement this)
      await House.updateOne({ _id: houseId }, { $pull: { imgs: `http://localhost:3001/images/${fileName}` } });

      // Delete both high-quality and low-quality images asynchronously
      await Promise.all([
        fs.unlink(highQualityImagePath),
        lowQualityExists && fs.unlink(lowQualityImagePath),
      ]);

      res.status(204).end();
    } else {
      throw new Error('Image not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* Update an image (not implemented, you can add your own logic here) */
router.patch('/:fileName', verifyJWT, (req, res) => {
  // Implement your image update logic here
  res.status(501).json({ message: 'Not Implemented' });
});

export default router;
