import OverviewBody from "./overview-body/overviewBody.jsx";
import OverviewFooter from "./overview-footer/overviewFooter.jsx";
import OverviewSearchbar from "./overview-header/overviewSearchbar.jsx";
import OverviewNavbar from "./overview-header/overviewNavbar.jsx";

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
