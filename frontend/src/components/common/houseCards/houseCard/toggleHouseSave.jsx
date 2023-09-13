import { Link } from "react-router-dom";
import Like from "../../like";
import ToggleHouseSaveText from "./toggleHouseSaveText";

function ToggleHouseSave(props) {
  const { onUpdate, savedUpateObj, isCurrentUserHouseLike } = props;

  return (
    <Link to={""} className="link link--primary link--inline">
      <Like
        liked={isCurrentUserHouseLike}
        onLike={() => onUpdate(savedUpateObj)}
      />
      <ToggleHouseSaveText
        savedUpateObj={savedUpateObj}
        isCurrentUserLikeHouse={isCurrentUserHouseLike}
        onUpdate={onUpdate}
      />
    </Link>
  );
}

export default ToggleHouseSave;
