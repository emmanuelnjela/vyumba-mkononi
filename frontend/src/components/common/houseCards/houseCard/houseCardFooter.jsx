import HouseOwnerBtns from "../../houseOwnerBtns.jsx";
import HouseCardFooterBtn from "./houseCardFooterBtn.jsx";
import HouseFooterRoomType from "./houseFooterRoomType.jsx";

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
