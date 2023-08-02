import DefaultProfileInfoContent from "./defaultProfileInfoContent";

function profileInfoItem({ Content, title, currentUser, name }) {
  return (
    <div className="profile__info-item">
      <p className="profile__label">{title}</p>
      {Content ? (
        <Content currentUser={currentUser} />
      ) : (
        <DefaultProfileInfoContent currentUser={currentUser} name={name} title={title} />
      )}
    </div>
  );
}

export default profileInfoItem;
