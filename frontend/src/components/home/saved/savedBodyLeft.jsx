import Dropdown from "../../common/dropdown.jsx";

export function SavedBodyLeft({ timeItems, roomTypeItems }) {
  return (
    <div className="saved__body--left">
      <div className="saved__sortbar">
        <h2 className="sort__title">Pangilia Kwa:</h2>
        <div className="sort__options">
          <span className="sort__option">
            <h6>Muda</h6> <Dropdown items={timeItems} />
          </span>
          {/* <span className="sort__option">
            <h6>Kodi mwanzo</h6> <Dropdown items={priceStartItems} />
          </span>
          <span className="sort__option">
            <h6>Kodi Mwisho</h6> <Dropdown items={priceEndItems} />
          </span> */}
          <span className="sort__option">
            <h6>Aina ya Chumba</h6> <Dropdown items={roomTypeItems} />
          </span>
          {/* <span className="sort__option">
            <h6>Kodi</h6>
            <div className="sort__option-radios">
              <div className="radio-group">
                <div className="input-group">
                  <input type="range" />
                </div>
              </div>
            </div>
          </span> */}
        </div>
      </div>
    </div>
  );
}
