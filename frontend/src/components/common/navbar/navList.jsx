import { NavLink } from "react-router-dom";

function NavList({navItems, showDropdownIn}) {
  return (
    <div className={`navbar__list d--${showDropdownIn}-none bg--light-primary`}>
      {navItems.map((navItem) => {
        if (navItem.inNavbarList)
          return (
            <NavLink
              key={navItem.id}
              to={navItem.path || ""}
              className={`navbar__item ${navItem.classes || ""}`}
            >
              {navItem.link}
            </NavLink>
          );
      })}
    </div>
  );
}

export default NavList