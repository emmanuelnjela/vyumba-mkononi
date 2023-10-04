import ReactLoading from "react-loading";
import logo from "../../imgs/logo.png";

export function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader">
        <img className="logo" src={logo} alt="" />
        <h1 className="text--secondary">Vyumba Mkononi</h1>
        <ReactLoading
          type={"bars"}
          color={"var(--primary-clr)"}
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}

export function Loader() {
  return (
    <div className="loader">
      <ReactLoading
        type="balls"
        color={"var(--primary-clr)"}
        height={100}
        width={100}
      />
    </div>
  );
}
