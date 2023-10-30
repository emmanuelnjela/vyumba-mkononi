import { Link } from "react-router-dom";

import { addHouseNavBtnItems } from "./addHouseNavBtnItems.jsx";

function ProgressTracker({ currentItemNum, screenWidth }) {

  const items = addHouseNavBtnItems(screenWidth);
  return (
    <div className="progress-tracker">
      {items.map((i) => {
        return (
          <div className="progress-tracker__item" key={i}>
            <Link
              to={`${i}`}
              className="progress-tracker__link rounded rounded--primary"
            >
              {i < currentItemNum ? (
                <i className="fas fa-check icon--md"></i>
              ) : (
                i
              )}
            </Link>
          </div>
        );
      })}

      <div className="progress-tracker__line"></div>
    </div>
  );
}


export default ProgressTracker