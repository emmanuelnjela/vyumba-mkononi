function HouseRequestsSubmitted({ setShowRequest }) {
  return (
    <div className="d--grid bg--white p-xsm radius-sm">
      <h3 className="text--center mb-sm">Ombi lako limetumwa kikamilifu!</h3>
      <p className="mb-xsm">
        Mawasiliano yako yatatumika kukupa taarifa endapo itakapo patikana
        nyumba ya kupanga yenye vigezo hivyo. Bonyeza batani ya{" "}
        <span className="text--primary">Angalia Ombi Lako</span> ili kuangalia ombi lako, kufuta ombi
        lako au kubadili taarifa kuusu ombi lako.
      </p>
      <button
        className="btn btn--primary w-md-30 w-60 m-auto"
        onClick={() => setShowRequest(true)}
      >
        Angalia Ombi Lako <i className="fas fa-eye"></i>
      </button>
    </div>
  );
}
export default HouseRequestsSubmitted
