import { Route, Routes } from "react-router-dom";

import "./app.css";
import Login from "./components/login";
import Overview from "./components/overview/Overview";
import Register from "./components/register";
import Home from "./components/home/Home";
import HousePreview from "./components/common/housePreview/HousePreview";
import Logout from "./components/logout";
import { UsersProvider } from "./context/providers/users";
import { HousesProvider } from "./context/providers/houses";

function App() {
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
            <Route path="/house-preview/:id" element={<HousePreview />} />
          </Routes>
        </div>
      </HousesProvider>
    </UsersProvider>
  );
}

export default App;
