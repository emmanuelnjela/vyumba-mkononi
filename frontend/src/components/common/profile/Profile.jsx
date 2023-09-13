import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../../../context/usersContext";
import { useState } from "react";
import profile from "../../../imgs/profile.jpg";
import withPopUpCard from "../../hoc/withPopupCard";
import ProfileButtons from "./profileButtons";
import ProfileImgSide from "./profileImgSide";
import ProfileInfoSide from "./profileInfoSide";

function Profile() {
  const { currentUser, onUserUpdate, onUserDelete } =
    useContext(CurrentUserContext);
  const [profileImage, setProfileImage] = useState(currentUser?.profileImage || profile);
  console.log(profileImage)

  const navigate = useNavigate();
  // console.log(currentUser)
  const handleProfileDataSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name: submitterName } = e.nativeEvent.submitter;
      if (submitterName === "deleteAccount") {
        const users = await onUserDelete(currentUser._id);
        return;
      }
      const inputs = Array.from(e.target.elements)
        .map(({ name, value }) => {
          return name.length > 0 ? { name, value } : null;
        })
        .filter((i) => i);
      onUserUpdate({ [currentUser._id]: [...inputs, {name: 'profileImage', value: profileImage}] });
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const handleProfileImg = (imgUrl) => setProfileImage(imgUrl)
  return (
    <form onSubmit={handleProfileDataSubmit} className="profile">
      <ProfileImgSide
        currentUser={currentUser}
        profileImage={profileImage}
        onProfileImage={handleProfileImg}
      />
      <ProfileInfoSide currentUser={currentUser} />
      <ProfileButtons />
    </form>
  );
}

export default withPopUpCard(Profile);
