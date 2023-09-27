import HouseOwnerBtns from "../../houseOwnerBtns";
import HouseCardFooterBtn from "./houseCardFooterBtn";
import HouseFooterRoomType from "./houseFooterRoomType";

function HouseCardFooter(props) {
  return (
    <div className="housecard__footer d--flex space-btn">
      <HouseCardFooterBtn {...props}/>
      <HouseOwnerBtns houseId={props.houseId}/>
      <HouseFooterRoomType roomType={props.roomType}/>
    </div>
  );
}

export default HouseCardFooter
