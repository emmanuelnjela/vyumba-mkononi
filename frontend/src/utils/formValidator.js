const errors = {};

export function formValidator(schema, object) {
  /* **
   *  A function takes an schema and the object to be validated as input's
   *  Then return an error object if error found otherwise it return null
   *
   */
  const entries = Object.entries(schema);

  for (let [name, rules] of entries) {
    const value = object[name];
    if (value || value == "") {
      errors[name] = [];
      if (contains(rules, "required")) {
        if (value == "") {
          errors[name] = [`Sehemu ya ${name} Hakuna taarifa`];
        } else {
          if (contains(rules, "string")) {
            if (/^\D.+$/.test(value)) {
              errors[name].push("Jina ulilotumia si sahihi");
            } 
            if (contains(rules, "email")) {
              if (!/^\w+@\w+\.\w{3}$/.test(value)) {
                errors[name].push("Email uliweka sio sahihi");
              }
            }
            if (contains(rules, { max: 100 })) {
              if (value.length > contains(rules, { max: 100 })["max"]) {
                errors[name].push(`${name} ilioweka imezidi kiwango`);
              }
            }
            if (contains(rules, { min: 0 })) {
              if (value.length < contains(rules, { min: 100 })["min"]) {
                errors[name].push(`${name} ilioweka inaherufi chache sana`);
              }
            }
            if (contains(rules, "number")) {
              if (typeof value != "number") {
                errors[name].push(`Kwene ${name} kunaitajika namba tu`);
              }
            }
          }
        }
      }
    }
  }
  return errors;
}

function contains(array, value) {
  return array.find((elem) => {
    if (typeof value === "object" && value !== null) {
      value = Object.keys(value)[0];
    }
    if (elem[value]) {
      return elem[value];
    }

    return elem == value;
  });
}
