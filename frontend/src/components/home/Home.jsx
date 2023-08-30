import Profile from "../common/profile/Profile";
import { Route, Routes } from "react-router-dom";

import Saved from "./saved/Saved";
import AddHouse from "./addHouse/AddHouse";
import HomeLayout from "./homeLayout";
import MyPosts from "./myPosts/MyPosts";

function Home() {
  return (
    <Routes>
      <Route path="*" element={<HomeLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="add_house/" element={<AddHouse />} >
          <Route path=":currentItemNum" element={<AddHouse />} />
        </Route>
      </Route>
      <Route path="my_posts" element={<MyPosts />} />
      <Route path="saved" element={<Saved />} />
    </Routes>
  );
}

export default Home;
