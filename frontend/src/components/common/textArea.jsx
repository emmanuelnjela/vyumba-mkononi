import { useState } from "react";

function TextArea({name, placeholder, register, rules, value=undefined}) {
  // const [text, setText] = useState(value)
  // function handleText(e){
  //   setText(e.target.value.toUpperCase())
  //   // onTextArea(e)
  // }

  return (
    <textarea
      name={name}
      defaultValue={value}
      id=""
      cols="30"
      rows="10"
      className="add-house__input-group-text-area p-sm"
      placeholder={placeholder}
      {...register(name, rules)}
    ></textarea>
  );
}

export default TextArea
