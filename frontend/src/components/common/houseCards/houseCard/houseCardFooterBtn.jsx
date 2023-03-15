import { useNavigate } from "react-router-dom";

function HouseCardFooterBtn({
  pageViewMyPosts,
  housePreviewPath,
  onShowContact,
  showContacts,
}) {
  const navigate = useNavigate();
  return (
    <button
      className="btn btn--primary"
      onClick={
        pageViewMyPosts
          ? () => navigate(housePreviewPath)
          : () => onShowContact(!showContacts)
      }
    >
      {pageViewMyPosts ? (
        <>
          <i className="fas fa-eye icon--md"></i> ona zaidi
        </>
      ) : !showContacts ? (
        "Mawasiliano"
      ) : (
        "Rudi"
      )}
    </button>
  );
}

export default HouseCardFooterBtn;
