// import _ from "lodash";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import withPopUpCard from "../../hoc/withPopupCard";
import AddHouse2 from "./addHouse2";
import AddHouseComfirm from "./addHouseComfirm";
import AddHouseDefault from "./addHouseDefault";
import AddHouseTitle from "./addHouseTitle";
import ProgressTracker from "./progressTracker";
import { screenWidthUpdate } from "./screenWidthUpdate";

function AddHouse() {
  const params = useParams();
  const addHouseRef = useRef();
  const [screenWidth, setScreenWidth] = useState(0);

  let { currentItemNum } = params;
  currentItemNum = currentItemNum ? parseInt(currentItemNum) : 1;

  const handleAddHouseInfo = (e) => {
    console.log(e)
  }

  useEffect(() => {
    screenWidthUpdate(addHouseRef, setScreenWidth);
  }, [screenWidth]);

  return (
    <div className="add-house" ref={addHouseRef}>
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
        <AddHouseDefault currentItemNum={currentItemNum} screenWidth={screenWidth} onAddHouseInfo={handleAddHouseInfo} />
      ) : currentItemNum === 2 && screenWidth < 768 ? (
        <AddHouse2 currentItemNum={currentItemNum} screenWidth={screenWidth} />
      ) : (
        <AddHouseComfirm currentItemNum={currentItemNum} screenWidth={screenWidth}/>
      )}
    </div>
  );
}

export default withPopUpCard(AddHouse);
