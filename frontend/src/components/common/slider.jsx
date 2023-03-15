import _ from "lodash";

function Slider({ sliderTotal, selectedSlider, onSliderSelect }) {
  const sliderItems = _.range(1, sliderTotal + 1);

  return (
    <div className='slider'>
      {sliderItems.map((item) => {
        return (
          <div
            key={item}
            onClick={() => onSliderSelect(item)}
            className={`slider__ball ${
              selectedSlider === item ? "slider__ball--active" : ""
            }`}></div>
        );
      })}
    </div>
  );
}

export default Slider;
