import { Link } from "react-router-dom";

export function ContactInfoLink({ iconText, text, link }) {
  return (
    <Link to={link} className="link">
      <i className={iconText}></i>
      <span>{text}</span>
    </Link>
  );
}
