import { useContext } from "react";

import HousesContext from "../../../context/housesContext";
import HouseCards from "../../common/houseCards/HouseCards";
import HomeNavbar from "../homeNavbar";

function MyPosts() {
  const { currentOwnerHouses } = useContext(HousesContext);

  return (
    <div className="myposts">
      <HomeNavbar />
      <div className="home__body">
        <HouseCards
          houses={currentOwnerHouses}
          houseCardsTitle="ULIZO ZIWEKA"
          layoutClass="grid-container"
        />
      </div>
    </div>
  );
}
export default MyPosts;
