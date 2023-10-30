import { Link } from "react-router-dom";

import Image from "../../image.jsx";
import ContactInfo from "./contactInfo.jsx";

function HouseCardHeader({ showContacts, houseImgs, houseId, owner }) {
  return (
    <div className="housecard__header">
      {!showContacts ? (
        <Link to={`/house-preview/${houseId}`}>
          <Image imgSrc={houseImgs[0]} classes="housecard__img" />
        </Link>
      ) : (
        <ContactInfo phoneNumber={owner?.phoneNumber} />
      )}
    </div>
  );
}

export default HouseCardHeader;
