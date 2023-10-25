import { NavLink } from "react-router-dom";

function NavBarLinks({
  containsNavLists,
  onNavMenuClicked,
  onHideNavMenu,
  menuClicked,
  navItems,
  showDropdownIn,
}) {
  return (
    <div className="navbar__links">
      {containsNavLists && (
        <button
          className={`btn btn--light-primary navbar__menu d--${showDropdownIn}-none`}
          onClick={() => onNavMenuClicked()}
        >
          <i
            className={`fas fa-${
              menuClicked ? "x" : "bars"
            } fs-lg icon--secondary`}
          ></i>
        </button>
      )}
      {navItems.map((navItem) => {
        if (navItem) {
          return (
            <NavLink
              key={navItem.id}
              to={navItem.path || ""}
              className={`navbar__link ${navItem.classes || ""}`}
              onClick={onHideNavMenu}
            >
              {navItem.link}
            <div className="navlink-active-line"></div>
            </NavLink>
          );
        }
      })}
    </div>
  );
}

export default NavBarLinks;
