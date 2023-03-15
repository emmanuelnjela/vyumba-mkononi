import { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../../../context/currentUserContext";
import ContactInfoAfterAuth from "./contactInfoAfterAuth";
import ContactInfoBeforeAuth from "./contactInfoBeforeAuth";

function ContactInfo() {
  const currentUserContext = useContext(CurrentUserContext)

  const { isLogin } = currentUserContext

  const listItems = [
    {
      id: 1,
      content: (
        <Link to={""} className="link">
          <i className="fas fa-phone-volume"></i>
          <span>Kupiga</span>
        </Link>
      ),
    },
    {
      id: 2,
      content: (
        <Link to={""} className="link">
          <i className="fas fa-envelope"></i>
          <span>SMS</span>
        </Link>
      ),
    },
    {
      id: 3,
      content: (
        <Link to={""} className="link">
          <i className="fab fa-whatsapp"></i>
          <span>WhatsApp</span>
        </Link>
      ),
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
