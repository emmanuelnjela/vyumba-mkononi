import { Link } from "react-router-dom";

import List from "./list";

function ContactIcons({ phoneNumber }) {
  // pNum = String(pNum)
  // console.log(phoneNumbereplace(/^0/, "255"))
  phoneNumber = phoneNumber?.replace(/^0/, "255");
  console.log(phoneNumber)

  const listItems = [
    {
      id: 1,
      content: (
        <Link to={`tel:${phoneNumber}`} className="link">
          <i className="fas fa-phone-volume rounded rounded--primary"></i>
          <span>Kupiga</span>
        </Link>
      ),
    },
    {
      id: 2,
      content: (
        <Link to={`sms://${phoneNumber}`} className="link">
          <i className="fas fa-envelope rounded rounded--primary"></i>
          <span>SMS</span>
        </Link>
      ),
    },
    {
      id: 3,
      content: (
        <Link to={`//wa.me/${phoneNumber}`} className="link">
          <i className="fab fa-whatsapp rounded rounded--primary"></i>
          <span>WhatsApp</span>
        </Link>
      ),
    },
  ];
  return (
    <div className="contact-icons">
      <List items={listItems} isInline={true} />
    </div>
  );
}

export default ContactIcons;
