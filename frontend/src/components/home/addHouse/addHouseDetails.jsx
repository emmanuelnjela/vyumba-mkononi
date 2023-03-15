import Dropdown from "../../common/dropdown";

function AddHouseDetails() {
  const dropdownItems = [
    {
      id: 1,
      content: <span>Mitatu</span>,
    },
    {
      id: 2,
      content: <span>Minne</span>,
    },
    {
      id: 3,
      content: <span>sita</span>,
    },
    { id: 4, content: <span>Nane</span> },
  ];
  return (
    <div className="add-house__details">
      <div className="add-house__input-group">
        <h6 className="add-house__input-group-label text--dark">Eneo</h6>
        <input
          type="text"
          placeholder="Andika inako patikana"
          className="add-house__input-group-input"
        />
      </div>
      <div className="add-house__input-group">
        <h6 className="add-house__input-group-label text--dark">
          Kodi inalipwa kwa miezi
        </h6>
        <Dropdown items={dropdownItems} />
      </div>
      <div className="add-house__input-group">
        <h6 className="add-house__input-group-label text--dark">Bei ya kodi kwa mwezi</h6>
        <input
          type="text"
          placeholder="Andika bei ya kodi kwa mwezi"
          className="add-house__input-group-input"
        />
      </div>
      <div className="add-house__input-group">
        <h6 className="add-house__input-group-label text--dark">Maelezo mafupi</h6>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="add-house__input-group-text-area"
        ></textarea>
      </div>
    </div>
  );
}


export default AddHouseDetails