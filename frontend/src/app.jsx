import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react"

import "./app.css";
import { Suspense, lazy, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "universal-cookie";
import "react-toastify/dist/ReactToastify.css";

const Login = lazy(() => import("./components/login.jsx"));
const Overview = lazy(() => import("./components/overview/Overview.jsx"));
const Register = lazy(() => import("./components/register.jsx"));
const Home = lazy(() => import("./components/home/Home.jsx"));
const HousePreview = lazy(() =>
  import("./components/common/housePreview/HousePreview.jsx")
);
const Welcome = lazy(() => import("./components/welcome.jsx"));

import { UsersProvider } from "./context/providers/users.jsx";
import { HousesProvider } from "./context/providers/houses.jsx";
import { PageLoader } from "./components/common/PageLoader.jsx";
import { HousesInfoSelectProvider } from "./context/providers/houseInfoSelect.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <PageLoader />;

  return (
    <UsersProvider>
      <HousesProvider>
        <HousesInfoSelectProvider>
          <div className="container">
            <ToastContainer />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="*" element={<Overview />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/home/*" element={<Home />} />
                <Route path="/house-preview/:id/*" element={<HousePreview />} />
              </Routes>
            </Suspense>
          </div>
        </HousesInfoSelectProvider>
      </HousesProvider>
    </UsersProvider>
  );
}

export default App;
