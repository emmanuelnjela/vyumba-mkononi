import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../common/navbar/Navbar";
import Image from "../common/image";
import HousesContext from "../../context/housesContext";
import CurrentUserContext from "../../context/currentUserContext";
import img from "../../imgs/profile.jpg";
import HomeSearchBar from "./homeSearchBar";

function HomeHeader() {
  const houses = useContext(HousesContext);
  const currentUserContext = useContext(CurrentUserContext);

  const { isOwner } = currentUserContext;

  const classes = {
    showInMdScreenWhenOwner: `d--none d--md-${isOwner ? "block" : "none"}`,
    showInSmScreenWhenOwner: `${isOwner ? "d--none d--sm-block" : "d--block"}`,
  };

  const navItems = [
    {
      id: 1,
      path: "/home/saved",
      link: (
        <i className="fas fa-heart icon--secondary icon--xlg me-lg">
          <span className="counter-info">{houses.savedTotal}</span>
        </i>
      ),
    },
    {
      id: 2,
      inNavbarList: isOwner ? true : false,
      path: "add_house",
      classes: classes.showInMdScreenWhenOwner,
      link: (
        <button className="btn btn--primary btn--rounded">
          Weka Chumba <i className="fas fa-plus icon--md"></i>
        </button>
      ),
    },
    {
      id: 3,
      inNavbarList: isOwner ? true : false,
      path: "my_posts",
      classes: classes.showInMdScreenWhenOwner,
      link: (
        <button className="btn btn--primary btn--rounded">
          Nilizoweka <i className="fas fa-house icon--md"></i>
        </button>
      ),
    },
    {
      id: 4,
      path: "profile",
      classes: classes.showInSmScreenWhenOwner,
      inNavbarList: isOwner ? true : false,
      link: <Image imgSrc={img} classes={"profile-img"} />,
    },
    {
      id: 5,
      path: "/", // change path to /logout 
      link: <button className="btn btn--primary">TOKA</button>,
    },
  ];


  const handleNavMenuClicked = {};
  return (
    <>
      <div className="home__header">
        <Navbar navItems={navItems} onNavMenuClicked={handleNavMenuClicked} />
        <HomeSearchBar  />
      </div>
      <Outlet />
    </>
  );
}

export default HomeHeader;

