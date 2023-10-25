import { Link } from "react-router-dom";

import ContactIcons from "../contactIcons";
import profile from "../../../imgs/profile.jpg";
import map from "../../../imgs/map.jpeg";
import MapComp from "../maps/map";
import { useEffect, useRef } from "react";;
function HousePreviewInfo({ house, owner }) {
  console.log(owner);
  const formatedDateOfCreation = formatDate(house?.DateOfCreation)

  return (
    <div className="house-preview__info">
      {/* <div className="house-preview__info-header">
        <div className="house-preview__contacts">
          <h5 className="text text--title text--bold mb-xxxsm">Mawasiliano</h5>
          <ContactIcons />
        </div>
        <Link to="" className="house-preview__profile">
          <img
            src={owner?.profileImage || profile}
            alt=""
            className="profile-img"
          />
          <h6 className="house-preview__text text--dark">{owner?.userName}</h6>
        </Link>
      </div> */}
      <div className="house-preview__info-body">
        <h5 className="house-preview__title text--dark">
          Taarifa kuusu chumba{" "}
          <span className="my-sm text--primary ms-auto">
            Kimewekwa Tarehe: {formatedDateOfCreation}
          </span>
        </h5>
        <p className="house-preview__text">{house.description}</p>

        <table className="house-preview__table">
          <thead>
            <tr>
              <th>Kinapatikana</th>
              <th>Aina ya chumba</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{house.location}</td>
              <td>{house.roomType}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Bei Ya chumba</th>
              <th>Awamu za kulipa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tsh. {house.reasePerMonth}</td>
              <td>{house.minReaseLength}</td>
            </tr>
          </tbody>
        </table>
        <h5 className="house-preview__title text--dark">
          Taarifa za mwenye nyumba
        </h5>
        <div className="house-preview__owner">
          <div className="owner-profile text--center">
            <img
              src={owner?.profileImage || profile}
              alt=""
              className="profile"
            />
          </div>
          <div className="house-preview__contacts p-sm pt-xxsm">
            <h6 className="house-preview__text text--dark mb-xxsm">
              {owner?.userName}
            </h6>
            <p className="mb-xxsm">Anapatikana: {owner?.location}</p>
            <button className="btn btn--primary mb-xxsm"><span><i className="fas fa-eye"></i> ona vyumba vyangu vyote</span></button>
            <ContactIcons phoneNumber={owner?.phoneNumber} />
          </div>
          {/* <Map /> */}
        </div>
      </div>
    </div>
  );

  function formatDate(date) {
    const inputDate = new Date(date)

    // Extract individual date components
    const day = inputDate.getDate().toString().padStart(2, "0");
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const year = inputDate.getFullYear();

    // Create the desired format
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }
}

export default HousePreviewInfo;
