function HouseRequestsSubmitButton({ handleSubmit, onData, onError }) {
  return (
    <button
      onClick={handleSubmit(onData, onError)}
      to="/home/sendRequest"
      className="btn btn--primary m-auto"
      name="add"
    >
      Tuma Ombi <i className="fas fa-angle-right"></i>
    </button>
  );
}

export default HouseRequestsSubmitButton;
