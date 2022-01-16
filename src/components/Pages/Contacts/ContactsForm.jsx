import React, { useRef, useState } from "react";

const checkTel = (tel) => {
  if (tel.length === 1) {
    return tel === "8" || tel === "+";
  } else if (tel.length === 2) {
    if (tel[0] === "+" && tel[1] !== "7") {
      return false;
    }
  }

  return !(
    isNaN(+tel) ||
    tel.includes(" ") ||
    (tel.length > 11 && tel[0] === "8") ||
    (tel.length > 12 && tel.slice(0, 2) === "+7")
  );
};

const checkTelLength = (tel) => {
  return tel.slice(0, 2) === "+7" ? tel.length === 12 : tel.length === 11;
};

const nameCheck = (name) => {
  if (!name.trim().length) {
    return false;
  }
  return name.trim().length >= 3;
};

const ContactsForm = ({ showModalMessage, showMessage, setShowMessage }) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    tel: "",
    email: "",
    comment: "",
  });
  const name = useRef(null);
  const tel = useRef(null);

  const formHandler = (e) => {
    e.preventDefault();

    name.current.className = "contacts__input";
    tel.current.className = "contacts__input";

    if (showMessage) {
      setShowMessage(false);
    }

    if (!nameCheck(inputValue.name)) {
      showModalMessage("Введено неверное имя", false);
      // name.current.className = "contacts__input contacts__input_failed";
      name.current.classList.add("contacts__input_failed");
      name.current.focus();
      return;
    }

    if (!checkTelLength(inputValue.tel)) {
      showModalMessage("Введен неверный телефон", false);
      tel.current.classList.add("contacts__input_failed");
      tel.current.focus();
      return;
    }

    showModalMessage("Форма отправлена!", true);
    // name.current.style.borderBottom = "none";

    // fetch("../../../helpers/sendForm.php", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(inputValue),
    // }).then((response) => {
    //   if (!response.ok) {
    //     Promise.reject("errorrrrrr").then((r) => alert("ошибка"));
    //
    //     return;
    //   }
    //
    //   alert("Форма отправлена");
    // });

    setInputValue({
      name: "",
      tel: "",
      email: "",
      comment: "",
    });
  };

  const inputHandler = (e) => {
    const [key, value] = [e.target.name, e.target.value];

    if (key === "tel") {
      const check = checkTel(value);
      if (!check) {
        return;
      }
    }

    setInputValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="contacts__form-container">
      <h2 className="contacts__title">Форма обратной связи</h2>
      <form action="" className="contacts__form" onSubmit={formHandler}>
        <input
          type="text"
          id="name"
          placeholder="Имя*"
          name="name"
          onChange={inputHandler}
          value={inputValue.name}
          ref={name}
          className="contacts__input"
        />
        <input
          type="tel"
          id="name"
          placeholder="Телефон*"
          name="tel"
          value={inputValue.tel}
          onChange={inputHandler}
          ref={tel}
          className="contacts__input"
        />
        <input
          type="email"
          id="email"
          placeholder="Почта"
          name="email"
          value={inputValue.email}
          onChange={inputHandler}
          className="contacts__input"
        />
        <input
          type="text"
          id="comment"
          placeholder="Комментарий"
          name="comment"
          value={inputValue.comment}
          onChange={inputHandler}
          list="comment-values"
          className="contacts__input"
        />
        <datalist id="comment-values">
          <option value="Удобный вид связи: WhatsApp" />
          <option value="Удобный вид связи: Telegram" />
          <option value="Удобный вид связи: телефонный звонок" />
        </datalist>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default ContactsForm;
