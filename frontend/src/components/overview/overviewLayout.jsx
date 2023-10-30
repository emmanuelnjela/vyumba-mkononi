import OverviewBody from "./overview-body/overviewBody.jsx";
import OverviewFooter from "./overview-footer/overviewFooter.jsx";

function OverviewLayout() {
    return (
        <div className="overview">
            <OverviewBody />
            <OverviewFooter />
        </div>
    )
}

export default OverviewLayout