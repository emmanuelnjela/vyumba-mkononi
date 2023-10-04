import AuthFormAction from "./authFormAction";
import AuthFormGroup from "./authFormGroup";
import AuthFormInputGroup from "./authFormInputGroup";
import AuthFormTitle from "./AuthFormTitle";
import { useForm } from "react-hook-form";

function AuthForm({ authFormData, schema }) {

  const { btn, type: formType, alreadyMessage, inputs, submitAction } = authFormData;

  const {handleSubmit, register,watch, formState: {errors}, reset} = useForm()

  function onData(data) {
    submitAction(data)
    reset()
  }
  function onError(errors) {
    console.log(errors)
  }

  return (
    <form
      action=""
      className="auth__form"
      onSubmit={handleSubmit(onData, onError)}
      // onSubmit={(e) => onSubmit(e, inputValues)}
    >
      <AuthFormTitle label={btn.label} />
      {inputs.map((input) => (
        <AuthFormInputGroup
          key={input.id}
          input={input}
          register={register}
          // inputValues={inputValues}
          schema={schema}
          watch={watch}
          errors={errors}
          // onChange={onChange}
        />
      ))}
      {formType === "login" ? <AuthFormGroup /> : <div className="p-sm"></div>}
      <AuthFormAction alreadyMessage={alreadyMessage} label={btn.label} />
    </form>
  );
}

export default AuthForm;
