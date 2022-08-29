import React from "react";
import "../Navigation/navigation.css";
import icon from "../../images/icon.svg";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [showMenu, setShowMenu] = React.useState(false);
  const handleToggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="navigation">
      <button
        className="navigation__burger"
        type="button"
        onClick={handleToggleMenu}
      ></button>
      <div
        className={`navigation__container ${
          showMenu ? "navigation__container_visible" : ""
        }`}
      >
        <div className="navigation__sidebar">
          <button
            className="navigation__close"
            type="button"
            onClick={handleToggleMenu}
          ></button>
          <ul className="navigation__list">
            <li className="navigation__element navigation__element_type_main">
              <NavLink
                to="/"
                className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' :''}` }
              >
                Главная
              </NavLink>
            </li>
            <li className="navigation__element">
              <NavLink
                to="/movies"
                className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' :''}` }
              >
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__element">
              <NavLink
                to="/saved-movies"
                className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' :''}` }
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <NavLink to="/profile" className="navigation__profile">
            Аккаунт
            <img
              className="navigation__profile-img"
              src={icon}
              alt="Изображение"
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
