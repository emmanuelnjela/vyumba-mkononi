import { Link } from "react-router-dom";

function ViewHouseInfo({ housePreviewPath }) {
  return (
    <Link
      to={housePreviewPath}
      className="link link--primary link--inline"
    >
      <i className="far fa-eye icon"></i>
      <span className="text--muted text--small">Ona zaidi</span>
    </Link>
  ); 
}

export default ViewHouseInfo