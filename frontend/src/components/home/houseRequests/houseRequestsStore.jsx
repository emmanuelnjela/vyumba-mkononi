import { useContext } from "react";

import HousesInfoSelectContext from "../../../context/houseInfoSelectContext.jsx";

export function houseRequestsStore() {
  const { roomTypesItems, maxReasePriceItems, minReasePriceItems } = useContext(
    HousesInfoSelectContext
  );
  const infoInputGroups = [
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
      rules: {
        required: "Tafadhali jaza Maelezo ya vigezo vya nyumba unayohitaji",
      },
    },
  ];
  const contactsInputGroups = [
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

  return { infoInputGroups, contactsInputGroups };
}
