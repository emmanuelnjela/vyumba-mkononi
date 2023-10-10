import { useContext } from "react";
import UsersContext from "../../../../context/usersContext";
import ContactInfoAfterAuth from "./contactInfoAfterAuth";
import ContactInfoBeforeAuth from "./contactInfoBeforeAuth";
import { ContactInfoLink } from "./contactInfoLink";
import _ from "lodash";

function ContactInfo({ phoneNumber }) {
  const { currentUser } = useContext(UsersContext);

  const listItems = [
    {
      id: 1,
      content: (
        <ContactInfoLink
          link={`tel:${phoneNumber}`}
          text="kupiga"
          iconText="fas fa-phone-volume"
        />
      ),
    },
    {
      id: 2,
      content: (
        <ContactInfoLink
          link={`sms://${phoneNumber}`}
          text="SMS"
          iconText="fas fa-envelope"
        />
      ),
    },
    {
      id: 3,
      content: (
        <ContactInfoLink
          link={`//wa.me/${phoneNumber}`}
          text="whatsapp"
          iconText="fab fa-whatsapp"
        />
      ),
    },
  ];

  return (
    <div className="contact-info">
      {!_.isEmpty(currentUser) ? (
        <ContactInfoAfterAuth listItems={listItems} />
      ) : (
        <ContactInfoBeforeAuth />
      )}
    </div>
  );
}

export default ContactInfo;
