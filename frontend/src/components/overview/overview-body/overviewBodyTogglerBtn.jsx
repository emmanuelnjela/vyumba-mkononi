import { NavLink } from "react-router-dom";
import TogglerBtn from "../../common/togglerBtn";

function OverviewBodyTogglerBtn() {
  return (
    <NavLink to={"/"} className='overview__body-toggler-btn'>
      <TogglerBtn position='up' /> <h6>MWANZO</h6>
    </NavLink>
  );
}

export default OverviewBodyTogglerBtn;
