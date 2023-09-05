import { useContext } from "react";

import HousesContext from "../../../context/housesContext";
import HouseCards from "../../common/houseCards/HouseCards";

function MyPosts() {
  const {currentOwnerHouses} = useContext(HousesContext);

  return (
    <div className="home__body">
      <HouseCards
        houses={currentOwnerHouses}
        houseCardsTitle="ULIZO ZIWEKA"
        layoutClass="grid-container"
      />
    </div>
  );
}
export default MyPosts;
