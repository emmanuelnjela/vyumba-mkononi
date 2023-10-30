import LineDivider from "../lineDivider.jsx";

function HouseCardsHeader({ houseCardsTitle }) {
  return (
    <div className="housecards__header">
      <h5>{houseCardsTitle}</h5>
      <LineDivider />
    </div>
  );
}

export default HouseCardsHeader;
