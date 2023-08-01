import { NavLink } from "react-router-dom";
import logo from "../../../imgs/logo.png";
import Cookies from "universal-cookie";

function NavBarBrand({ navItems }) {
  const classes = `navbar__brand-name d--${
    navItems.length > 2 ? "lg" : "md"
  }-block`;

  const cookies = new Cookies()
  const accessKey = cookies.get("accessKey")
  
  return (
    <NavLink to={accessKey ? "/home" : "/"} className="navbar__brand">
      <img src={logo} alt="" className="navbar__brand-logo" />
      <h6 className={classes}>Vyumba vya Kupanga online</h6>
    </NavLink>
  );
}

export default NavBarBrand;
