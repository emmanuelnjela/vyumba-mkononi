import withPopUpCard from "../hoc/withPopupCard";

function ComfirmMessage({ message,denialMessage, acceptMessage, onclick }) {
  return (
    <div className="p-sm">
      <h1 className="text--center">{message}</h1>
      <div className="d-flex space-btn pt-sm">
        <button className="btn btn--primary" name="no" onClick={onclick}>
          Hapana, {denialMessage}
        </button>
        <button className="btn btn--danger" name="yes" onClick={onclick}>
          Ndio, {acceptMessage}
        </button>
      </div>
    </div>
  );
}

export default withPopUpCard(ComfirmMessage)
