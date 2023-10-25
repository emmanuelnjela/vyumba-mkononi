// import _ from "lodash";
import { useState, useContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

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
  const [screenWidth, setScreenWidth] = useState(0);
  const [houseInfo, setHouseInfo] = useState(houseInfoInitilizer());
  const houseToUpdate = useRef({ currentHouseId, dataElements: [] });

  let { currentItemNum } = params;
  currentItemNum = currentItemNum ? parseInt(currentItemNum) : 1;
  // console.log(history.state)

  // const handleAddHouseInfo = (e) => {
  //   const { name, value } = e.target;
  //   if(houseToUpdate.current.currentHouseId) {
  //     const {dataElements }= houseToUpdate.current
  //     const index = dataElements.findIndex(({name: nameInElements}) => nameInElements === name)
  //     if(index >= 0) {
  //       houseToUpdate.current.dataElements[index].value = value
  //     }
  //     houseToUpdate.current.dataElements = [...dataElements, {name, value}]
  //   }
  //   setHouseInfo({ ...houseInfo, [name]: value });
  // };
  const handleAddHouseInfo = (name, value) => {
    setHouseInfo({ ...houseInfo, [name]: value });
  };
  const handleAddHouseInfoSubmit = async (direction, isLastItem) => {
    // try {
    //   if (houseToUpdate.current.currentHouseId) {
    //     const { currentHouseId: id, dataElements } = houseToUpdate.current;
    //     await onUpdate({ [id]: dataElements });
    //   } else {
    //     console.log("why here negger");
    //     await onAddHouse(houseInfo);
    //   }
    //   // await onAddHouse(houseInfo);
    //   setHouseInfo({
    //     location: "",
    //     reasePerMonth: "",
    //     minReaseLength: "",
    //     roomType: "",
    //     description: "",
    //     imgs: [],
    //   });
    //   return navigate("/home");
    // } catch (error) {
    //   console.log(error);
    // }
    if (isLastItem) {
      console.log(houseInfo);
      setHouseInfo({
        location: "",
        reasePerMonth: "",
        minReaseLength: "",
        roomType: "",
        description: "",
        imgs: [],
      });
      return navigate("/home");
    }
    navigate(direction);
  };

  useEffect(() => {
    if (houseToUpdate.current.currentHouseId) {
      reset({
        location: houseInfo?.location,
        reasePerMonth: houseInfo?.reasePerMonth,
        minReaseLength: { label: houseInfo?.minReaseLength },
        roomType: { label: houseInfo?.roomType },
        description: houseInfo?.description,
        imgs: houseInfo?.imgs,
      });
    }
    screenWidthUpdate(addHouseRef, setScreenWidth);
  }, [screenWidth]);

  async function onData(data) {
    data.minReaseLength = data.minReaseLength?.value;
    data.roomType = data.roomType?.value;
    console.log(data);
    await onAddHouse({ ...houseInfo, ...data });
    setHouseInfo({
      location: "",
      reasePerMonth: "",
      minReaseLength: "",
      roomType: "",
      description: "",
      imgs: [],
    });
    return navigate("/home");
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
