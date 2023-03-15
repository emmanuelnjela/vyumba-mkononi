import { addHouseNavBtnItems } from "./addHouseNavBtnItems";


function AddHouseTitle({ currentItemNum, screenWidth }) {
  const items = addHouseNavBtnItems(screenWidth);
  return (
    <h1 className="add-house__title text--center">
      {currentItemNum !== items[items.length - 1]
        ? "Weka Taarifa Za Chumba"
        : "Hakiki taarifa ulizoweka"}
    </h1>
  );
}

export default AddHouseTitle;
