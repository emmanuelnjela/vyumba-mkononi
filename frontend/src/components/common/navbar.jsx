import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../imgs/logo.png";

function Navbar({ navItems = [] }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const navMenuClicked = () => setShowDropdown(!showDropdown);
  return (
    <div className="navbar">
      <NavLink to={"/"} className="navbar__brand">
        <img src={logo} alt="" className="navbar__brand-logo" />
        <h6 className="navbar__brand-name">Nyumba za Kupanga online</h6>
      </NavLink>
      <div className="navbar__links">
        <button className="btn navbar__menu" onClick={() => navMenuClicked()}>
          <i className={`fas ${showDropdown ? "fa-x" : "fa-bars"} fs-lg icon--secondary`}></i>
        </button>
        {navItems.map((navItem) => {
          return (
            <NavLink
              key={navItem.id}
              to={navItem.path || ""}
              className="navbar__link"
            >
              {navItem.link}
            </NavLink>
          );
        })}
      </div>
      {showDropdown && <div className="navbar__dropdown">
        {navItems.map((navItem) => {
          return (
            navItem.inDropdown && (
              <NavLink
                key={navItem.id}
                to={navItem.path || ""}
                className="navbar__link"
              >
                {navItem.link}
              </NavLink>
            )
          );
        })}
      </div>}
    </div>
  );
}

export default Navbar;
