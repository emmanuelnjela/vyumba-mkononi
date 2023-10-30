import HouseRequestsInputGroup from "./houseRequestsInputGroup.jsx";
import { houseRequestsStore } from "../houseRequestsStore.jsx";

function HouseRequestsForm(restProps) {
  const { infoInputGroups, contactsInputGroups } = houseRequestsStore()
  return (
    <div className="add-request__form">
      {infoInputGroups.map((infoInputGroup) => (
        <HouseRequestsInputGroup
          key={infoInputGroup.name}
          {...infoInputGroup}
          {...restProps}
        />
      ))}
      <h5 className="mb-sm">Mawasiliano yako</h5>
      <div className="d-flex space-btn">
        {contactsInputGroups.map((contactsInputGroup) => (
          <HouseRequestsInputGroup
            key={contactsInputGroup.name}
            {...contactsInputGroup}
            {...restProps}
          />
        ))}
      </div>
    </div>
  );
}

export default HouseRequestsForm;
