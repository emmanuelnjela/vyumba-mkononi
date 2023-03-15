import { Link } from "react-router-dom";
import Image from "../../image";
import ContactInfo from "./contactInfo";

function HouseCardHeader({ showContacts, houseImgs, houseId }) {
  return (
    <div className="housecard__header">
      {!showContacts ? (
        <Link to={`/house-preview/${houseId}`}>
          <Image imgSrc={houseImgs[0]} classes="housecard__img" />
        </Link>
      ) : (
        <ContactInfo />
      )}
    </div>
  );
}

export default HouseCardHeader;
