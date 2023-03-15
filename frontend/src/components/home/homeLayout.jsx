import { Outlet } from "react-router-dom";
import HomeBody from "./homeBody";
import HomeFooter from "./homeFooter";
import HomeHeader from "./homeHeader";

function HomeLayout() {
    return (
        <div className="home">
           <HomeHeader />
           <HomeBody />
           <HomeFooter />
           {/* <Outlet /> */}
        </div>
    )
}

export default HomeLayout