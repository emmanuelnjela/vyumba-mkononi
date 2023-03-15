import AddHouseDetails from "./addHouseDetails";
import AddHouseNavBtns from "./addHouseNavBtns";
import AddHouseUploadImg from "./addHouseUploadImg";

function AddHouseInfo({screenWidth, currentItemNum}) {
  return (
    <div className="add-house__info">
      <AddHouseDetails />
      {screenWidth > 768 && <AddHouseUploadImg />}
      <AddHouseNavBtns currentItemNum={currentItemNum} />
    </div>
  );
}

export default AddHouseInfo