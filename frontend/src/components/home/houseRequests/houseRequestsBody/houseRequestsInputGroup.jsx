import ReactSelectDropdown from "../../../common/reactSelectDropdown.jsx";
import TextArea from "../../../common/textArea.jsx";

function HouseRequestsInputGroup({
  labelText,
  placeholder,
  control,
  name,
  inputType,
  rules,
  register,
  options,
  errors,
}) {
  return (
    <div className="house-requests__form-input-group mb-sm w-100">
      <h6 className="mb-xxxsm text--dark">{labelText}</h6>
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
          placeholder={placeholder}
          register={register}
          rules={rules}
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
      {errors[name] && (
        <p className="input-group-error">
          {errors[name].message}
          {/* <i className="fas fa-x"></i> */}
        </p>
      )}
    </div>
  );
}

export default HouseRequestsInputGroup;
