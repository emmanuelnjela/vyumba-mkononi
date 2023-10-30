import AddHouseDetails from "./addHouseDetails.jsx";
import AddHouseNavBtns from "./addHouseNavBtns.jsx";
import AddHouseUploadImg from "./addHouseUploadImg.jsx";

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