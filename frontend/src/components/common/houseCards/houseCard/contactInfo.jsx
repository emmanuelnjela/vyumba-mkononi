import { useContext } from "react";
import { Link } from "react-router-dom";
import UsersContext from "../../../../context/usersContext";
import ContactInfoAfterAuth from "./contactInfoAfterAuth";
import ContactInfoBeforeAuth from "./contactInfoBeforeAuth";
import Cookies from "universal-cookie";
import { ContactInfoLink } from "./contactInfoLink";

function ContactInfo() {
  const {isLogin} = useContext(UsersContext)

  const listItems = [
    {
      id: 1,
      content: <ContactInfoLink text="kupiga" iconText="fas fa-phone-volume"/>,
    },
    {
      id: 2,
      content:<ContactInfoLink text="SMS" iconText="fas fa-envelope"/>,
    },
    {
      id: 3,
      content: <ContactInfoLink text="whatsapp" iconText="fab fa-whatsapp"/>,
    },
  ];

  return (
    <div className="contact-info">
      {isLogin ? (
        <ContactInfoAfterAuth listItems={listItems} />
      ) : (
        <ContactInfoBeforeAuth />
      )}
    </div>
  );
}

export default ContactInfo;

