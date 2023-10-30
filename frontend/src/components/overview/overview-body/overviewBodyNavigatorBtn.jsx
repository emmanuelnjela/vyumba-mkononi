import { NavLink } from "react-router-dom";

import NavigatorBtn from "../../common/navigatorBtn.jsx";

function OverviewBodyNavigatorBtn() {
  return (
    <NavLink to="/" className="overview__body-navigator-btn">
      <NavigatorBtn position="up" /> <h6>MWANZO</h6>
    </NavLink>
  );
}

export default OverviewBodyNavigatorBtn;
