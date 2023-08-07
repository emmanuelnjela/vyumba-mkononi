import { Route, Routes } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";

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
import _ from "lodash";

function App() {
  let updatedHouse = null;
  const cookies = new Cookies();
  const getCurrentUser = () => {
    // get the currentUser from computer cookies
    const currentUserCookie = cookies.get("currentUser");
    return currentUserCookie || {};
  };

  const [errors, setErrors] = useState([]);
  // const { getAllHouses, updateData, deleteHouse } = new Crud(housesInDB)
  const [houses, setHouses] = useState(housesInDB);
  // const [users, setUsers] = useState(usersInDB);
  const housesCrud = new Crud(houses);

  // const [currentUser, setCurrentUser] = useState(getCurrentUser());

  const [{ users, currentUser }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_USERS":
          return { ...state, users: action.payload };
        case "SET_CURRECT_USER":
          /**
           * Encrypt the user object before it saved in the cookies
           * Set an expire time when the user leave the website
           */
          const time = new Date().getTime();
          const cookiesOption = {
            path: "/",
            expires: new Date(time + 5 * (60 * 1000)),
          };
          cookies.set("currentUser", action.payload, cookiesOption);
          return { ...state, currentUser: action.payload };
        default:
          break;
      }
    },
    {
      users: usersInDB,
      currentUser: getCurrentUser(),
    }
  );
  const usersCrud = new Crud(users);

  const handleUserUpate = (userToUpdate) => {
    const [userToUpdateID] = Object.keys(userToUpdate);
    const updatedUsers = usersCrud.updateData(
      userToUpdateID,
      userToUpdate[userToUpdateID]
    );
    if (currentUser._id == userToUpdateID) {
      const currentUserUpdated = updatedUsers.filter(
        ({ _id }) => _id == userToUpdateID
      );
      console.log(currentUserUpdated);
      // setCurrentUser(updatedUsers[currentUser._id])
      // setCurrentUserInCookies(updatedUsers[currentUser._id])
    }
    dispatch({ type: "SET_USERS", payload: updatedUsers });
  };

  const handleHouseUpate = (houseToUpdate) => {
    console.log(houseToUpdate);
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

  const handleCurrentUser = (user) =>
    dispatch({ type: "SET_CURRECT_USER", payload: user });

  const isLogin = !_.isEmpty(currentUser) && cookies.get("accessKey");

  const currentUserContextObject = {
    isOwner: currentUser.owner ? true : "false",
    isLogin,
    currentUser,
    onUserUpdate: handleUserUpate,
  };

  return (
    <CurrentUserContext.Provider value={currentUserContextObject}>
      <HousesContext.Provider value={housesContextObject}>
        <div className="container">
          <Routes>
            <Route path="*" element={<Overview />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={<Login onCurrentUser={handleCurrentUser} />}
            />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/home/*"
              element={
                isLogin ? <Home /> : <Login onCurrentUser={handleCurrentUser} />
              }
            />
            <Route path="/house-preview/:id" element={<HousePreview />} />
          </Routes>
        </div>
      </HousesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
