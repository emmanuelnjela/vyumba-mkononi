import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import HomeLayout from "./homeLayout";
import { PageLoader } from "../common/PageLoader";
const HouseReminderMessage = lazy(() => import("./houseReminderMessage.jsx"));
const Profile = lazy(() => import("../common/profile/Profile.jsx"));

const AddHouse = lazy(() => import("./addHouse/AddHouse.jsx"));
const Logout = lazy(() => import("../logout.jsx"));
const DeleteAccountComfirmMessage = lazy(() =>
  import("../common/profile/deleteAccountComfirmMessage")
);

function Home() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="*">
          <Route path="*"  element={<HomeLayout />} />
          <Route path="profile" element={<HomeLayout />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="houseReminderMessage" element={<HomeLayout />}>
            <Route index element={<HouseReminderMessage />} />
          </Route>
          <Route path="deleteAccountComfirmMessage" element={<HomeLayout />}>
            <Route index element={<DeleteAccountComfirmMessage />} />
          </Route>
          <Route path="add_house/" element={<HomeLayout />}>
            <Route index element={<AddHouse />} />
            <Route path=":currentItemNum" element={<AddHouse />} />
          </Route>
          <Route path="logout" element={<HomeLayout />}>
            <Route index element={<Logout />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Home;
