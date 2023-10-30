import { Outlet } from "react-router-dom";


import HomeNavbar from "./homeNavbar.jsx";

function HomeHeader() {

  return (
    <>
      <div className="home__header">
        <HomeNavbar />
        {/* <HomeSearchBar  /> */}
      </div>
      <Outlet />
    </>
  );
}

export default HomeHeader;

