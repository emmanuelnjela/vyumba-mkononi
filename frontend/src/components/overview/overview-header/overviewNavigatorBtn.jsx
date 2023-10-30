import { NavLink } from "react-router-dom";

import NavigatorBtn from "../../common/navigatorBtn.jsx";

function OverviewNavigatorBtn() {
  return (
    <NavLink to="/main" className="overview__header-navigator-btn">
      <NavigatorBtn />
      <h5 className="text--secondary">ANGALIA KUUSU SISI</h5>
    </NavLink>
  );
}

export default OverviewNavigatorBtn;
