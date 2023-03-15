import { useState } from "react";

const LowQualityImage = ({ src }) => {
  const [imgSrc, setImgSrc] = useState(null);

  const handleImageLoad = (e) => {
    const img = e.target;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const size = 50;

    canvas.width = size;
    canvas.height = size;

    ctx.filter = "blur(8px)";
    ctx.drawImage(img, 0, 0, size, size);

    setImgSrc(canvas.toDataURL());
  };
  return (
    <>
      <img
        src={imgSrc || src}
        onLoad={handleImageLoad}
        // style={{ filter: "blur(8px" }}
        alt=""
      />
    </>
  );
};

export default LowQualityImage;