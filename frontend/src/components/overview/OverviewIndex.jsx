import OverviewBody from "./overview-body/overviewBody";
import OverviewFooter from "./overview-footer/overviewFooter";
import OverviewSearchbar from "./overview-header/overviewSearchbar";
import OverviewNavbar from "./overview-header/overviewNavbar";

function OverviewIndex() {
  return (
    <>
      <OverviewNavbar />
      <OverviewSearchbar />
      <OverviewBody />
      <OverviewFooter />
    </>
  );
}

export default OverviewIndex;
