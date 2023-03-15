function HouseDetails({house}) {
  return (
    <>
      <p className="text text--title text--bold">KINAPATIKANA - <span className="text">{house.location}</span></p>
      <p className="text text--title text--bold">KODI KWA MWEZI - <span className="text">{house.reasePerMounth}</span></p>
      <p className="text text--title text--bold">
        KODI INALIPWA KWA MIEZI - <span className="text">{house.minReaseLength}</span>
      </p>
    </>
  );
}

export default HouseDetails