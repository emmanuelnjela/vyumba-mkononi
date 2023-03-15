/**
 * 
 * Function takes an validate object, input object and errors initital object then,
 * return errorMesssage object
 * @param {Object} validate 
 * @param {object} input 
 * @param {object} errors 
 * @returns errorMessages
 */
export function generateErrorMessages(validateErrors, input, errors) {  
  let errorMessages = { ...errors };
  if(validateErrors === null){
    return null
  } 
  errorMessages[input.name] = {show: false, messages: []};
  switch (validateErrors[0]?.keyword) {
    case "format":
      errorMessages[input.name].messages.push("Email uliyoweka sio sahihi!");
      if (validateErrors[0].params.format === ".email") {
      }
      break;
    case "minLength":
      errorMessages[input.name].messages.push(
        `${input.label} ina herufi chache sana!`
      );
      break;
    default:
  }
  return errorMessages;
}

/**
 * 
 * The function check the error messages object if there is an empty error message,
 * delete it, then return new updated error messages
 * @param {object} errorMessages 
 * @returns {object} 
 */
export function deleteMessageIfNoError(errorMessages) {
  for (const errorMessage in errorMessages) {
    if (errorMessages.hasOwnProperty.call(errorMessages, errorMessage)) {
      const element = errorMessages[errorMessage];
      if (element  === undefined || element.length === 0)
        delete errorMessages[errorMessage];
    }
  }
  return errorMessages
}
