import React from "react";
import logo from "../../images/logo.svg";
import "../Login/login.css";


function Login(props) {
  return (
    <section className="login__container">
      <img className="login__logo" src={logo} alt="Логотип" />
      <h2 className="login__greeting">Рады видеть!</h2>
      <form className="login__form">
        <label className="login__label">E-mail</label>
        <input className="login__input"></input>
        <label className="login__label">Пароль</label>
        <input className="login__input"></input>
        <span className="login__error"></span>
        <button type="submit" className="login__button">
          Войти
        </button>
        <p className="login__link">
          <span className="login__question">Ещё не зарегистрированы?</span>
          Регистрация
        </p>
      </form>
    </section>
  );
}

export default Login;
