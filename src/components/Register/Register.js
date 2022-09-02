import React, { useState } from "react";
import logo from "../../images/logo.svg";
import "../Register/register.css";
import { Link } from "react-router-dom";
import isEmail from "validator";

function Register({ onSignUp, errorMessage }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    if (e.target.name === "email") {
      if (!isEmail(e.target.value)) {
        e.target.setCustomValidity("Некорректый адрес почты");
      } else {
        e.target.setCustomValidity("");
      }
    }

    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSignUp(values);
  }

  return (
    <section className="register__container">
      <Link to="/" className="register__logo-center">
        <img className="register__logo" src={logo} alt="Логотип" />
      </Link>
      <h2 className="register__greeting">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit} action="/">
      <div className="register__form-string">
        <label className="register__label">Имя</label>
        <input
          className="register__input"
          value={values.name || ''}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          minLength="2"
          maxLength="40"
          required
        ></input>
        <span className="register__error">{errors.name}</span>
        </div>
        <div className="register__form-string">
        <label className="register__label">E-mail</label>
        <input
          className="register__input"
          value={values.email || ''}
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          minLength="2"
          maxLength="40"
          required
        ></input>
        <span className="register__error">{errors.email}</span>
        </div>
        <div className="register__form-string">
        <label className="register__label">Пароль</label>
        <input
          className="register__input"
          value={values.password || ''}
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          minLength="5"
          maxLength="40"
        ></input>
        <span className="register__error">{errors.password}</span>
        </div>
        <button type="submit" className="register__button" disabled={!isValid}>
          Зарегистрироваться
        </button>
        <Link to="/signin" className="register__link">
          <span className="register__question">Уже зарегистрированы?</span>
          Войти
        </Link>
      </form>
    </section>
  );
}

export default Register;
