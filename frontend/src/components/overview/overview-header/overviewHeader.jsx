import Navbar from "../../common/navbar/Navbar";
import OverviewSearchbar from "./overviewSearchbar";
import OverviewNavigatorBtn from "./overviewNavigatorBtn";

function OverviewHeader() {
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
    <div className='overview__header'>
      <Navbar navBrandHideSize="md" navItems={navItems} />
      <OverviewSearchbar />
      <OverviewNavigatorBtn />
    </div>
  );
}

export default OverviewHeader;
