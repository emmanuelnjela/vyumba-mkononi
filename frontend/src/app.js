import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import "./app.css";
import CurrentUserContext from "./context/currentUserContext";
import HousesContext from "./context/housesContext";
import Login from "./components/login";
import Overview from "./components/overview/Overview";
import Register from "./components/register";
import Home from "./components/home/Home";
import HousePreview from "./components/common/housePreview/HousePreview";
import { housesInDB } from "./data/falseHouseAPI";
import { usersInDB } from "./data/fakeUsersApi";
import { Crud } from "./utils/crudOperations";
import Cookies from "universal-cookie";
import Logout from "./components/logout";

function App() {
  let updatedHouse = null;
  const cookies = new Cookies()
  
  const [errors, setErrors] = useState([]);
  // const { getAllHouses, updateData, deleteHouse } = new Crud(housesInDB)
  const [houses, setHouses] = useState(housesInDB);
  const [users, setUsers] = useState(usersInDB);
  const [accessKey, setAccessKey] = useState(cookies.get("accessKey"));
  const housesCrud = new Crud(houses);
  const usersCrud = new Crud(users);

  const handleUserUpate = (userToUpdate) => {
    console.log(userToUpdate)
    const [userToUpdateID] = Object.keys(userToUpdate);
    const updatedUsers = usersCrud.updateData(
      userToUpdateID,
      userToUpdate[userToUpdateID]
    );
    setUsers([...updatedUsers])
  }

  const handleHouseUpate = (houseToUpdate) => {
    console.log(houseToUpdate)
    let errorMessage = "";
    const [houseToUpdateID] = Object.keys(houseToUpdate);
    updatedHouse = housesCrud.updateData(
      houseToUpdateID,
      houseToUpdate[houseToUpdateID]
    );
    if (typeof updatedHouse === "string" || !updatedHouse) {
      errorMessage = `${Date()
        .match(/.{25}/)[0]
        .trimEnd()
        .replace(/[\s]/g, "-")} error -> ${updatedHouse}`;
      setErrors([...errors, { updateError: errorMessage }]);
      return;
    }
    setErrors([...errors, null]);
  };
  function handleHouseDelete(id) {
    const _houses = housesCrud.deleteData(id);
    if (typeof _houses !== "string") setHouses([..._houses]);
    console.log(id);
  }
  // context variables

  const housesContextObject = {
    all: houses,
    saved: houses?.filter(({ isSaved }) => isSaved === true),
    savedTotal: houses?.filter(({ isSaved }) => isSaved === true).length,
    getBySize: (size) => houses?.slice(0, size),
    onUpdate: handleHouseUpate,
    onHouseDelete: handleHouseDelete,
  };     
  

  useEffect(() => {

  }, [])

  console.log(accessKey)

  const [currentUser, setCurrentUser] = useState({})

  const handleCurrentUser = (user) => setCurrentUser(user)

  const currentUserContextObject = {
    isOwner: currentUser.owner ? true : "false",
    currentUser,
    onUserUpdate: handleUserUpate
  };

  return (
    <CurrentUserContext.Provider value={currentUserContextObject}>
      <HousesContext.Provider value={housesContextObject}>
        <div className="container">
          <Routes>
            <Route path="*" element={<Overview />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login  onCurrentUser={handleCurrentUser}/>} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/home/*" element={accessKey  ? <Home /> : <Login />} />
            <Route path="/house-preview/:id" element={<HousePreview />} />
          </Routes>
        </div>
      </HousesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
