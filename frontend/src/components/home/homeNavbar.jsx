import { useContext, useEffect, useRef } from "react";

import Navbar from "../common/navbar/Navbar";
import Image from "../common/image";
import HousesContext from "../../context/housesContext";
import CurrentUserContext from "../../context/usersContext";
import img from "../../imgs/profile.jpg";
import axios from "axios";
import { NavLink } from "react-router-dom";

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
      classes: classes.showInSmScreenWhenOwner,
      inNavbarList: isOwner ? true : false,
      text: "Mtangazo Niliyohifadhi",
      link: (
        <i className="fas fa-heart icon--secondary icon--xlg me-lg">
          <span className="counter-info">{size}</span>
        </i>
      ),
    },
    {
      id: 2,
      path: "/home/add_request",
      text: "Weka Ombi",
      link: (
        <button className="btn btn--primary btn--rounded">
          Tafutiwa Nyumba
          {/* <i className="fas fa-plus icon--md"></i> */}
        </button>
      ),
    },
    {
      id: 3,
      inNavbarList: isOwner ? true : false,
      path: "/home/add_house",
      classes: classes.showInMdScreenWhenOwner,
      text: "Weka Tangazo la nyumba",
      link: (
        <button className="btn btn--primary btn--rounded">
          Weka Tangazo <i className="fas fa-plus icon--md"></i>
        </button>
      ),
    },
    {
      id: 4,
      inNavbarList: isOwner ? true : false,
      path: "/home/my_posts",
      classes: classes.showInMdScreenWhenOwner,
      text: "Matangazo Yangu",
      link: (
        <button className="btn btn--primary btn--rounded">
          Matangazo Yangu <i className="fas fa-house icon--md"></i>
        </button>
      ),
    },
    // {
    //   id: 5,
    //   inNavbarList: isOwner ? true : false,
    //   path: "/home/add_house",
    //   classes: classes.showInMdScreenWhenOwner,
    //   text: "Uliza Swali",
    //   link: (
    //     <button className="btn btn--primary btn--rounded">
    //       Uliza Swali <i className="fas fa-question icon--md"></i>
    //     </button>
    //   ),
    // },
    {
      id: 5,
      path: "/home/profile",
      // classes: classes.showInSmScreenWhenOwner,
      // inNavbarList: isOwner ? true : false,
      text: "Profile Yangu",
      link: (
        <Image
          imgSrc={currentUser?.profileImage || img}
          classes={"profile-img"}
        />
      ),
    },
    {
      id: 6,
      classes: classes.showInSmScreenWhenOwner,
      inNavbarList: isOwner ? true : false,
      path: "/home/logout", // change path to /logout
      text: "Ondoka Kwenye Website",
      textClasses: "btn btn--primary-muted",
      link: <button className="btn btn--primary">TOKA</button>,
    },
  ];

  const handleNavMenuClicked = {};
  return <Navbar navItems={navItems} onNavMenuClicked={handleNavMenuClicked} />;
}

export default HomeNavbar;
