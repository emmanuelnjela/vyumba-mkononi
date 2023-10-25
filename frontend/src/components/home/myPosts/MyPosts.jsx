import { useContext } from "react";

import HousesContext from "../../../context/housesContext";
import HouseCards from "../../common/houseCards/HouseCards";
import NavigatorBtn from "../../common/navigatorBtn";
import { Link } from "react-router-dom";
import Pagination from "../../common/pagination";
import _ from "lodash";

function MyPosts() {
  const { currentOwnerHouses } = useContext(HousesContext);

if (_.isEmpty(currentOwnerHouses)) {
  return (
    <div className="h-55vh">
      <h3 className="text--center mb-sm">Haujaweka tangazo lolote la nyumba!</h3>
      {/* <p className="d-flex align-items-center text--center"><i className="rounded rounded--sm rounded--primary ms-xsm fas fa-info"></i> kuhifadhi nyumba bonyeza alama ya <i className="fas fa-heart text--secondary ms-xsm"></i></p> */}
      <Link to={"/home"} className="btn btn--primary w-md-30 m-auto">Rudi Ukurasa Mkuu</Link>
    </div>
  );
}
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
