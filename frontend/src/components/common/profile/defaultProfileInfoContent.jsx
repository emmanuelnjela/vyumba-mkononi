function DefaultProfileInfoContent({ currentUser, name }) {
  console.log(currentUser)
  return (
    <input
      type="text"
      name={name}
      className="profile__data"
      defaultValue={currentUser[name]} />
  );
}

export default DefaultProfileInfoContent