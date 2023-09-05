import NavigatorBtn from "../../common/navigatorBtn";
import LineDivider from "../../common/lineDivider";
import { Link } from "react-router-dom";
import HomeNavbar from "../homeNavbar";

function SavedHeader() {
  return (
    <div className="saved__header">
      <HomeNavbar />
      <div className="saved__title px-md pt-sm">
        <h1 className="text--center">Ulizo Hifadhi</h1>
        <LineDivider />
      </div>
    </div>
  );
}

export default SavedHeader;
