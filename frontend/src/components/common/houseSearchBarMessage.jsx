import { Link } from "react-router-dom";

import withPopUpCard from "../hoc/withPopupCard.jsx";

function HouseSearchBarMessage() {
  return (
    <div className="p-sm">
      <h1 className="text--center">
        Kutafuta vyumba tafadhali jiunge au ingia kwenye account yako!
      </h1>
      <div className="d-flex space-btn pt-sm w-sm-50 m-auto">
        <Link className="btn btn--primary" to={"/register"}>
          Jiunge
        </Link>
        <Link className="btn btn--danger" to={"/login"}>
          Ingia
        </Link>
      </div>
    </div>
  );
}

export default withPopUpCard(HouseSearchBarMessage);
