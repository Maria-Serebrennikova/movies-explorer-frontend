import React from "react";
import logo from "../../images/logo.svg";
import "../Login/login.css";
import { Link } from 'react-router-dom';


function Login(props) {
  return (
    <section className="login__container">
      <Link to="/" className="login__logo-center"><img className="login__logo" src={logo} alt="Логотип" /></Link>
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
        <Link to = "/signin" className="login__link">
          <span className="login__question">Ещё не зарегистрированы?</span>
          Регистрация
        </Link>
      </form>
    </section>
  );
}

export default Login;
