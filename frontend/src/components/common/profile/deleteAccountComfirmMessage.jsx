import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UsersContext from "../../../context/usersContext";
import HousesContext from "../../../context/housesContext";
import ComfirmMessage from "../comfirmMessage";



function DeleteAccountComfirmMessage() {
  const { currentUser, onUserDelete } = useContext(UsersContext);
  const { onDeleteUserHouses } = useContext(HousesContext);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    try {
      if(e.target.name === "yes") {
        await onDeleteUserHouses(currentUser._id);
        // if(message !== "house deleted successfully") throw new Error("house not deleted")
        await onUserDelete(currentUser._id);
        await axios.post("http://localhost:3001/auth/logout", null, {
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
