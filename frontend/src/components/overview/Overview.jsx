
import { NavLink, Route, Routes } from "react-router-dom";
import OverviewIndex from "./OverviewIndex";
import OverviewAboutUs from "./OverviewAboutUs";


function Overview() {
      
  return (
    <div className="overview">
      
      <Routes>
        <Route index element={<OverviewIndex />}></Route>
        <Route path="/about-us" element={<OverviewAboutUs />}>
        </Route>
      </Routes>
    </div>
  );
}

export default Overview;
