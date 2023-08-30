import { useContext, useEffect, useState } from "react";
import axios from "axios";
import HousesContext from "../housesContext";
import { Crud } from "../../utils/crudOperations";
import UsersContext from "../usersContext";
// import withPopUpCard from "../../components/hoc/withPopupCard";
import ErrorMessage from "../../components/common/errorMessage";
// import { housesInDB } from "../../data/falseHouseAPI";

export function HousesProvider({ children }) {
  // let updatedHouse = null;
  const [errorMessage, setErrorMessage] = useState();
  // const { getAllHouses, updateData, deleteHouse } = new Crud(housesInDB)
  const [houses, setHouses] = useState([]);
  const { isLogin } = useContext(UsersContext);
  // const ErrorMessage = withPopUpCard(ErrorMessage)
  const housesUrl = "http://localhost:3001/houses";

  // const [users, setUsers] = useState(usersInDB);
  useEffect(() => {
    axios
      .get(housesUrl, {
        withCredentials: true,
      })
      .then((respond) => {
        // console.log(respond);
        const { houses: housesInDB, message } = respond?.data;
        if (message) throw new Error(message);
        setHouses(housesInDB);
      })
      .catch((error) => setErrorMessage(error.message));
  }, [isLogin]);

  // const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const handleHouseAdd = async (houseInfo) => {
    try {
      const respond = await axios.post(
        housesUrl,
        { houseInfo },
        {
          withCredentials: true,
        }
      );
      const { message, houses } = respond.data;
      if (message) throw new Error(message);
      setHouses(houses);
      setErrorMessage(null);
      return;
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleHouseUpate = async (houseToUpdate) => {
    let errorMessage = "";
    const [houseToUpdateID] = Object.keys(houseToUpdate);
    const respond = await axios.put(
      housesUrl,
      {
        id: houseToUpdateID,
        dataElements: houseToUpdate[houseToUpdateID],
      },
      {
        withCredentials: true,
      }
    );
    const { updatedHouses, message } = respond.data;
    if (message) {
      errorMessage = `${Date()
        .match(/.{25}/)[0]
        .trimEnd()
        .replace(/[\s]/g, "-")} error -> ${message}`;
      setErrorMessage(errorMessage);
      return;
    }
    setHouses(updatedHouses);
    setErrorMessage(null);
  };
  async function handleHouseDelete(id) {
    try {
      const respond = await axios.delete(`${housesUrl}/${id}`, null, {
        withCredentials: true,
      });
      const { message, houses } = respond.data;
      console.log(houses)
      if (message) throw new Error(message);
      setHouses(houses);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
  const handleGetHouse = async (id) => {
    try {
      const respond = await axios.get(`${housesUrl}/${id}`, {
          withCredentials: true
        })
      const { message, houses } = respond.data;
      if (message) throw new Error(message);
      return houses
    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  // context variables

  const housesContextObject = {
    all: houses,
    saved: houses?.filter(({ isSaved }) => isSaved === true),
    savedTotal: houses?.filter(({ isSaved }) => isSaved === true).length,
    getBySize: (size) => houses?.slice(0, size),
    onAddHouse: handleHouseAdd,
    onUpdate: handleHouseUpate,
    onGetHouse: handleGetHouse,
    onHouseDelete: handleHouseDelete,
  };
  function RenderErrorMessage({ errorMessage }) {
    return errorMessage ? (
      <ErrorMessage message={errorMessage}></ErrorMessage>
    ) : (
      <></>
    );
  }

  return (
    <HousesContext.Provider value={housesContextObject}>
      <RenderErrorMessage errorMessage={errorMessage}/>
      {children}
    </HousesContext.Provider>
  );
}
