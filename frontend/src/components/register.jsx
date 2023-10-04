import Auth from "./auth/Auth";
import { useNavigate, Link } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


function Register() {
  const {watch} = useForm()
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
      alreadyMessage: (
        <>
        Au kama tayari umejiunga, tafadhili bonyeza{" "}
        <Link to={"/login"} className="text--underline text--primary">
          ingia
        </Link>
      </>
      ),
      submitAction: (data) => {
        const {username, password, email} = data

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
            // console.log(err);
            // setErrorMessage(err.response.data.message);
            toast(err.response.data.message)
          });
        // })
      },
    },
  };
  const schema = {
    username: {
      required: "Jina lina hitajika, tafadhali jaza",
      minLength: {
        value: 4,
        message: "Jina lina herufi chache sana, tafadhali ongeza",
      },
      maxLength: {
        message: "Jina lina herufi nyingi sana, tafadhali punguza",
      },
    },
    password: {
      required: "Password inahitajika, tafadhali jaza",
      minLength: {
        value: 6,
        message: "Password lazima iwe na herufi 6 na kuendelea"
      },
      pattern: {
        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
        message: "Password lazima iwe na herufi kubwa, ndogo na namba"
      }
    },
    cpassword: {
      required: "Rudia Password inahitajika, tafadhali jaza",
    },
    email: {
      required: "Email inahitajika, tafadhali jaza",
      pattern: {
        value:  /^(([^<>()[\]\\.,;;\s@"]+(\.[^<>()[\]\\.,;;\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Email yako si sahihi, tafadhali jaza email sahihi"
      }
    }
  };
  

  return <Auth authData={authData} schema={schema} />;
}

export default Register;
