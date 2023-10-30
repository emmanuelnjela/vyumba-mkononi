import { Outlet } from "react-router-dom";
// import HomeBody from "./homeBody";
import HomeFooter from "./homeFooter";
import HomeHeader from "./homeHeader";
import { lazy, Suspense } from "react";
const MyPosts = lazy(() => import("./myPosts/MyPosts.jsx"));
const Saved = lazy(() => import("./saved/Saved.jsx"));
const HouseRequests = lazy(() => import("./houseRequests/HouseRequests.jsx"));

import { Route, Routes } from "react-router-dom";
import { PageLoader } from "../common/PageLoader";
import HomeBody from "./homeBody";
import { HomeBodyIndex } from "./HomeBodyIndex";

function HomeLayout() {
  return (
    <div className="home">
      <HomeHeader />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="*" element={<HomeBody />}>
            <Route index element={<HomeBodyIndex />} />
            <Route path="saved" element={<Saved />} />
            <Route path="my_posts" element={<MyPosts />} />
            <Route path="add_request" element={<HouseRequests />} />
          </Route>
        </Routes>
      </Suspense>
      <HomeFooter />
    </div>
  );
}

export default HomeLayout;
