import { Link } from "react-router-dom";
import Like from "../../like";
import ToggleHouseSaveText from "./toggleHouseSaveText";

function ToggleHouseSave(props) {
  const {house, onUpdate, savedUpateObj} = props
  return (
    <Link to={""} className="link link--primary link--inline">
      <Like liked={house.isSaved} onLike={() => onUpdate(savedUpateObj)} />
      <ToggleHouseSaveText {...props}  />
    </Link>
  );
}

export default ToggleHouseSave