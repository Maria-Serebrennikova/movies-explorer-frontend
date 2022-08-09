import React from "react";
import logo from "../../images/logo.svg";
import "../Header/header.css";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <div className="header__container">
        <div className="header__link">Регистрация</div>
        <button className="header__button" type="button">
          Войти
        </button>
      </div>
    </header>
  );
}

export default Header;
