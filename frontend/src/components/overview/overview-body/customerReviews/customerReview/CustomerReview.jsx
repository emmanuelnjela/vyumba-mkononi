import CustomerReviewBody from "./customerReviewBody.jsx";
import CustomerReviewHeader from "./customerReviewHeader.jsx";

function CustomerReview({ translate }) {
  console.log(translate)
  return (
    <div className="customer-review" style={{ transform: `translate(${translate})` }}>
      <CustomerReviewHeader />
      <CustomerReviewBody />
    </div>
  );
}

export default CustomerReview;


