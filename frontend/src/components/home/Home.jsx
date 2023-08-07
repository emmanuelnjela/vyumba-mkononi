import Profile from "../common/profile/Profile";
import { Route, Routes, useNavigate } from "react-router-dom";

import Saved from "./saved/Saved";
import AddHouse from "./addHouse/AddHouse";
import HomeLayout from "./homeLayout";
import MyPosts from "./myPosts/MyPosts";
import { useContext, useEffect } from "react";
import UsersContext from "../../context/usersContext";

function Home() {
  const {isLogin} = useContext(UsersContext);
  const navigate = useNavigate()
  useEffect(() => {
    if(!isLogin) return navigate("/login")
  }, [])
  
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
