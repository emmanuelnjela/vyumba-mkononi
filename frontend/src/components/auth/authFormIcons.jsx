import { NavLink } from "react-router-dom";

function AuthFormIcons() {
    return <div className="auth__form-icons">
        <NavLink to={""}>
            <i className="fab fa-facebook"></i>
        </NavLink>
        <NavLink to={""}>
            <i className="fab fa-instagram"></i>
        </NavLink>
        <NavLink to={""}>
            <i className="fab fa-google"></i>
        </NavLink>
    </div>;
}

export default AuthFormIcons