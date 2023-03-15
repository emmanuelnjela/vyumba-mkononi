import { Outlet } from "react-router-dom";

import CustomerReviews from "./customerReviews/CustomerReviews";
import OverviewBodyNavigatorBtn from "./overviewBodyNavigatorBtn";
import About from "./about/About";
import HousesPreviews from "./housesPreview/HousesPreviews"

function OverviewBody() {

  return (
    <>
      <div className="overview__body" id="main">
        <HousesPreviews />
        <About />
        <CustomerReviews />
        <OverviewBodyNavigatorBtn />
      </div>
      <Outlet />
    </>
  );
}

export default OverviewBody;
