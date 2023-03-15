import { Link, Route, Routes, useParams } from "react-router-dom";

import { housesInDB } from "../../../data/falseHouseAPI";
import { Crud } from "../../../utils/crudOperations";
import NavigatorBtn from "../navigatorBtn";
import HousePreviewImgs from "./housePreviewImgs";
import HousePreviewInfo from "./housePreviewInfo";
import Profile from "../profile/Profile";

function HousePreview() {
  const housesCrud = new Crud(housesInDB)

  const { id } = useParams();
  const house = housesCrud.getData(id);

  return (
    <div className="house-preview">
      <Routes>
        <Route path="profile" element={<Profile />}/>
      </Routes>
      <Link to="/home" className="house-preview__navigator-btn">
        <NavigatorBtn position="left" />
      </Link>
      <HousePreviewImgs house={house} />
      <HousePreviewInfo />
    </div>
  );
}

export default HousePreview;


