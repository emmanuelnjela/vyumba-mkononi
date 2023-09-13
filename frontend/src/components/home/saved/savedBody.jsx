import { useContext } from "react";
import { Link } from "react-router-dom";

import HousesContext from "../../../context/housesContext";
import { SavedBodyLeft } from "./savedBodyLeft";
import { SavedBodyRight } from "./savedBodyRight";
import UsersContext from "../../../context/usersContext";

function SavedBody() {
  const housesContext = useContext(HousesContext);
  const usersContext = useContext(UsersContext);

  const { getById } = housesContext;
  const { onUserUpdate: onUpdate, currentUser } = usersContext;

  const savedHouses = (currentUser?.savedHouses || []).map(id => getById(id))
  
  const timeItems = [{ id: 1, content: "Zilizowekwa Mapema" }];

  return (
    <div className="saved__body px-md">
      <SavedBodyLeft timeItems={timeItems} />
      <SavedBodyRight houses={savedHouses} onUpdate={onUpdate} />
    </div>
  );
}

export default SavedBody;
