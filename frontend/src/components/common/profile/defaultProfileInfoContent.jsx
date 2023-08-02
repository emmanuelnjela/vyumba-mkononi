function DefaultProfileInfoContent({ currentUser, name, title }) {
  return (
    <input
      type="text"
      name={name}
      className="profile__data"
      defaultValue={currentUser[name]}
      placeholder={`Andika hapa ${title}`} />
  );
}

export default DefaultProfileInfoContent