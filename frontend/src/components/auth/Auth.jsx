import AuthBrand from "./authBrand";
import AuthForm from "./authForm";
import AuthNavigatorBtn from "./authNavigatorBtn";
// import useForm from "../../hooks/useForm";
import RenderErrorMessage from "./renderComp/renderErrorMessage";


/**
 * An auth component provide an authentification functionality,
 * so any component to use this component must provide authdata which contains info about the
 * brand and form side. Also must provide the schema of how data will be verified, and lastly must provide
 * onSubmit function which will handle form submision
 * @param {*} 'props to create auth component'
 * @returns a new component with all auth functionality
 */
function Auth({ authData, schema }) {
  const { brand: authBrandData, form: authFormData } = authData;
  // const { handleChange, values, errors, handleSubmit } = useForm(authData);

  return (
    <div className="auth">
      <RenderErrorMessage errorMessage={authFormData.errorMessage} />
      <AuthNavigatorBtn />
      <AuthBrand authBrandData={authBrandData} />
      <AuthForm authFormData={authFormData} schema={schema} />
    </div>
  );
}

export default Auth;
