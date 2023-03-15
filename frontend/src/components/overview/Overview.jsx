import OverviewBody from "./overview-body/overviewBody";
import OverviewHeader from "./overview-header/overviewHeader";
import OverviewFooter from "./overview-footer/overviewFooter";
import { Route, Routes } from "react-router-dom";


function Overview() {
  return (
    <div className="overview">
      <Routes>
        <Route index element={<OverviewHeader />}></Route>
        <Route path="/main" element={<OverviewBody />}>
          <Route index element={<OverviewFooter />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Overview;
