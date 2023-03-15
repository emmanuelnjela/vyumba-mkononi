import { memo } from "react";
import withToolTip from "../../hoc/withToolTip";
function RenderHouseOwnerBtn({
  withText,
  btnText,
  iconName,
  houseId,
  onShowToolTip,
  onHideToolTip,
  onHouseDelete
}) {
  return (
    <button
      className="btn btn--danger"
      onMouseOver={onShowToolTip}
      onMouseLeave={onHideToolTip}
      onClick={() => onHouseDelete(houseId)}
    >
      {withText && btnText} <i className={`fas fa-${iconName} icon--md`}></i>
    </button>
  );
}

export default withToolTip(memo(RenderHouseOwnerBtn));
