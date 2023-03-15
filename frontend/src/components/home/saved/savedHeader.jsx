import NavigatorBtn from "../../common/navigatorBtn";
import LineDivider from "../../common/lineDivider";
import { Link } from "react-router-dom";

function SavedHeader() {
  return (
    <div className="saved__header">
      <Link to="/home" className="saved__navigator-btn">
        <NavigatorBtn position="left" />
      </Link>
      <h1 className="text--center">Ulizo Hifadhi</h1>
      <LineDivider />
    </div>
  );
}

export default SavedHeader;
