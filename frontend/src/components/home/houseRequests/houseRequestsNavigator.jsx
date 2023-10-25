import { Link } from "react-router-dom";
import NavigatorBtn from "../../common/navigatorBtn";

function HouseRequestsNavigator() {
  return (
    <Link to="/home" className="house-requests__navigator">
      <NavigatorBtn position="left" />
    </Link>
  );
}

export default HouseRequestsNavigator;
