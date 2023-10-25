const roomTypesItems = [
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
// const reasePriceItems = [
//   {
//     value: "default",
//     label: "Miezi",
//   },
//   {
//     value: "Mitatu",
//     label: "Mitatu",
//   },
//   {
//     value: "Minne",
//     label: "Minne",
//   },
//   {
//     value: "sita",
//     label: "sita",
//   },
//   { value: "Nane", label: "Nane" },
// ];
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
export const infoInputGroups = [
  {
    name: "location",
    labelText: "Eneo unalotaka kupanga",
    inputType: "text",
    rules: {
      required: "Tafadhali jaza jina la Eneo unalotaka kupanga",
    },
    placeholder: "Eneo ambalo unataka kupata nyumba ya kupanga",
  },
  {
    name: "roomType",
    inputType: "select",
    labelText: "Chagua Aina ya Chumba",
    placeholder: "Aina ya Chumba",
    rules: { required: "Tafadhali chagua aina ya chumba" },
    options: roomTypesItems,
  },
  {
    name: "minReasePerMonth",
    inputType: "select",
    placeholder: "Kodi Kuanzia",
    labelText: "Bei ya Kodi kwa Mwezi Kuanzia",
    rules: { required: "Tafadhali chagua bei ya kodi Kuanzia" },
    options: minReasePriceItems,
  },
  {
    name: "maxReasePerMonth",
    inputType: "select",
    labelText: "Bei ya Kodi Kwa Mwezi Mwisho",
    placeholder: "Kodi Mwisho",
    rules: { required: "Tafadhali chagua bei ya kodi Mwisho" },
    options: maxReasePriceItems,
  },
  {
    name: "description",
    labelText: "Maelezo ya Chumba ambacho unakihitaji",
    inputType: "textArea",
    placeholder:
      "Andika hapa vitu ambayo unavihitaji katika chumba au nyumba ambayo unaweka ombi la kutafutiwa",
    rules: { required: "Tafadhali jaza Maelezo ya vigezo vya nyumba unayohitaji" },
  },
];
export const contactsInputGroups = [
  {
    name: "whatsapp",
    labelText: "Whatsapp",
    placeholder: "Andika hapa namba zako za Whatsapp",
    rules: { required: "Tafadhali jaza namba zako za whatsapp" },
  },
  {
    name: "phone",
    labelText: "Namba ya simu",
    placeholder: "Andika hapa namba ya simu yako hapa",
    rules: { required: "Tafadhali jaza namba zako za simu" },
  },
];
