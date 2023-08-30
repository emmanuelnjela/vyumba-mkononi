import HouseDetails from "../../common/houseDetails";
import ContactIcons from "../../common/contactIcons";

function SavedHouse({ house, listItems, onUpdate }) {
  return (
    <div className="saved__house">
      <img
        src={house.imgs[0]}
        className="saved__house-img"
        alt=""
      />
      <div className="saved__house-about">
        <div className="saved__house-brief">
          <HouseDetails house={house} />
        </div>
        <div className="saved__house-contacts">
          <h6 className="text--dark">Mawasiliano</h6>
          <ContactIcons  />
        </div>
        <button
          className="btn btn--danger"
          onClick={() =>
            onUpdate({ [house._id]: [{ name: "isSaved", value: !house.isSaved }] })
          }
        >
          Futa <i className="icon fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default SavedHouse;
