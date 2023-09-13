import axios from "axios";
import { useContext, useEffect } from "react";
import UsersContext from "../../../context/usersContext";

function ProfileImgSide({profileImage, onProfileImage}) {
const {currentUser} = useContext(UsersContext)
  
  async function handleProfileChange(e) {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    const respond = await axios.post(
      "http://localhost:3001/images/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    const imgUrl = `http://localhost:3001/images/${respond.data.imgName}`;

    onProfileImage(imgUrl);
  }
  console.log(profileImage)
  useEffect(() => {
    console.log(profileImage)
  })
  return (
    <div className="profile__img-side">
      <h1 className="profile__title">Picha yangu</h1>
      <img src={profileImage} alt="" className="profile__img" />
      <div className="profile__input">
        <p className="profile__text">Badili Picha</p>
        <i className="fas fa-plus"></i>
        <input type="file" name="image" accept="image/*" id="" onChange={handleProfileChange} />
      </div>
    </div>
  );
}

export default ProfileImgSide;
