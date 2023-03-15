import HouseOwnerBtns from "../../houseOwnerBtns";
import HouseCardFooterBtn from "./houseCardFooterBtn";

function HouseCardFooter(props) {
  return (
    <div className="housecard__footer d--flex space-btn">
      <HouseCardFooterBtn {...props}/>
      <HouseOwnerBtns houseId={props.houseId}/>
    </div>
  );
}

export default HouseCardFooter
