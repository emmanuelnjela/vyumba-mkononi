import axios from "axios";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";

import ComfirmMessage from "./common/comfirmMessage.jsx";
import UsersContext from "../context/usersContext.jsx";

function Logout() {
  const navigate = useNavigate();
  const {onSetCurrentUser} = useContext(UsersContext);
  // const {onHouses} = useContext(HousesContext)

  const handleClick = async (e) => {
    try {
      if (e.target.name === "yes") {
        const response = await axios.post(
          "http://localhost:3001/auth/logout",
          null,
          {
            withCredentials: true,
          }
        );
        onSetCurrentUser({})
        navigate("/");
        return;
      }
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ComfirmMessage
      message={"Unauhakika unataka kutoka kwenye account yako?"}
      denialMessage={"nimehairisha"}
      acceptMessage={"nataka kutoka"}
      onclick={handleClick}
    />
  );
}

export default Logout
