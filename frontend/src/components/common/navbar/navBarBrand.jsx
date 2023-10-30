import { NavLink } from "react-router-dom";
import { useContext } from "react";

import logo from "../../../imgs/logo.png";
import UsersContext from "../../../context/usersContext.jsx";



function NavBarBrand({ navItems }) {
  const classes = `navbar__brand-name d--${
    navItems.length > 2 ? "lg" : "md"
  }-block`;

  const {isLogin} = useContext(UsersContext) 

  return (
    <NavLink to={isLogin ? "/home" : "/"} className="navbar__brand">
      <img src={logo} alt="" className="navbar__brand-logo" />
      <h6 className={`${classes} ms-xsm`}>Vyumba Mkononi</h6>
    </NavLink>
  );
}

export default NavBarBrand;
