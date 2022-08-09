import React from "react";
import logo from "../../images/logo.svg";
import "../Register/register.css";

function Register(props) {
  return (
    <section className="register__container">
      <img className="register__logo" src={logo} alt="Логотип" />
      <h2 className="register__greeting">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__label">Имя</label>
        <input className="register__input"></input>
        <label className="register__label">E-mail</label>
        <input className="register__input"></input>
        <label className="register__label">Пароль</label>
        <input className="register__input"></input>
        <span className="register__error"></span>
        <button type="submit" className="register__button">
          Войти
        </button>
        <p className="register__link">
          <span className="register__question">Уже зарегистрированы?</span>
          Войти
        </p>
      </form>
    </section>
  );
}

export default Register;
