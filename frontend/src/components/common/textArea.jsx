import { useState } from "react";

function TextArea({name,value, onTextArea}) {
  // const [text, setText] = useState(value)
  // function handleText(e){
  //   setText(e.target.value.toUpperCase())
  //   // onTextArea(e)
  // }

  return (
    <textarea
      name={name}
      id=""
      cols="30"
      rows="10"
      className="add-house__input-group-text-area p-sm"
      value={value}
      onChange={onTextArea}
    ></textarea>
  );
}

export default TextArea
