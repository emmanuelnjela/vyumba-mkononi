function AddHouseInputGroup({ title, placeholder, Component }) {
  return (
    <div className="add-house__input-group">
      <h6 className="add-house__input-group-label text--dark">{title}</h6>
      {!placeholder ? (
        <Component />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="add-house__input-group-input"
        />
      )}
    </div>
  );
}

export default AddHouseInputGroup;
