import { NavLink } from "react-router-dom";

function NavBarLinks({
  containsNavLists,
  onNavMenuClicked,
  menuClicked,
  navItems,
}) {
  return (
    <div className="navbar__links">
      {containsNavLists && (
        <button
          className="btn btn--light-primary navbar__menu d--md-none"
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
            >
              {navItem.link}
            </NavLink>
          );
        }
      })}
    </div>
  );
}

export default NavBarLinks;
