import { useState } from "react";
import { Link } from "react-router-dom";

import { imageChanger } from "../../../utils/imageChanger";
import ShowNavigator from "./showNavigator";

function HousePreviewImgs({ house }) {
  const [imgs, setImgs] = useState(house.imgs);

  function handleImgChange(pos) {
    let images = [...imgs];
    images = images.map(imageChanger(images, pos));
    setImgs(images);
  }
  
  return (
    <div className="house-preview__imgs">
      {imgs.map((img, index) => {
        return (
          <div className={`house-preview__img house-preview__img-${index + 1}`}>
            <ShowNavigator
              index={index}
              pos="right"
              condition={index === 0}
              onImgChange={handleImgChange}
            />
            <img key={index} src={img} alt="" />
            <ShowNavigator
              index={index}
              pos="left"
              condition={index > 0}
              onImgChange={handleImgChange}
            />
          </div>
        );
      })}
    </div>
  );
}

export default HousePreviewImgs;