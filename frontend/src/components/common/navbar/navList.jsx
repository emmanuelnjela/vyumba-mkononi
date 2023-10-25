import { NavLink } from "react-router-dom";

function NavList({ navItems, showDropdownIn, onNavMenuClicked }) {
  return (
    <div className={`navbar__list d--${showDropdownIn}-none bg--light-primary`}>
      {navItems.map((navItem) => {
        if (navItem.inNavbarList)
          return (
            <NavLink
              key={navItem.id}
              to={navItem.path || ""}
              className={`navbar__item ${navItem.classes || " "}  ${
                navItem.textClasses ? navItem.textClasses : "btn btn--white"
              } `}
              onClick={onNavMenuClicked}
            >
              {navItem.text}
            </NavLink>
          );
      })}
    </div>
  );
}

export default NavList;
