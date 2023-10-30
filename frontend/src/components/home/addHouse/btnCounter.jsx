import _ from "lodash";

export function BtnCounter({ size }) {

  return (
    <div className="btn-counter">
      {[1, 2, 3, 4].map((n) => {
        return (
          <button
            key={n}
            className={`btn-counter__item ${
              n <= size && "btn-counter__item--active"
            }`}
          >
            {n}
          </button>
        );
      })}
    </div>
  );
}
