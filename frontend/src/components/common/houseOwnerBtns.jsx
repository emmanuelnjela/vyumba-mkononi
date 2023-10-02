import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HousesContext from "../../context/housesContext";

import RenderHouseOwnerBtn from "./renderComp/renderHouseOwnerBtn";
import { toast } from "react-toastify";

function HouseOwnerBtns({ withText, houseId }) {
  // console.log(houseId)
  const { "*": currentPage } = useParams();
  const { onHouseDelete } = useContext(HousesContext)
  const pageViewMyPosts = currentPage === "my_posts";
  const navigate = useNavigate()

  async function handleDelete() {
    try {
      await onHouseDelete(houseId)
      toast("Chumba chako kimefutwa kikamilifu")
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    pageViewMyPosts && (
      <div className="house-owner-btns d--flex c-gap-xsm">
        <RenderHouseOwnerBtn
          withText={withText}
          btnText="Badili"
          iconName="pencil"
          houseId={houseId}
          onClick={() => navigate(`/home/add_house`, {state: houseId})}
        />
        <RenderHouseOwnerBtn
          withText={withText}
          btnText="Futa"
          iconName="trash"
          onClick={handleDelete}
        />
      </div>
    )
  );
}

export default HouseOwnerBtns;
