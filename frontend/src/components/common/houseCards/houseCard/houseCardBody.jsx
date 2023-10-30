import { memo } from "react";

import List from "../../list.jsx";
import HouseDetails from "../../houseDetails.jsx";
import ToggleHouseSave from "./toggleHouseSave.jsx";
import ViewHouseInfo from "./viewHouseInfo.jsx";
import { toggleElementAdd } from "../../../../utils/toggleElementAdd.jsx";

function HouseCardBody({
  currentUser,
  pageViewMyPosts,
  house,
  housePreviewPath,
  onUpdate,
}) {
  // const savedUpateObj = { [house._id]: [{ name: 'isSaved',value: !house.isSaved }] };

  console.log(currentUser);
  let isCurrentUserHouseLike = (currentUser.savedHouses || []).some(
    (savedHouseId) => savedHouseId === house._id
  );

  const savedHousesNewValue = toggleElementAdd(
    house._id,
    currentUser.savedHouses,
    isCurrentUserHouseLike
  );

  const savedUpateObj = {
    [currentUser._id]: [{ name: "savedHouses", value: savedHousesNewValue }],
  };

  const listItems = [
    {
      id: 1,
      content: (
        <ToggleHouseSave
          house={house}
          onUpdate={onUpdate}
          savedUpateObj={savedUpateObj}
          isCurrentUserHouseLike={isCurrentUserHouseLike}
          currentUser={currentUser}
        />
      ),
    },
    {
      id: 2,
      content: (
        <ViewHouseInfo
          housePreviewPath={housePreviewPath}
          currentUser={currentUser}
        />
      ),
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

export default memo(HouseCardBody);
