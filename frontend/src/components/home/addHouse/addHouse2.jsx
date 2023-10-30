import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddHouseNavBtns from "./addHouseNavBtns.jsx";

import AddHouseUploadImg from "./addHouseUploadImg.jsx";

function AddHouse2({ currentItemNum, items, screenWidth }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (screenWidth === "lg") navigate("1");
  });
  return (
    <>
      <AddHouseUploadImg />
      <AddHouseNavBtns
        currentItemNum={currentItemNum}
        screenWidth={screenWidth}
      />
    </>
  );
}

export default AddHouse2;
