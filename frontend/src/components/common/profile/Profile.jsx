import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../../../context/currentUserContext";
import NavigatorBtn from "../../common/navigatorBtn";
import withPopUpCard from "../../hoc/withPopupCard";
import ProfileButtons from "./profileButtons";
import ProfileImgSide from "./profileImgSide";
import ProfileInfoSide from "./profileInfoSide";

function Profile() {

  const { user: currentUser, onUserUpdate } = useContext(CurrentUserContext);

  const navigate = useNavigate()
  // console.log(currentUser)
  const handleProfileDataSubmit = (e) => {
    const inputs = Array.from(e.target.elements)
      .map(({ name, value }) => {
        return name.length > 0 ? { name, value } : null;
      })
      .filter((i) => i);

    console.log(inputs);
    onUserUpdate({[currentUser._id]: inputs})
    navigate('/home')
    e.preventDefault();
  };
  return (
    <form onSubmit={handleProfileDataSubmit} className="profile">
      <ProfileImgSide currentUser={currentUser} />
      <ProfileInfoSide currentUser={currentUser} />
      <ProfileButtons />
    </form>
  );
}

export default withPopUpCard(Profile);
