// import _ from "lodash";
import { useState, useContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import withPopUpCard from "../../hoc/withPopupCard";
import AddHouse2 from "./addHouse2";
import AddHouseComfirm from "./addHouseComfirm";
import AddHouseDefault from "./addHouseDefault";
import AddHouseTitle from "./addHouseTitle";
import ProgressTracker from "./progressTracker";
import { screenWidthUpdate } from "../../../utils/screenWidthUpdate";
import AddHouseInfoContext from "../../../context/addHouseInfo";
import HousesContext from "../../../context/housesContext";


function AddHouse() {
  const params = useParams();
  const navigate = useNavigate();
  const addHouseRef = useRef();
  const {onAddHouse} = useContext(HousesContext)
  const [screenWidth, setScreenWidth] = useState(0);
  const [houseInfo, setHouseInfo] = useState({
    location: "",
    reasePerMonth: "",
    minReaseLength: "",
    description: "",
    imgs: [],
  });

  let { currentItemNum } = params;
  currentItemNum = currentItemNum ? parseInt(currentItemNum) : 1;

  const handleAddHouseInfo = (e) => {
    const { name, value } = e.target;
    setHouseInfo({ ...houseInfo, [name]: value });
  };
  const handleAddHouseInfoSubmit = async () => {
    try {
      await onAddHouse(houseInfo);
      setHouseInfo({
        location: "",
        reasePerMonth: "",
        minReaseLength: "",
        description: "",
        imgs: [],
      });
      return navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const count = useRef(0);
  count.current++;

  useEffect(() => {
    screenWidthUpdate(addHouseRef, setScreenWidth);
  }, [screenWidth]);

  const addHouseInfoObject = {
    houseInfo,
    onAddHouseInfo: handleAddHouseInfo,
    onAddHouseInfoSubmit: handleAddHouseInfoSubmit,
  };

  return (
    <div className="add-house" ref={addHouseRef}>
      <AddHouseInfoContext.Provider value={addHouseInfoObject}>
        <AddHouseTitle
          currentItemNum={currentItemNum}
          screenWidth={screenWidth}
        />
        <div className="add-house_progress-tracker my-sm">
          <ProgressTracker
            currentItemNum={currentItemNum}
            screenWidth={screenWidth}
          />
        </div>
        {currentItemNum === 1 ? (
          <AddHouseDefault
            currentItemNum={currentItemNum}
            screenWidth={screenWidth}
          />
        ) : currentItemNum === 2 && screenWidth < 768 ? (
          <AddHouse2
            currentItemNum={currentItemNum}
            screenWidth={screenWidth}
          />
        ) : (
          <AddHouseComfirm
            currentItemNum={currentItemNum}
            screenWidth={screenWidth}
          />
        )}
      </AddHouseInfoContext.Provider>
    </div>
  );
}

export default withPopUpCard(AddHouse);
