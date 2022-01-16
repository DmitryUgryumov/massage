import React, { useState } from "react";
import YMap from "../Map/YMap";
import ContactsDescription from "./Contacts/ContactsDescription";
import ContactsForm from "./Contacts/ContactsForm";
import ModalWindowMessage from "../ModalWindow/ModalWindowMessage";

const Contacts = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [isSend, setIsSend] = useState(false);

  const showModalMessage = (mes, isSend) => {
    setMessage(mes);
    setIsSend(isSend);
    setShowMessage(true);
  };

  return (
    <main>
      <section className="contacts">
        <div className="contacts__flex-container">
          <ContactsDescription />
          <ContactsForm
            showModalMessage={showModalMessage}
            showMessage={showMessage}
            setShowMessage={setShowMessage}
          />
        </div>
        <YMap />
        {showMessage ? (
          <ModalWindowMessage
            message={message}
            isSend={isSend}
            setShowMessage={setShowMessage}
          />
        ) : null}
      </section>
    </main>
  );
};

export default Contacts;
