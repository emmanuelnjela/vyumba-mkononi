import { NavLink } from "react-router-dom";
import Navbar from "../../common/navbar/Navbar";

function OverviewNavbar() {
    const navItems = [
        {
            id: 1, 
            path: "/about-us",
            text: "Kuhusu sisi",
            classes: "d--none d--sm-block",
            inNavbarList: true,
            link: <button className='btn btn--primary'><NavLink to={"/about-us"} style={{"color": "white"}}>Kuhusu sisi</NavLink></button>
        }
        ,
        {
          id: 2,
          path: "/register",
          link: <button className='btn btn--primary'>JIUNGE</button>,
        },
        {
          id: 3,
          path: "/login",
          link: <button className='btn btn--primary'>INGIA</button>,
        },
      ];
      return (
          <div className="overview-navbar">
            <Navbar navBrandHideSize="md" showDropdownIn="sm" navItems={navItems} />
        </div>
    )
}

export default OverviewNavbar