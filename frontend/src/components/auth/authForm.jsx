import { useForm } from "react-hook-form";

import AuthFormAction from "./authFormAction.jsx";
import AuthFormGroup from "./authFormGroup.jsx";
import AuthFormInputGroup from "./authFormInputGroup.jsx";
import AuthFormTitle from "./AuthFormTitle.jsx";

function AuthForm({ authFormData, schema }) {

  const { btn, type: formType, alreadyMessage, inputs, submitAction } = authFormData;

  const {handleSubmit, register,watch,control, formState: {errors}, reset} = useForm()

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
          control={control}
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
