import { Outlet } from "react-router-dom";

import OverviewBodyNavigatorBtn from "./overviewBodyNavigatorBtn.jsx";
import HousesPreviews from "./housesPreview/HousesPreviews.jsx"

function OverviewBody() {

  return (
    <>
      <div className="overview__body" id="main">
        <HousesPreviews />
        {/* <About />
        <CustomerReviews /> */}
        <OverviewBodyNavigatorBtn />
      </div>
      <Outlet />
    </>
  );
}

export default OverviewBody;
