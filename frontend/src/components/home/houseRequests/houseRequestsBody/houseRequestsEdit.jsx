import { houseRequestsStore } from "../houseRequestsStore.jsx";
import HouseRequestsInputGroup from "./houseRequestsInputGroup.jsx";

function HouseRequestsEdit({
  houseRequests,
  onHouseRequestDelete,
  handleSubmit,
  onData,
  onError,
  ...rest
}) {
  const { infoInputGroups, contactsInputGroups } = houseRequestsStore();
  return (
    <>
      {houseRequests.map((houseRequest) => {
        return (
          <div className="house-requests__form-input-group mb-sm w-100">
            {[...infoInputGroups, ...contactsInputGroups].map(
              (infoInputGroup) => {
                return (
                  <HouseRequestsInputGroup
                    {...infoInputGroup}
                    value={houseRequest[infoInputGroup.name]}
                    {...rest}
                  />
                );
              }
            )}
            <div className="d-flex space-btn">
              <button
                className="btn btn--primary"
                onClick={handleSubmit(onData, onError)}
              >
                Hifadhi mabadiliko
              </button>
              <button
                className="btn btn--danger"
                onClick={() => onHouseRequestDelete(houseRequest._id)}
              >
                Futa Ombi
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HouseRequestsEdit;
