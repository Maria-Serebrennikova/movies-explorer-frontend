import React from "react";
import "../Profile/profile.css";
import { Link } from 'react-router-dom';


function Profile(props) {
  return (
    <section className="profile__container">
      <h2 className="profile__greeting">Привет, Мария!</h2>
      <form className="profile__data">
        <div className="profile__line">
        <label className="profile__caption">Имя</label>
        <input className="profile__content" id='name' placeholder="Мария"></input>
        </div>
        <div className="profile__line">
        <label className="profile__caption">E-mail</label>
        <input className="profile__content" id='email' placeholder="pochta@yandex.ru"></input>
        </div>

       <button className="profile__redact" type='button'>Редактировать</button>
       <Link to = "/movies" className="profile__exit">Выйти из аккаунта</Link>
      </form>
    </section>
  );
}

export default Profile;
