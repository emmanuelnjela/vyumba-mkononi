import NavigatorBtn from "../../common/navigatorBtn.jsx";

function ShowNavigator({ index, pos, onImgChange }) {
  return (
    index === 0 && (
      <div
        className={`house-preview__navigator-btn house-preview__navigator-btn-${pos}`}
        onClick={() => onImgChange(pos)}
      >
        <NavigatorBtn position={pos} />
      </div>
    )
  );
}

export default ShowNavigator
