import { NavLink, Route, Routes } from "react-router-dom";
import OverviewIndex from "./OverviewIndex";
import { lazy } from "react";
const OverviewAboutUs = lazy(() => import("./OverviewAboutUs"));
const HouseSearchBarMessage = lazy(() => import("../common/houseSearchBarMessage"));

function Overview() {
  return (
    <div className="overview">
      <Routes>
        <Route path="/" element={<OverviewIndex />}>
          <Route
            path="/house-search-bar-message"
            element={<HouseSearchBarMessage />}
          />
        </Route>
        <Route path="/about-us" element={<OverviewAboutUs />} />
      </Routes>
    </div>
  );
}

export default Overview;
