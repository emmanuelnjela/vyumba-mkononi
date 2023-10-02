import ReactLoading from "react-loading";


export default function Loader({type}) {
  return (
    <div className="loader">
      <ReactLoading
        type={type}
        color={"var(--primary-clr)"}
        height={100}
        width={100} />
    </div>
  );
}
