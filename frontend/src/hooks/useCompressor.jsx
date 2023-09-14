import Compressor from "compressorjs"
const { useState, useEffect } = require("react");

// async function to fetch and compress an image
async function fetchAndCompress(imageUrl, options) {
    try {
      // Fetch the image
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      // convert the image to a data URL
      const image = URL.createObjectURL(blob)
      //compress the image using the compressor library
      const compressor = new Compressor(blob, options);
      console.log(compressor);
    }
    catch(error) {
      console.error(error)
      return null
    }
}
  // custom hook to fetch and compress an image
  function useCompressor(imageUrl, options = {}) {
      // state to hold the compressed image
      const [compressedImage, setCompressedImage] = useState(null)
      // fetch and compress the image url changes
      useEffect(() => {
          if(imageUrl) {
              fetchAndCompress(imageUrl, options).then((result) => {
                  setCompressedImage(result)
              })
          }
      }, [imageUrl, options])
      return compressedImage
  }

  export default useCompressor