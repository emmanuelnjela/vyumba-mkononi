import { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";

import HousesContext from "../../../context/housesContext";
import { SavedBodyLeft } from "./savedBodyLeft";
import { SavedBodyRight } from "./savedBodyRight";
import UsersContext from "../../../context/usersContext";
import { useForm } from "react-hook-form";
import _ from "lodash";

function SavedBody() {
  const { register, handleSubmit, reset } = useForm();
  const housesContext = useContext(HousesContext);
  const usersContext = useContext(UsersContext);
  const { getById } = housesContext;
  const { onUserUpdate: onUpdate, currentUser } = usersContext;

  const initialSavedHouses = useCallback(currentUser?.savedHouses || []).map(
    (id) => getById(id),
    [currentUser?.savedHouses]
  );

  const timeItems = [
    { id: 0, content: "Pangilia Kwa Muda" },
    { id: 1, content: "Za Mapema" },
    { id: 2, content: "Za Badae" },
  ];

  const priceStartItems = [
    {
      id: 0,
      content: (
        <span>
          <i className="fas fa-cash"></i>KODI KUANZIA
        </span>
      ),
    },
    { id: 1, content: <span>YOYOTE</span> },
    { id: 2, value: 15000, content: <span>Tsh.15000</span> },
    { id: 3, value: 30000, content: <span>Tsh.30000</span> },
    { id: 4, value: 40000, content: <span>Tsh.40000</span> },
    { id: 5, value: 50000, content: <span>Tsh.50000</span> },
    { id: 6, value: 60000, content: <span>Tsh.60000</span> },
  ];

  const priceEndItems = [
    { id: 0, content: <span>KODI MWISHO</span> },
    { id: 1, content: <span>YOYOTE</span> },
    { id: 2, value: 80000, content: <span>Tsh.80000</span> },
    { id: 3, value: 90000, content: <span>Tsh.90000</span> },
    { id: 4, value: 140000, content: <span>Tsh.140000</span> },
    { id: 5, value: 150000, content: <span>Tsh.150000</span> },
    { id: 6, value: 160000, content: <span>Tsh.160000</span> },
  ];
  const roomTypeItems = [
    {
      id: 0,
      value: "default",
      content: <span>Aina ya chumba</span>,
    },
    {
      id: 1,
      value: "apartment",
      content: <span>Nyumba Nzima</span>,
    },
    {
      id: 2,
      value: "single",
      content: <span>Chumba Kimoja</span>,
    },
    {
      id: 3,
      value: "double",
      content: <span>chumba na sebure</span>,
    },
    { id: 4, value: "self", content: <span>chumba self</span> },
  ];
  const [savedHouses, setSavedHouses] = useState([]);

  const handleHouseSearch = ({ searchWord }) => {
    setSavedHouses([]);
    if (searchWord.length > 1) {
      setSavedHouses(
        initialSavedHouses.filter(({ location }) => {
          return location.startsWith(searchWord);
        })
      );
    }
  };

  return (
    <div className="saved__body px-md">
      <SavedBodyLeft
        timeItems={timeItems}
        priceStartItems={priceStartItems}
        priceEndItems={priceEndItems}
        roomTypeItems={roomTypeItems}
      />
      <SavedBodyRight
        houses={_.isEmpty(savedHouses) ? initialSavedHouses : savedHouses}
        register={register}
        onUpdate={onUpdate}
        onHouseSearch={handleSubmit(handleHouseSearch)}
      />
    </div>
  );
}

export default SavedBody;
