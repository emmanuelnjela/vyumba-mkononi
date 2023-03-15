import { Link } from "react-router-dom";

import NavigatorBtn from "../common/navigatorBtn";

function AuthNavigatorBtn() {
  return (
    <Link to="/" className="auth__navigator-btn">
      <NavigatorBtn position="left" />
    </Link>
  );
}

export default AuthNavigatorBtn;
