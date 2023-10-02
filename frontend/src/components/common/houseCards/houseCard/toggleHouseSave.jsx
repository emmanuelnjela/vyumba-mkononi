import { Link } from "react-router-dom";
import Like from "../../like";
import ToggleHouseSaveText from "./toggleHouseSaveText";
import {toast} from "react-toastify";
import { useContext } from "react";
import UsersContext from "../../../../context/usersContext";
import _ from "lodash";

function ToggleHouseSave(props) {
  const { onUpdate, savedUpateObj, isCurrentUserHouseLike } = props;
 const {currentUser} = useContext(UsersContext)

  function handleClick() {
    if (_.isEmpty(currentUser)) {
      toast(
        <h6>
          Kuhifadhi chumba tafadhali{" "}
          <big className="text--primary">jiunge</big> au{" "}
          <big className="text--primary">ingia</big> katika account yako
        </h6>
      );
      return;
    }
  }

  return (
    <span className="link link--primary link--inline" onClick={handleClick}>
      <Like
        liked={isCurrentUserHouseLike}
        onLike={() => onUpdate(savedUpateObj)}
      />
      <ToggleHouseSaveText
        savedUpateObj={savedUpateObj}
        isCurrentUserLikeHouse={isCurrentUserHouseLike}
        onUpdate={onUpdate}
      />
    </span>
  );
}

export default ToggleHouseSave;
