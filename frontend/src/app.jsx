import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

// import { useEffect, useState } from "react"

import "./app.css";
import Login from "./components/login";
import Overview from "./components/overview/Overview";
import Register from "./components/register";
import Home from "./components/home/Home";
import HousePreview from "./components/common/housePreview/HousePreview";
import Logout from "./components/logout";
import { UsersProvider } from "./context/providers/users";
import { HousesProvider } from "./context/providers/houses";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import Welcome from "./components/welcome";

function App() {
  const navigate = useNavigate();
  const url = useLocation();

  const cookies = new Cookies();
  const currentUserId = cookies.get("currentUserId");
  useEffect(() => {
    const excludedPathnames = [
      "/",
      "/register",
      "/welcome",
      "/about-us",
      "/house-search-bar-message",
    ];
    const isPathNameExcluded = excludedPathnames.some(
      (path) => path === url.pathname
    );
    if (!currentUserId && !isPathNameExcluded) return navigate("/login");
  }, [currentUserId, navigate, url.pathname]);

  return (
    <UsersProvider>
      <HousesProvider>
        <div className="container">
          <Routes>
            <Route path="*" element={<Overview />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/house-preview/:id/*" element={<HousePreview />} />
          </Routes>
        </div>
      </HousesProvider>
    </UsersProvider>
  );
}

export default App;
