import Auth from "./auth/Auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import Cookies from "universal-cookie";
  
function Login({onCurrentUser}) {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null)
  const authData = {
    brand: {
      btn: {
        path: "/register",
        label: "JIUNGE",
      },
    },
    form: {
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
      submitAction: (event) => {
        const userName = event.target.username.value;
        const password = event.target.password.value;

        axios.post("http://localhost:3001/auth/login", {
          userName, password
        })
        .then((response) => {
          const {accessToken, refreshToken, user} = response.data
          const cookies = new Cookies();
          const time = new Date().getTime();
          const cookiesOption = {
            path: "/",
            expires: new Date(time + 5*(60 * 1000)) 
          }
          cookies.set('accessKey', accessToken, cookiesOption)
          cookies.set('refreshToken', refreshToken,  cookiesOption)
          onCurrentUser(user)
          navigate("/home")
        })
        .catch((err) => {
          console.log(err)
          return setErrorMessage(err.response.data.message)
        })
      }
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

  return (
    <Auth
      authData={authData}
      schema={schema}
    />
  );
}

export default Login;
