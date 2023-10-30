import _ from "lodash";

function AuthFormAction({ label, alreadyMessage }) {
  const capitalizedLabel = _.capitalize(label);
  return (
    <div className="auth__form-action">
      <button type="submit" className="auth__form-btn btn btn--primary">
        {label.toUpperCase()}
      </button>
      <h5 className="auth__form-sub-title text--center">
       {alreadyMessage}
      </h5>
      {/* <AuthFormIcons /> */}
    </div>
  );
}

export default AuthFormAction;
