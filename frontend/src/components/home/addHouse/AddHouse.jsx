// import _ from "lodash";
import { useState, useContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const { state: currentHouseId } = location;

  const houseInfoInitilizer = () => {
    const defaultHouseInfo = {
      location: "",
      reasePerMonth: "",
      minReaseLength: "",
      description: "",
      imgs: [],
    }; 
    if (typeof currentHouseId === "string") {
      const currentHouse = houses.find(({ _id }) => _id === currentHouseId);
      return currentHouse || defaultHouseInfo;
    }
    return defaultHouseInfo
  };
  const { onAddHouse, onUpdate, all: houses } = useContext(HousesContext);
  const [screenWidth, setScreenWidth] = useState(0);
  const [houseInfo, setHouseInfo] = useState(houseInfoInitilizer());
  const houseToUpdate = useRef({ currentHouseId,dataElements: [] })

  let { currentItemNum } = params;
  currentItemNum = currentItemNum ? parseInt(currentItemNum) : 1;
  // console.log(history.state)

  const handleAddHouseInfo = (e) => {
    const { name, value } = e.target;
    if(houseToUpdate.current.currentHouseId) {
      const {dataElements }= houseToUpdate.current
      const index = dataElements.findIndex(({name: nameInElements}) => nameInElements === name)
      if(index >= 0) {
        houseToUpdate.current.dataElements[index].value = value
      } 
      houseToUpdate.current.dataElements = [...dataElements, {name, value}]
    }
    console.log(houseInfo, houseToUpdate)
    setHouseInfo({ ...houseInfo, [name]: value });
  };
  const handleAddHouseInfoSubmit = async () => {
    try {
      if(houseToUpdate.current.currentHouseId) {
        const {currentHouseId: id, dataElements} = houseToUpdate.current
        await onUpdate({[id]: dataElements})
      }
      else {
        console.log("why here negger")
        await onAddHouse(houseInfo)
      }
      // await onAddHouse(houseInfo);
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
    currentHouseId: houseToUpdate.current.currentHouseId,
    defaultMinReaseLength: houseInfo["minReaseLength"],
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
