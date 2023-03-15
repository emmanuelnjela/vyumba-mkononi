import { useContext } from "react";

import HousesContext from "../../../context/housesContext";
import HouseCards from "../../common/houseCards/HouseCards";

function MyPosts() {
  const housesContext = useContext(HousesContext);

  return (
    <div className="home__body">
      <HouseCards
        houses={housesContext.all}
        houseCardsTitle="ULIZO ZIWEKA"
        layoutClass="grid-container"
      />
    </div>
  );
}
export default MyPosts;
