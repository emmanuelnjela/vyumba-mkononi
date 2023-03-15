import ContactInfoActionLink from "./contactInfoActionLink";

function ContactInfoBeforeAuth() {
  return (
    <div className="contact-info__before-auth">
      <h6 className="text--center">Kuona Mawasiliano bonyeza hapa kujiunga</h6>
      <div className="contact-info__action">
        <ContactInfoActionLink to="/register" btnText="JIUNGE" />
        <h6 className="text--center">au</h6>
        <ContactInfoActionLink to="/login" btnText="INGIA" />
      </div>
    </div>
  );
}

export default ContactInfoBeforeAuth;

