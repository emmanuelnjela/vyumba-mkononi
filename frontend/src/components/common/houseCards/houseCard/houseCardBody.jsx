import List from "../../list";
import HouseDetails from "../../houseDetails";
import ToggleHouseSave from "./toggleHouseSave";
import ViewHouseInfo from "./viewHouseInfo";
import { memo } from "react";

function HouseCardBody({ pageViewMyPosts, house, housePreviewPath, onUpdate }) {
  const savedUpateObj = { [house._id]: [{ name: 'isSaved',value: !house.isSaved }] };
  const listItems = [
    {
      id: 1,
      content: (
        <ToggleHouseSave
          house={house}
          onUpdate={onUpdate}
          savedUpateObj={savedUpateObj}
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