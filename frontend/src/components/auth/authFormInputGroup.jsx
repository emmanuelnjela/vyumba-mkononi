import { useForm } from "react-hook-form";

function FormInputGroup({ input, register, errors, watch, schema }) {
  // const {register, setError} = useForm()
  // console.log(inputValues)
  const inputValidation =
    input.name == "cpassword"
      ? {
          ...schema[input.name],
          validate: (val) => {
            if (watch("password") !== val) {
              return "Tafadhali rudia tena kuandika password yako hapa";
            }
          },
        }
      : schema[input.name];
  
  return (
    <div className="auth__form-input-group white-bg">
      <i className={`auth__form-icon fas fa-${input.iconName}`}></i>
      <input
        type="text"
        className="auth__form-input"
        name={input.name}
        {...register(input.name, inputValidation)}
        // value={inputValues[input.name]}
        placeholder={input.hint}
        label={input.label}
        data-label={input.label}
        // onChange={onChange}
      />
      {errors[input.name] && (
        <p className="auth__form-error">
          {errors[input.name].message}
          {/* <i className="fas fa-x"></i> */}
        </p>
      )}
    </div>
  );
}

export default FormInputGroup;
