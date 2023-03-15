function ToggleHouseSaveText({onUpdate, savedUpateObj, house}) {
  return <span
    className="text--muted text--small"
    onClick={() => onUpdate(savedUpateObj)}
  >
    {house.isSaved ? "Imehifadhiwa" : "Hifadhi"}
  </span>;
}

export default ToggleHouseSaveText