import { AddHouseNavBtn } from "./addHouseNavBtn";
import { addHouseNavBtnItems } from "./addHouseNavBtnItems";

function AddHouseNavBtns({ currentItemNum, screenWidth }) {
  // [1,2,3]

  const items = addHouseNavBtnItems(screenWidth);
  return (
    <div className="add-house__nav-btns d-flex space-btn">
      {items[0] !== currentItemNum && (
        <AddHouseNavBtn
          arrow_direction={"left"}
          text="nyuma"
          direction={`${currentItemNum - 1}`}
        />
      )}
      <AddHouseNavBtn
        arrow_direction={"right"}
        text="mbele"
        isLastItem={items[items.length - 1] === currentItemNum}
        direction={`${currentItemNum + 1}`}
      />
    </div>
  );
}

export default AddHouseNavBtns;
