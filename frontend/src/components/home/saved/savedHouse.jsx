import { useContext } from "react";

import HouseDetails from "../../common/houseDetails.jsx";
import ContactIcons from "../../common/contactIcons.jsx";
import { toggleElementAdd } from "../../../utils/toggleElementAdd.jsx";
import UsersContext from "../../../context/usersContext.jsx";

function SavedHouse({ house, listItems, onUpdate }) {
  const {currentUser} = useContext(UsersContext)

  let isCurrentUserHouseLike = (currentUser.savedHouses || []).some((savedHouseId) => savedHouseId === house._id)

  const savedHousesNewValue = toggleElementAdd(house._id, currentUser.savedHouses, isCurrentUserHouseLike)
  console.log(house)
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
            onUpdate({ [currentUser._id]: [{ name: 'savedHouses',value: savedHousesNewValue }] })
          }
        >
          Futa <i className="icon fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default SavedHouse;
