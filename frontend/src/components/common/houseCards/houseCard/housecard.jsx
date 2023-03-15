import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import HousesContext from "../../../../context/housesContext";
import HouseCardBody from "./houseCardBody";
import HouseCardFooter from "./houseCardFooter";
import HouseCardHeader from "./houseCardHeader";

function HouseCard({ house }) {
  const housesContext = useContext(HousesContext);
  const { "*": currentPage } = useParams();

  const { onUpdate } = housesContext;

  const [showContacts, setShowContacts] = useState(false);
  const housePreviewPath = `/house-preview/${house._id}`;

  const pageViewMyPosts = currentPage === "my_posts";

  const onShowContact = () => setShowContacts(!showContacts);

  return (
    <div className="housecard">
      <HouseCardHeader
        showContacts={showContacts}
        houseImgs={house.imgs}
        houseId={house._id}
      />
      <HouseCardBody
        pageViewMyPosts={pageViewMyPosts}
        house={house}
        housePreviewPath={housePreviewPath}
        onUpdate={onUpdate}
      />
      <HouseCardFooter
        housePreviewPath={housePreviewPath}
        houseId={house._id}
        pageViewMyPosts={pageViewMyPosts}
        showContacts={showContacts}
        onShowContact={onShowContact}
      />
    </div>
  );
}

export default HouseCard;
