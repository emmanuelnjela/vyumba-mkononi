// the function used to validate the current input field
// the input to be valid the previous input must have an value

// inputs - element name
// outputs - error object or null
const errors = {};

function upper(all, letter) {
    console.log(all)
    return ` ${letter}`
}

export function validateInputElement(elementName) {
  const element = document.getElementsByName(elementName);
  const prevElement = element[0].parentElement.previousElementSibling

  if (prevElement.nodeName === "DIV") {
    const {nodeName, value, name} = prevElement.children[1];
    if(nodeName === "INPUT") {
      switch (value) {
        case "":
            errors[name] = `Kwene sehemu ya ${name.replace(/-(\w)/, upper)}... Hakuna taarifa`;
            break;
        default:
            break;
      }
      validateInputElement(name);
    }
  }
  return errors || null;
}
