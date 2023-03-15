/**
 * The event is used if i want to target element for customization or styling, name is a name of element, values is values of element
 * @param {String} event
 * @param {String} name
 * @param {String} value
 */
export const validate = (event, name, value, password) => {
  console.log(password)
  let validatedError = {};
  // A function to validate each input values
  if (password || password == "") {
    if (password !== value || password == "")
      validatedError = { cpassword: "password hazijafanana" };
    else {
      return validatedError;
    }
  }
  switch (name) {
    case "username":
      if (value.length <= 4) {
        // we will set the error state
        validatedError = {
          username: "Jina la mtumiaji lina herufi chache",
        };
      } else {
        // set the error state empty or remove the error for username input
        validatedError = {};
      }
      break;
    case "email":
      if (
        !new RegExp(
          /^(([^<>()[\]\\.,;;\s@"]+(\.[^<>()[\]\\.,;;\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).test(value)
      ) {
        validatedError = {
          email: "Ingiza E-mail sahihi",
        };
      }
      break;
    case "password":
      if (
        !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
      ) {
        validatedError = {
          password:
            "Password lazima iwe na herufi kwanzia 8, ichanganye herufi kubwa, herufi ndogo na namba",
        };
      } else {
        validatedError = {};
      }
      break;

    default:
      break;
  }
  return validatedError;
};
