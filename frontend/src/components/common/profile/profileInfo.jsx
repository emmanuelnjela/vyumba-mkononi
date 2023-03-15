import Dropdown from "../dropdown";
import ProfileInfoItem from "./profileInfoItem";

function ProfileInfo({ currentUser }) {
  const items = [
    { id: 1, content: <span>Mpangaji</span> },
    { id: 2, content: <span>Mwene Nyumba</span> },
  ];
  const profileInfoItems = [
    {
      id: 1,
      name: "fullName",
      title: "jina kamili",
    },
    {
      id: 2,
      name: "email",
      title: "Email",
    },
    {
      id: 3,
      name: "from",
      title: "Napoishi",
    },
    {
      id: 4,
      title: "Mimi Ni",
      content: () => <Dropdown items={items} />,
    },
  ];
  return (
    <div className="profile__info">
      {profileInfoItems.map((item) => (
        <ProfileInfoItem
          key={item.id}
          name={item.name}
          title={item.title}
          currentUser={currentUser}
          Content={item.content}
        />
      ))}
    </div>
  );
}

export default ProfileInfo;
