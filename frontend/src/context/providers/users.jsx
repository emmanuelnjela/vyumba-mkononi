import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

import CurrentUserContext from "../usersContext.jsx";
// import { usersInDB } from "../../data/fakeUsersApi";


export function UsersProvider({ children }) {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const currentUserId = cookies.get("currentUserId");
  const [currentUser, setCurrentUser] = useState({});
  const isLoggedInRef = useRef(typeof currentUserId === "string");

  // const usersCrud = new Crud(users);

  const handleUserUpate = async (userToUpdate) => {
    try {
      const currentUserCopy = { ...currentUser };

      const [userToUpdateID] = Object.keys(userToUpdate);
      if (userToUpdateID === currentUserId) {
        console.log(userToUpdate);
        const respond = await axios.put(
          "https://vyumba-mkononi-backend.onrender.com/users",
          {
            id: userToUpdateID,
            dataElements: userToUpdate[userToUpdateID],
          },
          {
            withCredentials: true,
          }
        );
        const { updatedUsers, message } = respond.data;
        console.log(updatedUsers, message);
        if (message) {
          throw new Error(message);
        }
        console.log(userToUpdate[userToUpdateID]);

        for (let { name, value } of userToUpdate[userToUpdateID]) {
          currentUserCopy[name] = value;
        }

        // dispatch({ type: "SET_CURRECT_USER", payload: currentUserCopy });

        setCurrentUser(currentUserCopy);
        // dispatch({ type: "SET_USERS", payload: updatedUsers });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCurrentUser = useCallback(
    async (userId) => {
      try {
        const respond = await axios.get(
          `http://localhost:3001/users/${userId}`,
          {
            withCredentials: true,
          }
        );
        const { user, message } = respond.data;
        if (message) throw new Error(message);
        isLoggedInRef.current = true;
        setCurrentUser(user);
        // navigate("/home");
        //  dispatch({ type: "SET_CURRECT_USER", payload: user });
      } catch (error) {
        console.log(error.message);
      }
    },
    [navigate]
  );

  useEffect(() => {
    console.log(currentUserId, currentUser)
    if(currentUserId && _.isEmpty(currentUser)) {
      handleCurrentUser(currentUserId);
    }
  }, [currentUserId, currentUser, handleCurrentUser]);

  // const updateCurrentUser = (dataElements) => {};
  const handleGetUser = (id) => {
    const promise = new Promise(function (resolve, reject) {
      const respond = axios.get(`http://localhost:3001/users/${id}`, {
        withCredentials: true,
      });

      respond.then((user) => resolve(user));
      respond.catch((error) => reject(error));
    });
    return promise;
  };

  const handleUserDelete = (id) => {
    const promise = new Promise(function (resolve, reject) {
      const respond = axios.delete(`http://localhost:3001/users/${id}`, {
        withCredentials: true,
      });
      respond.then(() => resolve());
      respond.catch((error) => reject(error));
    });
    return promise;
  };

  // const isLogin = cookies.get("currentUserId") === currentUser._id


  const currentUserContextObject = {
    isOwner: true,
    isLogin: isLoggedInRef.current,
    currentUser,
    onSetCurrentUser: setCurrentUser,
    onCurrentUser: handleCurrentUser,
    onUserDelete: handleUserDelete,
    onGetUser: handleGetUser,
    onUserUpdate: handleUserUpate,
  };
  return (
    <CurrentUserContext.Provider value={currentUserContextObject}>
      {children}
    </CurrentUserContext.Provider>
  );
}
