import { useState } from "react";

import CustomerReviewsFooter from "./customerReviewsFooter.jsx";
import CustomerReviewsBody from "./customerReviewsBody.jsx";
import CustomerReviewsHeader from "./customerReviewsHeader.jsx";

function CustomerReviews() {
  const [selectedSlider, setSelectedSlider] = useState(1);

  var handleSliderSelect = (selectedSlider) => {
    setSelectedSlider(selectedSlider);
  };
  // remove this ( Reason: inline style )
  const translate = `${
    selectedSlider === 1 ? 0 : selectedSlider === 2 ? "-20rem" : "-40rem"
  }`;
  return (
    <div className="customer-reviews">
      <CustomerReviewsHeader />
      <CustomerReviewsBody translate={translate} />
      <CustomerReviewsFooter
        selectedSlider={selectedSlider}
        onSliderSelect={handleSliderSelect}
      />
    </div>
  );
}

export default CustomerReviews;
