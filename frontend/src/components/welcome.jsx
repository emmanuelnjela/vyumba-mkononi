import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import UsersContext from "../context/usersContext.jsx";

function Welcome() {
  const {currentUser} = useContext(UsersContext)
  return (
    <div className="welcome-page h-100 d-flex justify-content-center align-items-center">
      <div className="welcome-page__card d-grid align-items-center p-sm w-95 w-md-80 w-sm-80 bg--white h-95 h-sm-80 p-sm p-sm-xlg shadow-sm">
        <div className="welcome-page__info text--center">
          <img className="welcome-page__logo" src={logo} alt="" />
          <h1 className="welcome-page__title text--primary">Vyumba Mkononi</h1>
        </div>
        <div className="welcome-page__message text--center w-md-80 m-auto">
          <h3 className="welcome-page__title text--secondary">Karibu, {currentUser.userName}</h3>
          <h5 className="text--justify my-lg">
            Asante kwa kujiunga na karibu katika website itakayo kusaidia
            kutafuta vyumba vya kupanga au kupangisha vyumba vyako kwanjia ya
            mtandao kirahisi zaidi.
          </h5>
          <div className="welcome-page__infos">
            <h6 className="my-md">
              Chagua <big className="text--primary">profile</big> kama unataka
              kukamilisha taarifa zako ilikua na uwezo wa kuweka tangazo lako
              nyumba ni mahususi kwa <span className="text--primary">wenye nyumba</span> na <span className="text--primary">madalali</span>.
            </h6>
            <h6 className="my-md">
              Au chagua <big className="text--primary">endelea</big> kuaendelea
              na utafutaji wa vyumba ni mahususi kwa <span className="text--primary">wapangaji</span>.
            </h6>
          </div>
          <div className="btns d-flex space-btn w-sm-80 m-auto">
            <Link to={"/home/profile"} className="btn btn--primary">Profile</Link>
            <Link to={"/home"} className="btn btn--primary">Endelea</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
