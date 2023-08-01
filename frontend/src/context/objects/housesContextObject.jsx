import { useState } from "react";
import { housesInDB } from "./data/falseHouseAPI";
import { Crud } from "./utils/crudOperations";

export default function GetHousesContextObject() {
    let updatedHouse = null;
    const [errors, setErrors] = useState([]);
    const [houses, setHouses] = useState(housesInDB);
    const housesCrud = new Crud(houses);
  
  
    const handleHouseUpate = (houseToUpdate) => {
      console.log(houseToUpdate);
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
    return { housesContextObject };
  }