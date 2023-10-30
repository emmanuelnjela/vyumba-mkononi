import About from "./overview-body/about/About.jsx"
import CustomerReviews from "./overview-body/customerReviews/CustomerReviews.jsx"
import OverviewFooter from "./overview-footer/overviewFooter.jsx"
import OverviewNavbar from "./overview-header/overviewNavbar.jsx"

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