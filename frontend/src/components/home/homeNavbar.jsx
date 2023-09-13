import { useContext, useEffect, useRef } from "react";

import Navbar from "../common/navbar/Navbar";
import Image from "../common/image";
import HousesContext from "../../context/housesContext";
import CurrentUserContext from "../../context/usersContext";
import img from "../../imgs/profile.jpg";
import axios from "axios";

function HomeNavbar() {
  const houses = useContext(HousesContext);
  const currentUserContext = useContext(CurrentUserContext);

  const { isOwner, currentUser } = currentUserContext;

  const classes = {
    showInMdScreenWhenOwner: `d--none d--md-${isOwner ? "block" : "none"}`,
    showInSmScreenWhenOwner: `${isOwner ? "d--none d--sm-block" : "d--block"}`,
  };
  const { length: size } = currentUser?.savedHouses
    ? currentUser.savedHouses
    : { length: 0 };

  const navItems = [
    {
      id: 1,
      path: "/home/saved",
      link: (
        <i className="fas fa-heart icon--secondary icon--xlg me-lg">
          <span className="counter-info">{size}</span>
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
      link: <Image imgSrc={currentUser?.profileImage || img} classes={"profile-img"} />,
    },
    {
      id: 5,
      path: "/logout", // change path to /logout
      link: <button className="btn btn--primary">TOKA</button>,
    },
  ];

  const handleNavMenuClicked = {};
  return <Navbar navItems={navItems} onNavMenuClicked={handleNavMenuClicked} />;
}

export default HomeNavbar;
