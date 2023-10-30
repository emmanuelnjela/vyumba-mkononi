import CustomerReview from "./customerReview/CustomerReview.jsx";

function CustomerReviewsBody({translate}) {
  return (
    <div className="customer-reviews__body">
      <CustomerReview translate={translate} />
      <CustomerReview translate={translate} />
      <CustomerReview translate={translate} />
    </div>
  );
}

export default CustomerReviewsBody;
