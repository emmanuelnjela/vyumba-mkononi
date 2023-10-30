import Slider from "../../../common/slider.jsx";

function CustomerReviewsFooter({ selectedSlider, onSliderSelect }) {
  return (
    <div className="customer-review-footer">
      <Slider
        selectedSlider={selectedSlider}
        sliderTotal={3}
        onSliderSelect={onSliderSelect}
      />
    </div>
  );
}

export default CustomerReviewsFooter;
