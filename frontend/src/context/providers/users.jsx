import Cookies from "universal-cookie";
import CurrentUserContext from "../usersContext";
import { useEffect, useReducer } from "react";
import { usersInDB } from "../../data/fakeUsersApi";
import { Crud } from "../../utils/crudOperations";
import _ from "lodash";
import { useLocation, useNavigate } from "react-router-dom";

export function UsersProvider({ children }) {
  const cookies = new Cookies();
  const getCurrentUser = () => {
    // get the currentUser from computer cookies
    const currentUserCookie = cookies.get("currentUser");
    return currentUserCookie || {};
  };
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
  const handleCurrentUser = (user) =>
    dispatch({ type: "SET_CURRECT_USER", payload: user });

  const isLogin = cookies.get("accessKey") && !_.isEmpty(currentUser);
  
  const navigate = useNavigate()
  const url = useLocation()
 
  useEffect(() => {
    const excludedPathnames = ["/", "/register", "/about-us"]
    const isPathNameExcluded = excludedPathnames.some(path => path === url.pathname)
    if(!isLogin && !isPathNameExcluded) return navigate("/login")
  }, [isLogin, navigate, url.pathname])

  const currentUserContextObject = {
    isOwner: true,
    isLogin,
    currentUser,
    onCurrentUser: handleCurrentUser,
    onUserUpdate: handleUserUpate,
  };
  return (
    <CurrentUserContext.Provider value={currentUserContextObject}>
      {children}
    </CurrentUserContext.Provider>
  );
}
