import Dropdown from "../dropdown";
import ProfileInfoItem from "./profileInfoItem";

function ProfileInfo({ currentUser }) {
  const items = [
    { id: 1, value: "agent", content: <span>Mwenye Nyumba</span> },
    { id: 2, value: "houseOwner", content: <span>Dalali</span> },
  ];
  const profileInfoItems = [
    {
      id: 1,
      name: "userName",
      title: "jina",
    },
    {
      id: 2,
      name: "email",
      title: "Email",
    },
    {
      id: 3,
      name: "location",
      title: "unapotokea",
    },
    {
      id: 4,
      name: "phoneNumber",
      title: "Namba ya simu"
    },
    {
      id: 5,
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
