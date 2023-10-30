import { Outlet } from "react-router-dom";

function HomeBody() {
  return (
    <div className="home__body pos--relative">
      <Outlet />
    </div>
  );
}

export default HomeBody;
