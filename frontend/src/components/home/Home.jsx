import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";

import HomeLayout from "./homeLayout";
import { PageLoader } from "../common/PageLoader";
const Profile = lazy(() => import("../common/profile/Profile"));
const Saved = lazy(() => import("./saved/Saved"));
const AddHouse = lazy(() => import("./addHouse/AddHouse"));
const MyPosts = lazy(() => import("./myPosts/MyPosts"));
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
            path="deleteAccountComfirmMessage"
            element={<DeleteAccountComfirmMessage />}
          />

          <Route path="logout" element={<Logout />} />
          <Route path="add_house/" element={<AddHouse />}>
            <Route path=":currentItemNum" element={<AddHouse />} />
          </Route>
        </Route>
        <Route path="my_posts" element={<MyPosts />} />
        <Route path="saved" element={<Saved />} />
      </Routes>
    </Suspense>
  );
}

export default Home;
