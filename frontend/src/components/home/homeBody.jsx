import { Outlet } from "react-router-dom";

function HomeBody() {
  return (
    <div className="home__body">
      <Outlet />
    </div>
  );
}

export default HomeBody;
