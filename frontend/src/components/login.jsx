import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

import BaseUrlContext from "../context/baseUrlContext.jsx";
import UsersContext from "../context/usersContext.jsx";
import Auth from "./auth/Auth.jsx";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { onCurrentUser } = useContext(UsersContext);
  const baseUrl = useContext(BaseUrlContext);

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
      alreadyMessage: (
        <>
          Au kama bado haujajiunga, tafadhili bonyeza{" "}
          <Link to={"/register"} className="text--underline text--primary">
            jiunge
          </Link>
        </>
      ),
      submitAction: (data, fromRegister = false) => {
        const { username, password } = data;
        console.log(username, password);
        axios
          .post(`${baseUrl}/auth/login`, {
            userName: username,
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

            if (fromRegister) {
              navigate("/welcome");
              return;
            }
            navigate("/home");
          })
          .catch((err) => {
            console.log(err);
            toast(err.response.data.message, {});
            // return setErrorMessage(err);
          });
      },
    },
  };
  const schema = {
    username: {
      required: "Jina lina hitajika, tafadhali jaza",
    },
    password: {
      required: "Password inahitajika, tafadhali jaza",
    },
  };
  if (location.state !== null) {
    const { username, email, password } = location.state;
    const data = { username, password };

    const fromRegister = true;
    authData.form.submitAction(data, fromRegister);
  }
  return <Auth authData={authData} schema={schema} />;
}

export default Login;
