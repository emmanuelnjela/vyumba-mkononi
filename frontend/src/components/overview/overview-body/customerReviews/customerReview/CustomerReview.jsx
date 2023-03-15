import CustomerReviewBody from "./customerReviewBody";
import CustomerReviewHeader from "./customerReviewHeader";

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


