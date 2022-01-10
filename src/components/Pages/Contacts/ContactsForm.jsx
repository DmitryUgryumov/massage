import React, { useState } from "react";

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
  // if (tel.slice(0, 2) === '+7') {
  //   return tel.length === 12
  // } else {
  //   return tel.length === 11
  // }
};

const nameCheck = (name) => {
  console.log(name.length, name.trim().length);
  if (!name.trim().length) {
    return false;
  }
  return name.trim().length >= 3;
};

const ContactsForm = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    tel: "",
    mail: "",
    comment: "",
  });

  const formHandler = (e) => {
    e.preventDefault();

    if (!nameCheck(inputValue.name)) {
      alert("Введено неверное имя");
      return;
    }

    if (!checkTelLength(inputValue.tel)) {
      alert("Введен неверный телефон");
      return;
    }

    console.log(inputValue);

    // alert("Форма отправлена");
    // setInputValue({
    //   name: "",
    //   tel: "",
    //   mail: "",
    //   comment: "",
    // });
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
        />
        <input
          type="tel"
          id="name"
          placeholder="Телефон*"
          name="tel"
          value={inputValue.tel}
          onChange={inputHandler}
        />
        <input
          type="email"
          id="mail"
          placeholder="Почта"
          name="mail"
          value={inputValue.mail}
          onChange={inputHandler}
        />
        <input
          type="text"
          id="comment"
          placeholder="Комментарий"
          name="comment"
          value={inputValue.comment}
          onChange={inputHandler}
          list="comment-values"
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
