import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import BaseUrlContext from "../../../context/baseUrlContext.jsx";
import UsersContext from "../../../context/usersContext.jsx";
import HousesContext from "../../../context/housesContext.jsx";
import ComfirmMessage from "../comfirmMessage.jsx";



function DeleteAccountComfirmMessage() {
  const baseUrl = useContext(BaseUrlContext);
  const { currentUser, onUserDelete } = useContext(UsersContext);
  const { onDeleteUserHouses } = useContext(HousesContext);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    try {
      if(e.target.name === "yes") {
        await onDeleteUserHouses(currentUser._id);
        // if(message !== "house deleted successfully") throw new Error("house not deleted")
        await onUserDelete(currentUser._id);
        await axios.post(`${baseUrl}/auth/logout`, null, {
          withCredentials: true,
        });
        navigate("/");
        return
      }
      navigate("/home/profile")
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <ComfirmMessage
      message="Je, Unataka Kufuta Account Yako?"
      acceptMessage="futa account"
      denialMessage="usifute account"
      onclick={handleClick}
    />
  );
}

export default DeleteAccountComfirmMessage;
