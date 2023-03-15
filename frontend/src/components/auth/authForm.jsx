import AuthFormAction from "./authFormAction";
import AuthFormGroup from "./authFormGroup";
import AuthFormInputGroup from "./authFormInputGroup";
import AuthFormTitle from "./AuthFormTitle";

function AuthForm({ authFormData, inputValues, onChange, errors, onSubmit}) {
  const { btn, inputs } = authFormData;
  console.log(inputs[0])
  return (
    <form action="" className="auth__form" onSubmit={(e) => onSubmit(e, inputValues)}>
      <AuthFormTitle label={btn.label} />
      {inputs.map((input) => (
        <AuthFormInputGroup
          key={input.id}
          input={input}
          inputValues={inputValues}
          errors={errors}
          onChange={onChange}
        />
      ))}
      <AuthFormGroup />
      <AuthFormAction label={btn.label} />
    </form>
  );
}

export default AuthForm;
