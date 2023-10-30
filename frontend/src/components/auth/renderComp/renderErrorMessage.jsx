import ErrorMessage from "../../common/errorMessage.jsx";

function RenderErrorMessage({ errorMessage, popupShow, handlePopupShow }) {
  return errorMessage ? (
    <ErrorMessage
      message={errorMessage}
      popupShow={popupShow}
      handlePopupShow={handlePopupShow}
    />
  ) : (
    <></>
  );
}

export default RenderErrorMessage;
