import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import HousesContext from "../housesContext";
import { Crud } from "../../utils/crudOperations";
import UsersContext from "../usersContext";
import ErrorMessage from "../../components/common/errorMessage";
import _ from "lodash";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function HousesProvider({ children }) {
  const [errorMessage, setErrorMessage] = useState();
  const [houses, setHouses] = useState([]);
  const [searchedHouses, setSearchedHouses] = useState([]);
  const { isLogin, currentUser, onUserUpdate } = useContext(UsersContext);
  const housesUrl = "http://localhost:3001/houses";
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(housesUrl, {
        withCredentials: true,
      })
      .then((respond) => {
        // console.log(respond);
        const { houses: housesInDB, message } = respond?.data;
        if (message) throw new Error(message);
        setHouses(
          housesInDB.sort((a, b) => {
            const aDate = new Date(a.DateOfCreation);
            const bDate = new Date(b.DateOfCreation);
          
            return bDate - aDate; // Compare the dates directly
          })
        );
      })
      .catch((error) => setErrorMessage(error.message));
  }, [isLogin]);

  useEffect(() => {
    setSearchedHouses([])
  }, [location.pathname])

  const handleHouseSearch = (searchWord, selectedValues) => {
    console.log(selectedValues);
    if (location.pathname === "/") {
      navigate("/house-search-bar-message");
      return;
    }
    // Clear previous search results
    setSearchedHouses([]);

    if (searchWord.trim() === "" && _.isEmpty(selectedValues)) {
      // No search criteria provided, return early or show a message
      return;
    }

    const isSearchWordExists = houses.some(({ location }) =>
      location.startsWith(searchWord)
    );

    if (!isSearchWordExists && searchWord.trim() !== "") {
      toast(`Hakuna nyumba katika maeneo ya "${searchWord}"`);
      return;
    }

    const searchedHouses = houses.filter(
      ({ location, reasePerMonth, roomType }) => {
        const locationMatch = location.startsWith(searchWord);
        const priceMatch =
          selectedValues.min <= reasePerMonth &&
          selectedValues.max >= reasePerMonth;
        const roomTypeMatch = roomType === selectedValues.type;

        // Filter based on location and/or price range
        return (
          (searchWord.trim() === "" || locationMatch) &&
          (_.isEmpty(selectedValues) || priceMatch) &&
          (selectedValues.type === undefined || roomTypeMatch)
        );
      }
    );

    if (searchedHouses.length === 0) {
      toast("Hakuna nyumba iliyo kidhi vigezo vyako.");
      // navigate("/home/houseReminderMessage")
    } else {
      setSearchedHouses(searchedHouses);
    }

    // Optionally clear the search word
    // setSearchWord("");
  };

  const handleHouseAdd = async (houseInfo) => {
    try {
      const respond = await axios.post(
        housesUrl,
        { houseInfo },
        {
          withCredentials: true,
        }
      );
      const { message, house } = respond.data;
      if (message) throw new Error(message);
      setHouses([...houses, house]);
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
    const { updatedHouse, message } = respond.data;
    console.log(updatedHouse, houseToUpdate);
    const updatedHouses = houses.map((house) =>
      house._id === updatedHouse._id ? updatedHouse : house
    );
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
      const houseToDelete = houses.find(({ _id }) => _id === id);
      console.log(houseToDelete);
      if (!houseToDelete) return;
      const respond = await axios.delete(`${housesUrl}/${id}`, null, {
        withCredentials: true,
      });
      const { message } = respond.data;
      const savedHousesAfterDelete = currentUser?.savedHouses.filter(
        (houseId) => houseId !== id
      );
      onUserUpdate({
        [houseToDelete.ownerId]: [
          { name: "savedHouses", value: savedHousesAfterDelete },
        ],
      });
      if (message !== "deleted successfully") throw new Error(message);
      const housesAfterDelete = houses.filter((house) => house._id !== id);
      setHouses(housesAfterDelete);
      setErrorMessage(null);
      return "house deleted successfully";
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
  const handleGetHouse = (id) => {
    const promise = new Promise(function (resolve, reject) {
      const respond = axios.get(`${housesUrl}/${id}`, {
        withCredentials: true,
      });

      respond.then((house) => resolve(house));
      respond.catch((error) => reject(error));
    });
    return promise;
  };
  const handleHouses = (newHouses) => setHouses(newHouses);
  const handleDeleteUserHouses = async (userId) => {
    return new Promise(function (resolve, reject) {
      for (let { _id: houseId, ownerId } of houses) {
        console.log(houseId, ownerId, userId);
        if (ownerId == userId) {
          const respond = handleHouseDelete(houseId);

          respond.then((message) => resolve(message));
          respond.catch((error) => reject(error.message));
        }
      }
      resolve("No House to delete");
    });
  };

  const housesContextObject = {
    all: _.isEmpty(searchedHouses) ? houses : searchedHouses,
    currentOwnerHouses: useCallback(
      houses.filter(({ ownerId }) => ownerId === currentUser._id),
      [houses,  currentUser._id]
    ),
    saved: houses?.filter(({ savedHouses }) => savedHouses?.same()),
    savedTotal: houses?.filter(({ isSaved }) => isSaved === true).length,
    getBySize: (size) => houses?.slice(0, size),
    filterBy: (callback) => houses?.filter(callback),
    getById: (id) => houses?.find(({ _id }) => _id === id),
    onHouses: handleHouses,
    onHouseSearch: handleHouseSearch,
    onDeleteUserHouses: handleDeleteUserHouses,
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
      <RenderErrorMessage errorMessage={errorMessage} />
      {children}
    </HousesContext.Provider>
  );
}
