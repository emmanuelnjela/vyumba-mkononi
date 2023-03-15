import { useState } from "react";
import profile from "../../../imgs/profile.jpg";

function ProfileImgSide() {
  const [profileImage, setProfileImage] = useState(profile);
  function handleProfileChange(e) {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="profile__img-side">
      <h1 className="profile__title">Picha yangu</h1>
      <img src={profileImage} alt="" className="profile__img" />
      <div className="profile__input">
        <p className="profile__text">Badili Picha</p>
        <i className="fas fa-plus"></i>
        <input type="file" name="" id="" onChange={handleProfileChange} />
      </div>
    </div>
  );
}

export default ProfileImgSide;
