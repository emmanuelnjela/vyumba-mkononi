import { useContext } from "react";
import axios from "axios";

import AddHouseInfoContext from "../../../context/addHouseInfo.jsx";
import image from "../../../imgs/image.svg";
import { BtnCounter } from "./btnCounter.jsx";

// change this to use uploaded image preview
function AddHouseUploadImg() {
  const { houseInfo, onAddHouseInfo, currentHouseId } =
    useContext(AddHouseInfoContext);
  const { imgs } = houseInfo;
  const lastHouseImage = imgs[imgs.length - 1];
  const isImageUploaded = imgs.length > 0;

  const handleUploadedChange = (e) => handleUploadImg(e.target.files[0]);

  async function handleUploadImg(img) {
    const formData = new FormData();
    formData.append("image", img);
    const respond = await axios.post(
      "https://vyumba-mkononi-backend.onrender.com/images/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    console.log(respond.data.imgName)
    const imgUrl = `https://vyumba-mkononi-backend.onrender.com/images/${respond.data.imgName}`;
    const updatedImgs = [...houseInfo.imgs, imgUrl];
    onAddHouseInfo("imgs", updatedImgs);
  }

  const handleDeleteImage = async () => {
    try {
      if (currentHouseId) {
        const response = await axios.delete(
          `${lastHouseImage}?houseId=${currentHouseId}`,
          {
            withCredentials: true,
          }
        );
        console.log(response.status !== 204);
        if (response.status !== 204) {
          const { message } = response.data;
          throw new Error(message);
        }
      }
      const updatedImgs = houseInfo.imgs.slice(0, houseInfo.imgs.length - 1);
      onAddHouseInfo({ target: { name: "imgs", value: updatedImgs } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-house__upload-img">
      <h5 className="mb-xsm text--center">Weka picha za nyumba(chumba) hapa</h5>
      <div className="add-house__img-preview">
        {isImageUploaded && (
          <div className="add-house__img-preview-action-btns">
            <button
              className={`btn btn--danger ms-md`}
              onClick={handleDeleteImage}
            >
              Futa
            </button>
          </div>
        )}
        
        <img
          src={lastHouseImage || image}
          alt=""
          className={`add-house__img-preview-img${
            isImageUploaded ? "--full" : ""
          }`}
        />
        {/* <p>Hakikisha hapa picha uliyoweka</p> */}
      </div>
      <BtnCounter size={imgs.length} />
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
