import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import UsersContext from "../../../../context/usersContext";

import HouseCardBody from "./houseCardBody";
import HouseCardFooter from "./houseCardFooter";
import HouseCardHeader from "./houseCardHeader";

function HouseCard({ house }) {
  console.log(house._id);
  const usersContext = useContext(UsersContext);

  const { "*": currentPage } = useParams();

  let { onUserUpdate: onUpdate, currentUser } = usersContext;
  const [showContacts, setShowContacts] = useState(false);
  const housePreviewPath = `/house-preview/${house._id}`;

  const pageViewMyPosts = currentPage === "my_posts";

  const onShowContact = () => setShowContacts(!showContacts);
  // const customOnUpdate =
  //   currentUser?._id === house?.ownerId ? onUpdate : () => null;

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
