import AddHouseInfo from "./addHouseInfo";


function AddHouseDefault({ screenWidth, currentItemNum, onAddHouseInfo }) {
  if (screenWidth) {
  }
  return (
    <form>
      <AddHouseInfo screenWidth={screenWidth} currentItemNum={currentItemNum} />
    </form>
  );
}

export default AddHouseDefault