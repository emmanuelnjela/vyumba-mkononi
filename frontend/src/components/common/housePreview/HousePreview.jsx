import { Route, Routes, useParams } from "react-router-dom";
import axios from "axios";
import HousePreviewImgs from "./housePreviewImgs";
import HousePreviewInfo from "./housePreviewInfo";
import Profile from "../profile/Profile";
import { imageChanger } from "../../../utils/imageChanger";
import { useReducer, useEffect, useContext } from "react";
import HousePreviewNavigatorBtn from "./housePreviewNavigatorBtn";
import HousesContext from "../../../context/housesContext";

function HousePreview() {
  const { id } = useParams();
  const {onGetHouse} = useContext(HousesContext)

  const [{ house, imgs }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET-HOUSE":
          return { ...state, house: action.payload };
        case "SET-IMGS":
          return { ...state, imgs: action.payload };
        default:
          return { ...state, errorMessage: action.payload };
      }
    },
    {
      house: {},
      imgs: [],
      errorMessage: "",
    }
  );
  useEffect(() => {
    axios
      .get(`http://localhost:3001/houses/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.message) throw new Error(response.data.message);
        dispatch({ type: "SET-HOUSE", payload: response.data.house });
        dispatch({ type: "SET-IMGS", payload: response.data.house.imgs });
      })
      .catch((e) => dispatch({ payload: e.message }));
  }, [id]);

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
      <HousePreviewInfo house={house} />
    </div>
  );
}

export default HousePreview;
