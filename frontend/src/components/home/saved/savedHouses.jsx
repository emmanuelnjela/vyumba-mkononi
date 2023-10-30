import SavedHouse from "./savedHouse";

function SavedHouses({ currentItems: houses, ...rest }) {
  return (
    <div className="saved__houses">
      {houses.map((house) => (
        <SavedHouse key={house._id} house={house} {...rest} />
      ))}
    </div>
  );
}


export default SavedHouses


