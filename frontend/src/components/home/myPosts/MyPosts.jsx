import { useContext } from "react";

import HousesContext from "../../../context/housesContext";
import HouseCards from "../../common/houseCards/HouseCards";
import NavigatorBtn from "../../common/navigatorBtn";
import { Link } from "react-router-dom";
import Pagination from "../../common/pagination";

function MyPosts() {
  const { currentOwnerHouses } = useContext(HousesContext);
console.log(currentOwnerHouses)
  return (
    <div className="myposts">
      <div className="myPosts__body">
        <Pagination
          items={currentOwnerHouses}
          itemsPerPage={4}
          RenderItems={HouseCards}
          houseCardsTitle="ULIZO ZIWEKA"
          layoutClass="grid-container"
        />
      </div>
      <Link to={"/home"} className="myposts__navigator">
        <NavigatorBtn position={"left"} />
      </Link>
    </div>
  );
}
export default MyPosts;
