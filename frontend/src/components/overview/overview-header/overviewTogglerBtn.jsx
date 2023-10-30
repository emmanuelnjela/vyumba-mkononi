import { NavLink } from "react-router-dom"

import TogglerBtn from "../../common/togglerBtn.jsx"

function OverviewTogglerBtn() {
    return (
        <NavLink to={"/main"} className='overview__header-toggler-btn'>
        <TogglerBtn />
      </NavLink>
    )
}

export default OverviewTogglerBtn