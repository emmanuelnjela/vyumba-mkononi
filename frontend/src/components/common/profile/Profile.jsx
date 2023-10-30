import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-toastify';

import UsersContext from "../../../context/usersContext.jsx";
import defaultProfileImage from "../../../imgs/profile.jpg";
import withPopUpCard from "../../hoc/withPopupCard.jsx";
import ProfileButtons from "./profileButtons.jsx";
import ProfileImgSide from "./profileImgSide.jsx";
import ProfileInfoSide from "./profileInfoSide.jsx";

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
      toast("Mabadiliko katika account yako, yamehifadhika kikamilifu!")
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
