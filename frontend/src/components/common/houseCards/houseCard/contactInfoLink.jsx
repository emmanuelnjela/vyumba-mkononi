import { Link } from "react-router-dom";

export function ContactInfoLink({ iconText, text }) {
  return (
    <Link to={""} className="link">
      <i className={iconText}></i>
      <span>{text}</span>
    </Link>
  );
}
