import ErrorMessage from "../../common/errorMessage";

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
