import LineDivider from "../lineDivider";
import ProfileInfo from "./profileInfo";

function ProfileInfoSide({currentUser}) {
  return (
    <div className="profile__info-side">
      <h1 className="profile__title">Taarifa Zangu</h1>
      <LineDivider />
      <ProfileInfo currentUser={currentUser} />
    </div>
  );
}

export default ProfileInfoSide;
