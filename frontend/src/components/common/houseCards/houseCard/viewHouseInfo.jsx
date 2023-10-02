import { Link } from "react-router-dom";
import _ from "lodash";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ViewHouseInfo({ housePreviewPath, currentUser }) {
  const navigate = useNavigate();
  function handleClick() {
    if (_.isEmpty(currentUser)) {
      toast(
        <h6>
          Kuona tarifa zaidi za chumba tafadhali{" "}
          <big className="text--primary">jiunge</big> au{" "}
          <big className="text--primary">ingia</big> katika account yako
        </h6>
      );
      return;
    }
    navigate(housePreviewPath);
  }
  return (
    <a
      className="link link--primary link--inline"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <i className="far fa-eye icon"></i>
      <span className="text--muted text--small">Ona zaidi</span>
    </a>
  );
}

export default ViewHouseInfo;
