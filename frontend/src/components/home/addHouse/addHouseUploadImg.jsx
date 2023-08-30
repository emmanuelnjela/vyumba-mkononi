import { useRef, useContext, useState } from "react";
import axios from "axios";
import AddHouseInfoContext from "../../../context/addHouseInfo";

import image from "../../../imgs/image.svg";
import { BtnCounter } from "./btnCounter";

// change this to use uploaded image preview
function AddHouseUploadImg() {
  const { houseInfo, onAddHouseInfo } = useContext(AddHouseInfoContext);
  const {imgs} = houseInfo
  const lastHouseImage = imgs[imgs.length - 1];

  const uploaded = useRef({
    isUploaded: lastHouseImage ? true : false,
    size: lastHouseImage ? imgs.length : 0,
    file: lastHouseImage
      ? `http://localhost:3001/images/${lastHouseImage}`
      : image,
  });

  function handleUploadedChange(e) {
    uploaded.current.isUploaded = true;
    uploaded.current.size++;
    handleUploadImg(e.target.files[0]);
  }
  async function handleUploadImg(img) {
    const formData = new FormData();
    formData.append("image", img);
    const respond = await axios.post(
      "http://localhost:3001/upload-house-img",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    const imgUrl = `http://localhost:3001/images/${respond.data.imgName}`
    uploaded.current.file = imgUrl
    const updatedImgs = [...houseInfo.imgs, imgUrl];
    onAddHouseInfo({ target: { name: "imgs", value: updatedImgs } });
  }

  return (
    <div className="add-house__upload-img">
      <h5 className="mb-xsm text--center">Weka picha za nyumba(chumba) hapa</h5>
      <div className="add-house__img-preview">
        <img
          src={uploaded.current.file}
          alt=""
          className={`add-house__img-preview-img${
            uploaded.current.isUploaded ? "--full" : ""
          }`}
        />
        {/* <p>Hakikisha hapa picha uliyoweka</p> */}
      </div>
      <BtnCounter uploaded={uploaded} />
      <div className="add-house__upload-input">
        <input
          type="file"
          name="image"
          accept="image/*"
          id=""
          onChange={handleUploadedChange}
        />
        <button className="add-house__btn btn btn--primary">
          weka picha <i className="fas fa-upload icon--md"></i>
        </button>
      </div>
    </div>
  );
}

export default AddHouseUploadImg;
