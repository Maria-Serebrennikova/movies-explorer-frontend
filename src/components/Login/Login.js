import React, { useState } from "react";
import logo from "../../images/logo.svg";
import "../Login/login.css";
import { Link } from "react-router-dom";
import validator from "validator";

function Login({ onSignIn, errorMessage }) {
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = React.useState({});

  function handleChange(e) {
    if (e.target.name === "email") {
      if (!validator.isEmail(e.target.value)) {
        e.target.setCustomValidity("Некорректно введен email");
      } else {
        e.target.setCustomValidity("");
      }
    }

    setValues({ ...values, [e.target.name]: e.target.value });
    setIsValid(e.target.closest("form").checkValidity());
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSignIn(values);
  }

  return (
    <section className="login__container">
      <Link to="/" className="login__logo-center">
        <img className="login__logo" src={logo} alt="Логотип" />
      </Link>
      <h2 className="login__greeting">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit} action="/">
        <div className="login__form-string">
        <label className="login__label">E-mail</label>
        <input
          className="login__input"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          id="email"
          name="email"
          value={values.email || ""}
          minLength="2"
          maxLength="40"
          required
        ></input>
        <span className="login__error">{errors.email}</span>
        </div>
        <div className="login__form-string">
        <label className="login__label">Пароль</label>
        <input
          className="login__input"
          value={values.password || ''}
          onChange={handleChange}
          type="password"
          placeholder="Пароль"
          id="password"
          name="password"
          minLength="5"
          maxLength="40"
          required
         ></input>
        <span className="login__error">{errors.password}</span>
        </div>
        <button type="submit" className="login__button" disabled={!isValid}>
          Войти
        </button>
        <Link to="/signup" className="login__link">
          <span className="login__question">Ещё не зарегистрированы?</span>
          Регистрация
        </Link>
      </form>
    </section>
  );
}

export default Login;
