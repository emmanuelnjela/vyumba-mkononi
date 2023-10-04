import { Link } from "react-router-dom";

import logo from "../../imgs/logo.png";
import "./authBrand.css";


function AuthBrand({ authBrandData }) {
  const { btn } = authBrandData;
  return (
    <div className="auth__brand">
      <img src={logo} alt="" className="auth__brand-logo" />
      <h3 className="auth__brand-name text--secondary">Vyumba Mkononi</h3>
      <Link to={btn.path}>
        <button className="auth__brand-btn btn btn--primary">
          {btn.label}
        </button>
      </Link>
    </div>
  );
}

export default AuthBrand;
