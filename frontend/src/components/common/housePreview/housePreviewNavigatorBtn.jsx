import { Link } from "react-router-dom";
import NavigatorBtn from "../navigatorBtn";

export default function HousePreviewNavigatorBtn() {
  return (
    <Link
      to="/home"
      className="navigator-btn house-preview__navigator-btn house-preview__navigator-btn-left"
    >
      <NavigatorBtn position="left" />
    </Link>
  );
}
