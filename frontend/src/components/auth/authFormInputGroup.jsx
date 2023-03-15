function FormInputGroup({ input, inputValues, errors, onChange }) {
  // console.log(inputValues)
  const iconClasses = `auth__form-icon fas fa-${input.iconName}`
  return (
    <div className="auth__form-input-group white-bg">
      <i className={iconClasses}></i>
      <input
        type="text"
        className="auth__form-input"
        name={input.name}
        value={inputValues[input.name]}   
        placeholder={input.hint}
        label={input.label}
        data-label = {input.label}
        onChange={onChange}
      />
      {errors[input.name] &&  (
        <p className="auth__form-error"> 
          {errors[input.name]}
          {/* <i className="fas fa-x"></i> */}
        </p>
      ) }
    </div>
  );
}

export default FormInputGroup;
