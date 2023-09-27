import { NavLink, useLocation } from "react-router-dom";

function withPopUpCard(Content) {
  const WithPopUpCard = (props) => {
    const { pathname } = useLocation();
    const splited = pathname.split("/");
    splited.pop();
    const linkTo = splited[splited.length - 1] === "" ? "/" : splited.join("/");
    return (
      <div className={`popup-card`}>
        <NavLink to={linkTo} className="cancel rounded rounded--primary">
          <i className="fas fa-x "></i>
        </NavLink>
        <Content {...props} />
      </div>
    );
  };
  return WithPopUpCard;
}
export default withPopUpCard;
