function DefaultProfileInfoContent({ currentUser, name }) {
  return (
    <input
      type="text"
      name={name}
      className="profile__data"
      defaultValue={currentUser[name]} />
  );
}

export default DefaultProfileInfoContent