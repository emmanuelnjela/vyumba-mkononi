import { useContext } from "react";
import { Link } from "react-router-dom";
import AddHouseInfoContext from "../../../context/addHouseInfo";

export function AddHouseNavBtn({
  arrow_direction,
  direction,
  text,
  isLastItem,
}) {
  const {onAddHouseInfoSubmit} = useContext(AddHouseInfoContext)
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
      to={direction}
      className="btn btn--primary"
      onClick={renderOnClick}
    >
      <RenderLinkContent />
    </Link>
  );
}
