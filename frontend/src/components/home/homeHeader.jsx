import { Outlet } from "react-router-dom";


import HomeSearchBar from "./homeSearchBar";
import HomeNavbar from "./homeNavbar";

function HomeHeader() {

  return (
    <>
      <div className="home__header">
        <HomeNavbar />
        <HomeSearchBar  />
      </div>
      <Outlet />
    </>
  );
}

export default HomeHeader;

