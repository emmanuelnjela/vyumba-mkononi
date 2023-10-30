import { useContext } from "react";

import AddHouseInfoContext from "../../../context/addHouseInfo.jsx";
import ReactSelectDropdown from "../../common/reactSelectDropdown.jsx";
import TextArea from "../../common/textArea.jsx";

function AddHouseInputGroup({
  title,
  name,
  placeholder,
  inputType,
  options,
  rules,
}) {
  const { register, control, errors } = useContext(AddHouseInfoContext);

  return (
    <div className="add-house__input-group">
      <h6 className="add-house__input-group-label text--dark">{title}</h6>
      {inputType === "select" ? (
        <ReactSelectDropdown
          name={name}
          control={control}
          rules={rules}
          options={options}
          placeholder={placeholder}
        />
      ) : inputType === "textArea" ? (
        <TextArea
          name={name}
          register={register}
          rules={rules}
          placeholder={placeholder}
        />
      ) : (
        <input
          type="text"
          name={name}
          className="w-100 p-xsm"
          placeholder={placeholder}
          {...register(name, rules)}
        />
      )}
    </div>
  );
}

export default AddHouseInputGroup;
