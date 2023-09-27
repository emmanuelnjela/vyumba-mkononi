import { NavLink } from "react-router-dom";
import logo from "../../../imgs/logo.png";
import UsersContext from "../../../context/usersContext";
import { useContext } from "react";



function NavBarBrand({ navItems }) {
  const classes = `navbar__brand-name d--${
    navItems.length > 2 ? "lg" : "md"
  }-block`;

  const {isLogin} = useContext(UsersContext) 

  return (
    <NavLink to={isLogin ? "/home" : "/"} className="navbar__brand">
      <img src={logo} alt="" className="navbar__brand-logo" />
      <h6 className={classes}>Vyumba Mkononi</h6>
    </NavLink>
  );
}

export default NavBarBrand;
