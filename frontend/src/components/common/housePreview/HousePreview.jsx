import { Route, Routes, useParams } from "react-router-dom";
import axios from "axios";
import HousePreviewImgs from "./housePreviewImgs";
import HousePreviewInfo from "./housePreviewInfo";
import Profile from "../profile/Profile";
import { imageChanger } from "../../../utils/imageChanger";
import { useReducer, useEffect, useContext } from "react";
import HousePreviewNavigatorBtn from "./housePreviewNavigatorBtn";
import HousesContext from "../../../context/housesContext";
import UsersContext from "../../../context/usersContext";

function HousePreview() {
  const { id } = useParams();
  const { onGetHouse } = useContext(HousesContext);
  const { onGetUser } = useContext(UsersContext);

  const [{ house, imgs, owner }, dispatch] = useReducer(
    (state, action) => {
      try {
        switch (action.type) {
          case "SET-HOUSE":
            return { ...state, house: action.payload };
          case "SET-IMGS":
            return { ...state, imgs: action.payload };
          case "SET-OWNER":
            return { ...state, owner: action.payload };
          case "SET-ERROR":
            return { ...state, errorMessage: action.payload };
          default:
            throw new Error("action.type is not match with any case!");
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    {
      house: {},
      imgs: [],
      owner: {},
      errorMessage: "",
    }
  );
  useEffect(() => {
    async function fetchDatas() {
      try {
        const respondHouse = await onGetHouse(id);
        const house = respondHouse.data.house;
        const respondUser = await onGetUser(house.ownerId);
        const user = respondUser.data.user;

        dispatch({ type: "SET-OWNER", payload: user });
        dispatch({ type: "SET-HOUSE", payload: house });
        dispatch({ type: "SET-IMGS", payload: house.imgs });
      } catch (error) {
        console.log(error)
        dispatch({ type: "SET-ERROR", payload: error.message });
      }
    }
    fetchDatas();
  }, [id, onGetHouse, onGetUser]);

  function handleImgChange(pos) {
    let images = [...imgs];
    images = images.map(imageChanger(images, pos));
    dispatch({ type: "SET-IMGS", payload: images });
  }
  return (
    <div className="house-preview">
      <Routes>
        <Route path="profile" element={<Profile />} />
      </Routes>
      <HousePreviewNavigatorBtn />
      <HousePreviewImgs imgs={imgs} onImgChange={handleImgChange} />
      <HousePreviewInfo house={house} owner={owner} />
    </div>
  );
}

export default HousePreview;
