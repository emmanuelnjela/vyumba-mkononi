import { useState } from "react";
import { isEmpty, omit } from "lodash";
import { validate } from "../utils/formValidation"

const useForm = (authData) => {
  const { form: authFormData } = authData;

  var defaultAccount = {};
  var { inputs, submitAction } = authFormData;
  // initiate the form input fields svalues
  for (const input of inputs) {
    defaultAccount[input.name] = "";
  }
  // Form Values
  const [values, setValues] = useState(defaultAccount);
  // Errors
  const [errors, setErrors] = useState({});

  // a method to handle form inputs
  const handleChange = (event) => {
    let errorsCopy = { ...errors };
    // to stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    const validatedError = validate(event, name, val);

    if (isEmpty(validatedError)) errorsCopy = omit(errorsCopy, name);
    
    // let's set errors
    setErrors({
      ...errorsCopy,
      ...validatedError
    });

    // let's set these values in state
    setValues({
      ...values, // spread operator to store old values
      [name]: val,
    });

  };

  // Final submiting function
  const handleSubmit = (event) => {
    const errorsCopy = {...errors}
    event.preventDefault()
    Object.entries(values).forEach(([name, value]) => {
      // the password value that will be used in password comfirmation
      const passwordValue = (name !== "cpassword") ? null : values["password"]
      console.log(passwordValue)
      const validatedError = validate(event, name, value, passwordValue);
      console.log(validatedError[name])
      errorsCopy[name] = validatedError[name];
    });
    setErrors(errorsCopy)
    const allValuesValid = Object.values(values).every(
      (value) => value.length > 0
    );

    if (isEmpty(errors) && allValuesValid) {
      console.log("hello")
      handleChange(event = {target: {name: ""}, target: {value: ""}})
      submitAction(event);
    }
  };

  return {
    errors,
    values,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
