import AddHouseInputGroup from "./addHouseInputGroup";
import DescriptionTextArea from "./descriptionTextArea";
import HouseTypeDropdown from "./roomTypeDropdown";
import MinReasesLengthDropdown from "./minReaseLengthDropdown";

function AddHouseDetails() {
  
  const inputGroupItems = [
    {
      id: 1,
      title: "Eneo",
      name: "location",
      placeholder: "Andika kinakopatikana",
    },
    {
      id: 2,
      title: "Kodi inalipwa kwa miezi",
      name: "minReaseLength",
      Component: <MinReasesLengthDropdown />,
    },
    {
      id: 3,
      title: "Bei ya kodi kwa mwezi",
      name: "reasePerMonth",
      placeholder: "Andika bei ya kodi kwa mwezi",
    },
    {
      id: 4,
      title: "Aina ya chumba",
      Component: <HouseTypeDropdown />
    }
    ,
    {
      id: 5,
      title: "Maelezo mafupi",
      name: "description",
      Component: <DescriptionTextArea />,
    },
  ];
  return (
    <div className="add-house__details">
      {inputGroupItems.map(({ id, title, placeholder,name, Component }) => {
        return (
          <AddHouseInputGroup
            key={id}
            title={title}
            name={name}
            placeholder={placeholder}
            Component={Component}
          />
        );
      })}
    </div>
  );
}

export default AddHouseDetails;

