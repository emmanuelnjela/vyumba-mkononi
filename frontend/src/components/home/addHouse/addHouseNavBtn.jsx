import { useContext } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import AddHouseInfoContext from "../../../context/addHouseInfo.jsx";

export function AddHouseNavBtn({
  arrow_direction,
  direction,
  text,
  isLastItem,
}) {
  const {onAddHouseInfoSubmit, errors} = useContext(AddHouseInfoContext)
  const RenderLinkContent = () =>
    isLastItem ? (
      <>
        kamilisha <i className="fas fa-check"></i>
      </>
    ) : (
      <>
        {text}
        <i className={`fas fa-arrow-${arrow_direction}`}></i>
      </>
    );
    const renderOnClick = isLastItem === true ? onAddHouseInfoSubmit : () => console.log("guck")
  return (
    <Link
      to={`/home/add_house/${direction}`}
      className="btn btn--primary"
      onClick={renderOnClick}
    >
      <RenderLinkContent />
    </Link>
  );
}
