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
  return (
    <div className="navbar">
      <NavBarBrand navItems={navItems} />
      <NavBarLinks
        containsNavLists={containsNavLists}
        onNavMenuClicked={handleNavMenuClicked}
        menuClicked={menuClicked}
        navItems={navItems}
        showDropdownIn={showDropdownIn}
      />

      {menuClicked && containsNavLists ? (
        <NavList navItems={navItems} showDropdownIn={showDropdownIn} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
