import React from "react";
import "../Profile/profile.css";

function Profile(props) {
  return (
    <section className="profile__container">
      <h2 className="profile__greeting">Привет, Мария!</h2>
      <div className="profile__data">
        <div className="profile__line">
        <p className="profile__caption">Имя</p>
        <p className="profile__content">Мария</p>
        </div>
        <div className="profile__line">
        <p className="profile__caption">E-mail</p>
        <p className="profile__content">pochta@yandex.ru</p>
        </div>

       <p className="profile__redact">Редактировать</p>
       <p className="profile__exit">Выйти из аккаунта</p>
      </div>
    </section>
  );
}

export default Profile;
