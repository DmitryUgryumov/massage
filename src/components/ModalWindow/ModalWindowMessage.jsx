import React, { useEffect, useRef } from "react";

const ModalWindowMessage = ({ message, isSend, setShowMessage }) => {
  const mes = useRef(null);

  useEffect(() => {
    mes.current.style.opacity = "1";
  }, []);

  useEffect(() => {
    if (isSend) {
      setTimeout(() => {
        mes.current.style.opacity = "0";
      }, 4000);

      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  });

  const className = isSend
    ? "modal-message modal-message_success"
    : "modal-message modal-message_failed";

  return (
    <div className={className}>
      <div className="modal-message__container">
        <p ref={mes}>{message}</p>
      </div>
    </div>
  );
};

export default ModalWindowMessage;
