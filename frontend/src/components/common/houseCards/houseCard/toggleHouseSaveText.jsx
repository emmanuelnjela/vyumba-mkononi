function ToggleHouseSaveText({onUpdate, savedUpateObj, isCurrentUserLikeHouse}) {
  return <span
    className="text--muted text--small"
    onClick={() => onUpdate(savedUpateObj)}
  >
    {isCurrentUserLikeHouse ? "Imehifadhiwa" : "Hifadhi"}
  </span>;
}

export default ToggleHouseSaveText