import Dropdown from "../../common/dropdown";

export function addHouseInputGroupDatas() {
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
  const inputGroupItems = [
    {
      id: 1,
      title: "Eneo",
      placeholder: "Andika kinakopatikana",
    },
    {
      id: 2,
      title: "Kodi inalipwa kwa miezi",
      Component: () => <Dropdown items={dropdownItems} />,
    },
    {
      id: 3,
      title: "Bei ya kodi kwa mwezi",
      placeholder: "Andika bei ya kodi kwa mwezi",
    },
    {
      id: 4,
      title: "Maelezo mafupi",
      Component: () => (
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="add-house__input-group-text-area"
        ></textarea>
      ),
    },
  ];
  return inputGroupItems;
}
