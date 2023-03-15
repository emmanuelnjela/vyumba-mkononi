import { NavLink } from "react-router-dom";

function withPopUpCard(Content) {
    const WithPopUpCard = (props) => (
        <div className="popup-card">
        <NavLink to={"/home"} className="cancel rounded rounded--primary">
          <i className="fas fa-x "></i>
        </NavLink>
        <Content {...props}/>
      </div>
    )
    return WithPopUpCard
}
export default withPopUpCard
