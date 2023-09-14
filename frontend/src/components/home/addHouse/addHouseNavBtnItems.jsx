import _ from "lodash";

export function addHouseNavBtnItems(screenWidth) {
  const endNum = (screenWidth < 768 ? 3 : 2) + 1;
  const items = _.range(1, endNum);
  return items;
}
