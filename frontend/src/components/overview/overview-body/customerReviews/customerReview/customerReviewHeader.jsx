import profileImg from "../../../../../imgs/profile.jpg";

function CustomerReviewHeader() {
  return (
    <div className="customer-review__header">
      <img
        src={profileImg}
        alt=""
        className="customer-review__img profile-img"
      />
    </div>
  );
}

export default CustomerReviewHeader