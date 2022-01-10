import React from "react";
import YMap from "../Map/YMap";
import ContactsDescription from "./Contacts/ContactsDescription";
import ContactsForm from "./Contacts/ContactsForm";

const Contacts = () => {
  return (
    <main>
      <section className="contacts">
        <div className="contacts__flex-container">
          <ContactsDescription />
          <ContactsForm />
        </div>
        <YMap />
      </section>
    </main>
  );
};

export default Contacts;
