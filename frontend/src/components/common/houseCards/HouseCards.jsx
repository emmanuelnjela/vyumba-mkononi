import HouseCardsHeader from "./houseCardsHeader";
import HouseCardsBody from "./houseCardsBody";

function HouseCards({currentItems: houses, houseCardsTitle, layoutClass}) {
    return (
        <div className="housecards">
            <HouseCardsHeader houseCardsTitle={houseCardsTitle} />
            <HouseCardsBody houses={houses} layoutClass={layoutClass} />
        </div>
    )
}

export default HouseCards


