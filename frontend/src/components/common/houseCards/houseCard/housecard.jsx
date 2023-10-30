import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UsersContext from "../../../../context/usersContext.jsx";

import HouseCardBody from "./houseCardBody.jsx";
import HouseCardFooter from "./houseCardFooter.jsx";
import HouseCardHeader from "./houseCardHeader.jsx";

function HouseCard({ house }) {
  console.log(house._id);
  const usersContext = useContext(UsersContext);
  const [owner, setOwner] = useState({});

  const { "*": currentPage } = useParams();

  let { onUserUpdate: onUpdate, onGetUser, currentUser } = usersContext;
  const [showContacts, setShowContacts] = useState(false);
  const housePreviewPath = `/house-preview/${house._id}`;

  const pageViewMyPosts = currentPage === "my_posts";

  const onShowContact = () => setShowContacts(!showContacts);
  // const customOnUpdate =
  //   currentUser?._id === house?.ownerId ? onUpdate : () => null;
  useEffect(() => {
    async function fetchOwner() {
     try {
       const respondUser = await onGetUser(house.ownerId);
       const user = respondUser.data.user;
 
       setOwner(user)
     } catch (error) {
       console.log(error.message)
     }
    }
    fetchOwner()
  }, []);

  return (
    <div className="housecard">
      <HouseCardHeader
        showContacts={showContacts}
        houseImgs={house.imgs}
        houseId={house._id}
        owner={owner}
      />
      <HouseCardBody
        pageViewMyPosts={pageViewMyPosts}
        house={house}
        housePreviewPath={housePreviewPath}
        onUpdate={onUpdate}
        currentUser={currentUser}
      />
      <HouseCardFooter
        housePreviewPath={housePreviewPath}
        houseId={house._id}
        roomType={house.roomType}
        pageViewMyPosts={pageViewMyPosts}
        showContacts={showContacts}
        onShowContact={onShowContact}
      />
    </div>
  );
}

export default HouseCard;
