import _ from "lodash";

import LineDivider from "../../common/lineDivider.jsx";

function HouseRequestsHeader({houseRequests}) {

  return (
    <div className="house-requests__header">
      <h4 className="text--center pb-sm">
        {_.isEmpty(houseRequests) ? "Weka ombi la Kutafutiwa nyumba ya kupanga" : "Ombi ulilo weka"}
      </h4>
      <LineDivider />
    </div>
  );
}
export default HouseRequestsHeader;
