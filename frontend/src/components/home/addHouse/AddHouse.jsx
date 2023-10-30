// import _ from "lodash";
import { useState, useContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import withPopUpCard from "../../hoc/withPopupCard.jsx";
import AddHouse2 from "./addHouse2.jsx";
import AddHouseComfirm from "./addHouseComfirm.jsx";
import AddHouseDefault from "./addHouseDefault.jsx";
import AddHouseTitle from "./addHouseTitle.jsx";
import ProgressTracker from "./progressTracker.jsx";
import { screenWidthUpdate } from "../../../utils/screenWidthUpdate.jsx";
import AddHouseInfoContext from "../../../context/addHouseInfo.jsx";
import HousesContext from "../../../context/housesContext.jsx";
import HousesInfoSelectContext from "../../../context/houseInfoSelectContext.jsx";

function AddHouse() {
  const params = useParams();
  const navigate = useNavigate();
  const addHouseRef = useRef();
  const location = useLocation();
  const { state: currentHouseId } = location;
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // CHANGE TO USEREDUCER
  const houseInfoInitilizer = () => {
    const defaultHouseInfo = {
      location: "",
      reasePerMonth: "",
      minReaseLength: "",
      roomType: "",
      description: "",
      imgs: [],
    };
    if (typeof currentHouseId === "string") {
      const currentHouse = houses.find(({ _id }) => _id === currentHouseId);
      return currentHouse || defaultHouseInfo;
    }
    return defaultHouseInfo;
  };
  const { onAddHouse, onUpdate, all: houses } = useContext(HousesContext);
  const { roomTypeItems, minReaseLengthItems } = useContext(
    HousesInfoSelectContext
  );
  const [screenWidth, setScreenWidth] = useState(0);
  const [houseInfo, setHouseInfo] = useState(houseInfoInitilizer());
  const houseToUpdate = useRef({ currentHouseId, dataElements: [] });

  let { currentItemNum } = params;
  currentItemNum = currentItemNum ? parseInt(currentItemNum) : 1;

  const handleAddHouseInfo = (name, value) => {
    setHouseInfo({ ...houseInfo, [name]: value });
  };

  useEffect(() => {
    if (houseToUpdate.current.currentHouseId) {
      reset({
        location: houseInfo?.location,
        reasePerMonth: houseInfo?.reasePerMonth,
        minReaseLength: minReaseLengthItems.find(
          (item) => item.value === houseInfo?.minReaseLength
        ),
        roomType: roomTypeItems.find(
          (item) => item.value === houseInfo?.roomType
        ),
        description: houseInfo?.description,
        imgs: houseInfo?.imgs,
      });
    }
    screenWidthUpdate(addHouseRef, setScreenWidth);
  }, [screenWidth]);

  async function onData(data) {
    try {
      data.minReaseLength = data.minReaseLength?.value;
      data.roomType = data.roomType?.value;
      console.log(data);
      if (houseToUpdate.current.currentHouseId) {
        await onUpdate({
          id: houseToUpdate.current.currentHouseId,
          dataElements: Object.entries(houseInfo).map(
            ([name, value]) => {
              return { name, value };
            }
          ),
        });
      } else {
        await onAddHouse({ ...houseInfo, ...data });
      }
      setHouseInfo({
        location: "",
        reasePerMonth: "",
        minReaseLength: "",
        roomType: "",
        description: "",
        imgs: [],
      });
      return navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  }

  function onError(error) {
    console.log(error);
  }

  const addHouseInfoObject = {
    houseInfo,
    onAddHouseInfo: handleAddHouseInfo,
    currentHouseId: houseToUpdate.current.currentHouseId,
    defaultMinReaseLength: houseInfo["minReaseLength"],
    defaultRoomType: houseInfo["roomType"],
    control: control,
    errors: errors,
    register: register,
    onAddHouseInfoSubmit: handleSubmit(onData, onError),
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
