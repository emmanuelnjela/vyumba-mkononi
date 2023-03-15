import { useContext } from "react";
import { useParams } from "react-router-dom";
import HousesContext from "../../context/housesContext";

import RenderHouseOwnerBtn from "./renderComp/renderHouseOwnerBtn";

function HouseOwnerBtns({ withText, houseId }) {
  // console.log(houseId)
  const { "*": currentPage } = useParams();
  const { onHouseDelete } = useContext(HousesContext)
  const pageViewMyPosts = currentPage === "my_posts";

  return (
    pageViewMyPosts && (
      <div className="house-owner-btns d--flex c-gap-xsm">
        <RenderHouseOwnerBtn
          withText={withText}
          btnText="Badili"
          iconName="pencil"
        />
        <RenderHouseOwnerBtn
          withText={withText}
          btnText="Futa"
          iconName="trash"
          houseId={houseId}
          onHouseDelete={onHouseDelete}
        />
      </div>
    )
  );
}

export default HouseOwnerBtns;
