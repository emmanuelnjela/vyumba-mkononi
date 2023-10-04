import { useContext } from "react";

import HousesContext from "../../../context/housesContext";
import HouseCards from "../../common/houseCards/HouseCards";
import NavigatorBtn from "../../common/navigatorBtn";
import { Link } from "react-router-dom";

function MyPosts() {
  const { currentOwnerHouses } = useContext(HousesContext);

  return (
    <div className="myposts">
      <div className="myPosts__body">
        <HouseCards
          houses={currentOwnerHouses}
          houseCardsTitle="ULIZO ZIWEKA"
          layoutClass="grid-container"
        />
      </div>
      <Link to={"home"} className="myposts__navigator">
        <NavigatorBtn position={"left"} />
      </Link>
    </div>
  );
}
export default MyPosts;
