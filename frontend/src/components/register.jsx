import Auth from "./auth/Auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const authData = {
    brand: {
      btn: {
        path: "/login",
        label: "INGIA",
      },
    },
    form: {
      type: "register",
      btn: {
        path: "/home",
        label: "JIUNGE",
      },
      inputs: [
        {
          id: 1,
          name: "username",
          label: "jina",
          value: "",
          iconName: "user",
          hint: "Ingiza Jina Hapa",
        },
        {
          id: 2,
          name: "email",
          label: "email",
          value: "",
          iconName: "envelope",
          hint: "Ingiza Email hapa",
        },
        {
          id: 3,
          name: "password",
          label: "password",
          value: "",
          iconName: "lock",
          hint: "Tengeneza Password Hapa",
        },
        {
          id: 4,
          name: "cpassword",
          label: "",
          value: "",
          iconName: "lock",
          hint: "Rudia Password Hapa",
        },
      ],
      errorMessage: errorMessage,
      submitAction: (event, inputValues) => {
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const cpassword = event.target.cpassword.value;

        // useEffect(() => {
        axios
          .post(
            "http://localhost:3001/auth/register",
            {
              userName: username,
              email,
              password,
            },
            {}
          )
          .then((response) => {
            const { user } = response.data;
            // email verification
            return navigate("/login", {
              state: {username, password}
            });
          })
          .catch((err) => {
            console.log(err);
            setErrorMessage(err.response.data.message);
          });
        // })
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
      email: { type: "string", format: "email", minLength: 8 },
      password: { type: "string", minLength: 8 },
      cpassword: { type: "string", minLength: 8 },
    },
    required: ["name", "email", "password", "cpassword"],
    additionalProperties: false,
  };

  return <Auth authData={authData} schema={schema} />;
}

export default Register;
