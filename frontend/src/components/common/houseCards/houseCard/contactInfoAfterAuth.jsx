import List from "../../list";

function ContactInfoAfterAuth({ listItems }) {
  return (
    <div className="contact-info__after-auth">
      <h6 className="text--center">Bonyeza batani moja hapo chini</h6>
      <List isInline={true} items={listItems} />
    </div>
  );
}

export default ContactInfoAfterAuth;
