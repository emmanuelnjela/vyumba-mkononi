import HouseCard from "./houseCard/housecard";

function HouseCardsBody({ houses, layoutClass}) {
  return (
    <div className={`housecards__body ${layoutClass || ""}`}>
      {houses.map((h) => (
        <HouseCard key={h._id} house={h} />
      ))}
    </div>
  );
}
export default HouseCardsBody;
