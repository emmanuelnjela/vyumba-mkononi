import About from "./overview-body/about/About"
import CustomerReviews from "./overview-body/customerReviews/CustomerReviews"
import OverviewFooter from "./overview-footer/overviewFooter"
import OverviewNavbar from "./overview-header/overviewNavbar"

function OverviewAboutUs() {
    return (
        <>
            <OverviewNavbar />
            <About />
            <CustomerReviews />
            <OverviewFooter />
        </>
    )
}

export default OverviewAboutUs