// !Чтобы просмотреть состояние залогиненного хедера, раскомментируйте пжл строки 12 и 17, а строки 13 и 18 - закомментируйте.

import React from "react";
import logo from "../../images/logo.svg";
import ExitHeader from "../ExitHeader/ExitHeader";
import "../Header/header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header({ isLoggedIn }) {
  return (
    // <header className='header header_theme_light'>
    <header className={`header ${isLoggedIn ? "header_theme_light" : ""}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      {/* <Navigation/> */}
      {isLoggedIn ? <Navigation /> : <ExitHeader />}
    </header>
  );
}

export default Header;
