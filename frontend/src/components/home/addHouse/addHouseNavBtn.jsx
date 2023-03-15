import { Link } from "react-router-dom";

export function AddHouseNavBtn({
  arrow_direction,
  direction,
  text,
  isLastItem,
}) {
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


  return (
    <Link to={direction} className="btn btn--primary">
      <RenderLinkContent />
    </Link>
  );
}
