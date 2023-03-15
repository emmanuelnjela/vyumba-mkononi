import _ from "lodash";

import AuthFormIcons from "./authFormIcons";

function AuthFormAction({ label }) {
  const capitalizedLabel = _.capitalize(label);
  return (
    <div className="auth__form-action">
      <button className="auth__form-btn btn btn--primary">
        {label.toUpperCase()}
      </button>
      <h5 className="auth__form-sub-title">Au {capitalizedLabel} Kupitia</h5>
      <AuthFormIcons />
    </div>
  );
}

export default AuthFormAction;
