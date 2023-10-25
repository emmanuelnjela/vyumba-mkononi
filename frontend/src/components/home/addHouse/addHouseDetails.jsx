import AddHouseInputGroup from "./addHouseInputGroup";

function AddHouseDetails() {
  const reaseLengthItems = [
    {
      id: 0,
      value: 3,
      label: "Mitatu",
    },
    {
      id: 1,
      value: 4,
      label: "Minne",
    },
    {
      id: 2,
      value: 6,
      label: "sita",
    },
    {
      id: 3,
      value: 8,
      label: "Nane",
    },
  ];
  const houseTypeItems = [
    {
      id: 0,
      value: "apartment",
      label: "Nyumba Nzima",
    },
    {
      id: 1,
      value: "single",
      label: "Chumba Kimoja",
    },
    {
      id: 2,
      value: "double",
      label: "chumba na sebure",
    },
    { id: 3, value: "self", label: "chumba self" },
  ];
  const inputGroupItems = [
    {
      id: 1,
      title: "Eneo",
      name: "location",
      placeholder: "Andika kinakopatikana",
      inputType: "text",
      rules: { required: "Tafadhali java eneo ambalo nyumba inapatikana" },
    },
    {
      id: 2,
      title: "Kodi inalipwa kwa miezi",
      placeholder: "Chagua Awamu za Ulipaji wa Kodi",
      name: "minReaseLength",
      inputType: "select",
      options: reaseLengthItems,
      rules: { required: "Tafadhili jaza awamu za kulipa kodi" },
    },
    {
      id: 3,
      title: "Bei ya kodi kwa mwezi",
      name: "reasePerMonth",
      inputType: "text",
      placeholder: "Andika bei ya kodi kwa mwezi",
      rules: { required: "Tafadhali jaza bei ya kodi kwa mwezi" },
    },
    {
      id: 4,
      name: "roomType",
      title: "Aina ya chumba",
      placeholder: "Chagua aina ya chumba",
      inputType: "select",
      options: houseTypeItems,
      rules: { required: "Tafadhali jaza aina ya chumba" },
    },
    {
      id: 5,
      title: "Maelezo mafupi",
      name: "description",
      inputType: "textArea",
      placeholder: "Andika hapa maelezo mafupi kuihusu nyumba",
      rules: { required: "Tafadhali jaza maelezo mafupi kuihusu nyumba" },
    },
  ];
  return (
    <div className="add-house__details">
      {inputGroupItems.map((inputGroupItem) => {
        return (
          <AddHouseInputGroup key={inputGroupItem.id} {...inputGroupItem} />
        );
      })}
    </div>
  );
}

export default AddHouseDetails;
