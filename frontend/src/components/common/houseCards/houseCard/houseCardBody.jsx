import List from "../../list";
import HouseDetails from "../../houseDetails";
import ToggleHouseSave from "./toggleHouseSave";
import ViewHouseInfo from "./viewHouseInfo";
import { memo, useContext } from "react";
import UsersContext from "../../../../context/usersContext";
import { toggleElementAdd } from "../../../../utils/toggleElementAdd";
import { executeOrNot } from "../../../../utils/excuteOrNot";

function HouseCardBody({ pageViewMyPosts, house, housePreviewPath , onUpdate }) {
  // const savedUpateObj = { [house._id]: [{ name: 'isSaved',value: !house.isSaved }] };

  const {currentUser} = useContext(UsersContext)
console.log(currentUser)
  let isCurrentUserHouseLike = (currentUser.savedHouses || []).some((savedHouseId) => savedHouseId === house._id)

  const savedHousesNewValue = toggleElementAdd(house._id, currentUser.savedHouses, isCurrentUserHouseLike)

  const savedUpateObj = { [currentUser._id]: [{ name: 'savedHouses',value: savedHousesNewValue }] };

  const listItems = [
    {
      id: 1,
      content: (
        <ToggleHouseSave
          house={house}
          onUpdate={onUpdate}
          savedUpateObj={savedUpateObj}
          isCurrentUserHouseLike={isCurrentUserHouseLike}
        />
      ),
    },
    {
      id: 2,
      content: <ViewHouseInfo housePreviewPath={housePreviewPath} />,
    },
  ];
  
  return (
    <div className="housecard__body">
      <HouseDetails house={house} />
      <List
        isInline={true}
        classes="pt-xxxsm"
        items={!pageViewMyPosts ? listItems : []}
      />
    </div>
  );
}

export default memo(HouseCardBody)