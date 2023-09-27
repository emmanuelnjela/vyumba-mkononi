import Auth from "./auth/Auth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";

import Cookies from "universal-cookie";
import UsersContext from "../context/usersContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { onCurrentUser } = useContext(UsersContext);

  const [errorMessage, setErrorMessage] = useState(null);

  const authData = {
    brand: {
      btn: {
        path: "/register",
        label: "JIUNGE",
      },
    },
    form: {
      type: "login",
      btn: {
        path: "/home",
        label: "INGIA",
      },
      inputs: [
        {
          id: 1,
          name: "username",
          label: "jina",
          iconName: "user",
          hint: "Ingiza Jina Hapa",
        },
        {
          id: 2,
          name: "password",
          label: "password",
          iconName: "lock",
          hint: "Ingiza Password Yako Hapa",
        },
      ],
      errorMessage: errorMessage,
      submitAction: (event, fromRegister = false) => {
        const userName = event.target.username.value;
        const password = event.target.password.value;
        console.log(userName, password)
        axios
          .post("http://localhost:3001/auth/login", {
            userName,
            password,
          })
          .then((response) => {
            const { accessToken, refreshToken, user } = response.data;
            const cookies = new Cookies();
            const time = new Date().getTime();
            const cookiesOption = {
              path: "/",
              expires: new Date(time + 5 * (60 * 1000)),
            };
            cookies.set("accessToken", accessToken, cookiesOption);
            cookies.set("refreshToken", refreshToken, cookiesOption);
            cookies.set("currentUserId", user._id, cookiesOption);
            onCurrentUser(user._id);

            if(fromRegister) {
              navigate("/welcome")
              return
            }
            navigate("/home");
          })
          .catch((err) => {
            console.log(err);
            return setErrorMessage(err.response.data.message);
          });
      },
    },
  };
  const schema = {
    type: "object",
    properties: {
      name: {
        type: "string",
        minLength: 4,
      },
      password: { type: "string", minLength: 8 },
    },
    required: ["name", "password"],
    additionalProperties: false,
  };
  if (location.state !== null) {
    const { username, email, password } = location.state;
    const event = {
      target: { username: { value: username }, password: { value: password } },
    };
    const fromRegister = true
    authData.form.submitAction(event, fromRegister);
  }
  return <Auth authData={authData} schema={schema} />;
}

export default Login;
