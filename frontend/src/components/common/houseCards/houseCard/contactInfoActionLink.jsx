import { Link } from "react-router-dom";

function ContactInfoActionLink({ to, btnText }) {
  return (
    <Link to={to}>
      <button className="btn btn--primary">{btnText}</button>
    </Link>
  );
}

export default ContactInfoActionLink