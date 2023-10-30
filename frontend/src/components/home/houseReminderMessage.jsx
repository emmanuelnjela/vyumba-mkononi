import withPopUpCard from "../hoc/withPopupCard.jsx";

function HouseReminderMessage() {
  return (
    <div className="house-reminder-message text--center">
      <h5 className="mb-sm">Kwa sasa hakuna chumba au nyumba iliyo kidhi vigezo vyako</h5>
      <h6 className="mb-sm">
        Je, ungependa kupata taarifa pale tu chumba au nyumba mpya itakapo
        wekwa?
      </h6>
      <p className="mb-sm">
        Kama ndio bonyeza <span className="text--primary">ndio</span>, kama
        hautaki kupokea taarifa bonyeza{" "}
        <span className="text--primary">hapana</span>
      </p>
      <div className="btns d-flex space-btn mb-sm">
        <button className="btn btn--primary">Ndio</button>
        <button className="btn btn--danger">Hapana</button>
      </div>
      {/* <label htmlFor="" className="mb-sm d-flex align-items-center text-center">
        <i className="fas fa-info rounded rounded--primary"></i>
        Je, hautaki kupokea ujumbe kama huu tena
        <input type="checkbox" name="" id="" />
      </label> */}
    </div>
  );
}

export default withPopUpCard(HouseReminderMessage);
