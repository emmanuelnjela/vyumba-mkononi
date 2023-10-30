import HouseCardsHeader from "./houseCardsHeader.jsx";
import HouseCardsBody from "./houseCardsBody.jsx";

function HouseCards({currentItems: houses, houseCardsTitle, layoutClass}) {
    return (
        <div className="housecards">
            <HouseCardsHeader houseCardsTitle={houseCardsTitle} />
            <HouseCardsBody houses={houses} layoutClass={layoutClass} />
        </div>
    )
}

export default HouseCards


