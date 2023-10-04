import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import HomeLayout from "./homeLayout";
import { PageLoader } from "../common/PageLoader";
const HouseReminderMessage = lazy(() => import("./houseReminderMessage"));
const Profile = lazy(() => import("../common/profile/Profile"));

const AddHouse = lazy(() => import("./addHouse/AddHouse"));
const Logout = lazy(() => import("../logout"));
const DeleteAccountComfirmMessage = lazy(() =>
  import("../common/profile/deleteAccountComfirmMessage")
);

function Home() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="*" element={<HomeLayout />}>
          <Route path="profile" element={<Profile />}></Route>
          <Route
            path="houseReminderMessage"
            element={<HouseReminderMessage />}
          ></Route>
          <Route
            path="deleteAccountComfirmMessage"
            element={<DeleteAccountComfirmMessage />}
          />

          <Route path="logout" element={<Logout />} />
          <Route path="add_house/" element={<AddHouse />}>
            <Route path=":currentItemNum" element={<AddHouse />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Home;
