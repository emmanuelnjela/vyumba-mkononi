import ErrorMessage from "../../common/errorMessage";

function RenderErrorMessage({ errorMessage }) {
  return errorMessage ? <ErrorMessage message={errorMessage} /> : <></>;
}

export default RenderErrorMessage;
