import OverviewBody from "./overview-body/overviewBody";
import OverviewFooter from "./overview-footer/overviewFooter";

function OverviewLayout() {
    return (
        <div className="overview">
            <OverviewBody />
            <OverviewFooter />
        </div>
    )
}

export default OverviewLayout