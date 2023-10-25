import { useState } from "react";

import NavBarBrand from "./navBarBrand";
import NavBarLinks from "./navBarLinks";
import NavList from "./navList";

function Navbar({ navItems, showDropdownIn = "md" }) {
  const [menuClicked, setMenuClicked] = useState(false);
  const containsNavLists = navItems.some((navItem) => navItem.inNavbarList);
  function handleNavMenuClicked() {
    setMenuClicked(!menuClicked);
  }
  function handleHideNavMenu() {
    setMenuClicked(false)
  }
  return (
    <div className="navbar">
      <NavBarBrand navItems={navItems} />
      <NavBarLinks
        containsNavLists={containsNavLists}
        onNavMenuClicked={handleNavMenuClicked}
        onHideNavMenu={handleHideNavMenu}
        menuClicked={menuClicked}
        navItems={navItems}
        showDropdownIn={showDropdownIn}
      />

      {menuClicked && containsNavLists ? (
        <NavList
          navItems={navItems}
          showDropdownIn={showDropdownIn}
          onNavMenuClicked={handleNavMenuClicked}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
