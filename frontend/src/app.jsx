import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react"

import "./app.css";
import { Suspense, lazy, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = lazy(() => import("./components/login"));
const Overview = lazy(() => import("./components/overview/Overview"));
const Register = lazy(() => import("./components/register"));
const Home = lazy(() => import("./components/home/Home"));
const HousePreview = lazy(() =>
  import("./components/common/housePreview/HousePreview")
);
const Welcome = lazy(() => import("./components/welcome"));

import { UsersProvider } from "./context/providers/users";
import { HousesProvider } from "./context/providers/houses";
import Cookies from "universal-cookie";
import logo from "../logo.png";
import { PageLoader } from "./components/common/PageLoader";

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
      </HousesProvider>
    </UsersProvider>
  );
}

export default App;


