import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

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

function App() {
  const navigate = useNavigate();
  const url = useLocation();

  const cookies = new Cookies();
  const currentUserId = cookies.get("currentUserId");
  useEffect(() => {
    const excludedPathnames = ["/", "/register", "/about-us"];
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
            <Route path="/logout" element={<Logout />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/house-preview/:id/*" element={<HousePreview />} />
          </Routes>
        </div>
      </HousesProvider>
    </UsersProvider>
  );
}

export default App;
