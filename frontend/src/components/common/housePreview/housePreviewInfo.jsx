import { Link } from "react-router-dom";

import ContactIcons from "../contactIcons";
import profile from "../../../imgs/profile.jpg";
import map from "../../../imgs/map.jpeg";
import MapComp from "../maps/map"

function HousePreviewInfo() {
  return (
    <div className="house-preview__info">
      <div className="house-preview__info-header">
        <div className="house-preview__contacts">
          <h5 className="text text--title text--bold mb-xxxsm">Mawasiliano</h5>
          <ContactIcons />
        </div>
        <Link to="profile" className="house-preview__profile">
          <img src={profile} alt="" className="profile-img" />
          <h6 className="house-preview__text text--dark">Emmanuel Njela</h6>
        </Link>
      </div>
      <div className="house-preview__info-body">
        <h5 className="house-preview__title text--dark">
          Taarifa kuusu chumba
        </h5>
        <p className="house-preview__text">
          Chumba kinaulinzi wa kutosha. Pia chumba kinapatikana maeneo ya kalibu
          na chuo hivyo ni chumba kizuri sana kwa ajili ya wanachuo maji
          yanapatika masaa 24 pia chumba kipo ndani ya wigo
        </p>
        <h5 className="house-preview__title text--dark">
          Tazama katika ramani
        </h5>
        <div className="house-preview__map">
          <MapComp />
        </div>
      </div>
    </div>
  );
}

export default HousePreviewInfo;
