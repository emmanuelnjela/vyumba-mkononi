import withPopupCard from "../hoc/withPopupCard.jsx";

const ErrorMessage = ({ message }) => {
  return (
    <h1
      className="error error-red"
      style={{ color: "red", fontWeight: "bolder", textTransform: "capitalize" }}
    >
      {message}
    </h1>
  );
};

export default withPopupCard(ErrorMessage);
