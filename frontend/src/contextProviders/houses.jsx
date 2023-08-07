import { useState } from "react";
import HousesContext from "../context/housesContext";
import { Crud } from "../utils/crudOperations";
import { housesInDB } from "../data/falseHouseAPI";

export function HousesProvider({ children }) {
  let updatedHouse = null;

  const [errors, setErrors] = useState([]);
  // const { getAllHouses, updateData, deleteHouse } = new Crud(housesInDB)
  const [houses, setHouses] = useState(housesInDB);
  // const [users, setUsers] = useState(usersInDB);
  const housesCrud = new Crud(houses);

  // const [currentUser, setCurrentUser] = useState(getCurrentUser());

  const handleHouseUpate = (houseToUpdate) => {
    let errorMessage = "";
    const [houseToUpdateID] = Object.keys(houseToUpdate);
    updatedHouse = housesCrud.updateData(
      houseToUpdateID,
      houseToUpdate[houseToUpdateID]
    );
    if (typeof updatedHouse === "string" || !updatedHouse) {
      errorMessage = `${Date()
        .match(/.{25}/)[0]
        .trimEnd()
        .replace(/[\s]/g, "-")} error -> ${updatedHouse}`;
      setErrors([...errors, { updateError: errorMessage }]);
      return;
    }
    setErrors([...errors, null]);
  };
  function handleHouseDelete(id) {
    const _houses = housesCrud.deleteData(id);
    if (typeof _houses !== "string") setHouses([..._houses]);
    console.log(id);
  }
  // context variables

  const housesContextObject = {
    all: houses,
    saved: houses?.filter(({ isSaved }) => isSaved === true),
    savedTotal: houses?.filter(({ isSaved }) => isSaved === true).length,
    getBySize: (size) => houses?.slice(0, size),
    onUpdate: handleHouseUpate,
    onHouseDelete: handleHouseDelete,
  };

  return (
    <HousesContext.Provider value={housesContextObject}>
      {children}
    </HousesContext.Provider>
  );
}
