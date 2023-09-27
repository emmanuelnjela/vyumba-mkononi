import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UsersContext from "../../../context/usersContext";
import { useState } from "react";
import axios from "axios";
import defaultProfileImage from "../../../imgs/profile.jpg";
import withPopUpCard from "../../hoc/withPopupCard";
import ProfileButtons from "./profileButtons";
import ProfileImgSide from "./profileImgSide";
import ProfileInfoSide from "./profileInfoSide";
import HousesContext from "../../../context/housesContext";

function Profile() {
  const { currentUser, onUserUpdate } =
    useContext(UsersContext);

  const [profileImage, setProfileImage] = useState(
    currentUser.profileImage
  );
  console.log(profileImage, currentUser);

  const navigate = useNavigate();
  // console.log(currentUser)
  const handleProfileDataSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name: submitterName } = e.nativeEvent.submitter;
      if (submitterName === "deleteAccount") {
        
        return navigate("/home/deleteAccountComfirmMessage");
      }
      const inputs = Array.from(e.target.elements)
        .map(({ name, value }) => {
          return name.length > 0 ? { name, value } : null;
        })
        .filter((i) => i);
      onUserUpdate({
        [currentUser._id]: [
          ...inputs,
          { name: "profileImage", value: profileImage },
        ],
      });
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const handleProfileImg = (imgUrl) => setProfileImage(imgUrl);
  return (
    <form onSubmit={handleProfileDataSubmit} className="profile">
      <ProfileImgSide
        currentUser={currentUser}
        profileImage={profileImage || currentUser.profileImage || defaultProfileImage}
        onProfileImage={handleProfileImg}
      />
      <ProfileInfoSide currentUser={currentUser} />
      <ProfileButtons />
    </form>
  );
}

export default withPopUpCard(Profile);
