import HousesInfoSelectContext from "../houseInfoSelectContext";
export function HousesInfoSelectProvider({ children }) {
  const roomTypeItems = [
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
  const minReaseLengthItems = [
    {
      id: 2,
      value: 3,
      label: "Mitatu",
    },
    {
      id: 3,
      value: 4,
      label: "Minne",
    },
    {
      id: 3,
      value: 6,
      label: "sita",
    },
    { id: 4, value: 8, label: "Nane" },
  ];
  const minReasePriceItems = [
    { id: 1, value: "any", label: "yoyote" },
    { id: 2, value: 15000, label: "15000 Tsh" },
    { id: 3, value: 30000, label: "30000 Tsh" },
    { id: 4, value: 40000, label: "40000 Tsh" },
    { id: 5, value: 50000, label: "50000 Tsh" },
    { id: 6, value: 60000, label: "60000 Tsh" },
  ];
  const maxReasePriceItems = [
    { id: 1, value: "any", label: "yoyote" },
    { id: 2, value: 80000, label: "80000 Tsh" },
    { id: 3, value: 90000, label: "90000 Tsh" },
    { id: 4, value: 140000, label: "140000 Tsh" },
    { id: 5, value: 150000, label: "150000 Tsh" },
    { id: 6, value: 160000, label: "160000 Tsh" },
  ];
  const housesInfoSelectContextObject = {
    maxReasePriceItems,
    minReasePriceItems,
    minReaseLengthItems,
    roomTypeItems,
  };
  return (
    <HousesInfoSelectContext.Provider value={housesInfoSelectContextObject}>
      {children}
    </HousesInfoSelectContext.Provider>
  );
}
