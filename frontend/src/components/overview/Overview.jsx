import OverviewBody from "./overview-body/overviewBody";
import OverviewHeader from "./overview-header/overviewHeader";
import OverviewFooter from "./overview-footer/overviewFooter";
import { Route, Routes } from "react-router-dom";
import Navbar from "../common/navbar/Navbar";


function Overview() {
  const navItems = [
    {
      id: 1,
      path: "/register",
      link: <button className='btn btn--primary'>JIUNGE</button>,
    },
    {
      id: 2,
      path: "/login",
      link: <button className='btn btn--primary'>INGIA</button>,
    },
  ];

      
  return (
    <div className="overview">
      <Navbar navBrandHideSize="md" navItems={navItems} />
      <OverviewBody />
      <OverviewFooter />
      {/* <Routes>
        <Route index element={<OverviewHeader />}></Route>
        <Route path="/main" element={<OverviewBody />}>
          <Route index element={<OverviewFooter />} />
        </Route>
      </Routes> */}
    </div>
  );
}

export default Overview;
