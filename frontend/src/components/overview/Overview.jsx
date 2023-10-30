import { NavLink, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import OverviewIndex from "./OverviewIndex.jsx";
const OverviewAboutUs = lazy(() => import("./OverviewAboutUs.jsx"));
const HouseSearchBarMessage = lazy(() => import("../common/houseSearchBarMessage.jsx"));

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
