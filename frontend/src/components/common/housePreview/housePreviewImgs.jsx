import { useState } from "react";
import { Link } from "react-router-dom";


import ShowNavigator from "./showNavigator";

function HousePreviewImgs({ imgs, onImgChange }) {
  
  return (
    <div className="house-preview__imgs">
      {imgs.map((img, index) => {
        return (
          <div className={`house-preview__img house-preview__img-${index + 1}`} key={index}>
            <ShowNavigator
              index={index}
              pos="right"
              condition={index === 0}
              onImgChange={onImgChange}
            />
            <img key={index} src={img} alt="" />
            <ShowNavigator
              index={index}
              pos="left"
              condition={index > 0}
              onImgChange={onImgChange}
            />
          </div>
        );
      })}
    </div>
  );
}

export default HousePreviewImgs;