import { useContext } from "react";

import HousesContext from "../../../../context/housesContext.jsx";
import HouseCards from "../../../common/houseCards/HouseCards.jsx";

function HomeBody() {
  const housesContext = useContext(HousesContext);
  return (
    <div className="housesPreviews">
      <HouseCards
        currentItems={housesContext.getBySize(4)}
        houseCardsTitle="ZILIZOWEKWA HIVI KARIBUNI"
        layoutClass="grid-container"
      />
    </div>
  );
}

export default HomeBody;