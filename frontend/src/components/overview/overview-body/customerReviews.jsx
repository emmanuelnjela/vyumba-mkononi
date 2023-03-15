import LineDivider from "../../common/lineDivider";
import CustomerReview from "./customerReview/customerReview";
import Slider from "../../common/slider";
import { useState } from "react";

function CustomerReviews() {
  const [selectedSlider, setSelectedSlider] = useState(1);

  var handleSliderSelect = (selectedSlider) => {
      console.log(selectedSlider)
      setSelectedSlider(selectedSlider);
  }
  const translate = `${selectedSlider === 1 ? 0 : selectedSlider === 2 ? "-20rem" : "-40rem" }`
  return (
    <div className="customer-reviews">
      <div className="customer-reviews__header">
        <h5>MAONI YA WATUMIAJI WETU</h5>
        <LineDivider />
      </div>
      <div className="customer-reviews__body">
        <CustomerReview translate={translate} />
        <CustomerReview translate={translate} />
        <CustomerReview translate={translate}/>
      </div>
      <div className="custoner-review-footer">
        <Slider
          selectedSlider={selectedSlider}
          sliderTotal={3}
          onSliderSelect={handleSliderSelect}
        />
      </div>
    </div>
  );
}

export default CustomerReviews;
